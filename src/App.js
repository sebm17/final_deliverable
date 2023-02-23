import React, { createContext, useReducer } from "react";
import "./App.css";
import { Header, AddB1, B1Card, B1List, B1Window } from "./components";
import { B1FileInputProvider } from "./B1Context";

const initialB1Files = [
  {
    id: "1",
    mpan: "1591029068761",
    mprn: "7471856205",
    jad: "jad1",
    jtc: "jtc1"
  },
  {
    id: "2",
    mpan: "mpan2",
    mprn: "mprn2",
    jad: "jad2",
    jtc: "jtc2"
  }
];

function b1Reducer(state, action) {
  const { selectedInputId, b1Inputs } = state;
  switch (action.type) {
    case "ADD_B1_FILE":
      // ID is whatever the last one is + 1
      const newId = b1Inputs[b1Inputs.length - 1]
        ? parseInt(b1Inputs[b1Inputs.length - 1].id, 10) + 1
        : 1;
      return {
        selectedInputId: newId,
        b1Inputs: [...b1Inputs, { ...action.payload, id: newId }]
      };
    case "REMOVE_B1_FILE":
      const newInputs = b1Inputs.filter((b1File) => b1File.id !== action.id);
      const newSelectedInputId =
        action.id === selectedInputId ? undefined : selectedInputId;
      return { selectedInputId: newSelectedInputId, b1Inputs: newInputs };
    case "SET_CURRENT_B1_FILE":
      return { ...state, selectedInputId: action.id };
    default:
      console.warn("unknown action received type=", action.type);
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(b1Reducer, { b1Inputs: initialB1Files });

  return (
    <B1FileInputProvider value={[state, dispatch]}>
      <div className="ui vertically divided grid">
        <div className="one column row">
          <Header />
        </div>
        <div className="two column row">
          <div className="column">
            <AddB1 />
          </div>
          <div className="column">
            <B1List b1Files={state.b1Inputs} />
          </div>
        </div>
        <B1Window
          selectedInput={state.b1Inputs.find(
            (input) => input.id === state.selectedInputId
          )}
        />
      </div>
    </B1FileInputProvider>
  );
}

export default App;
