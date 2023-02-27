import React from "react";
import { render } from "@testing-library/react";
import { B1Window } from "./B1Window";

test("if there is no input, do not render anything", async () => {
  const { queryByText } = render(<B1Window selectedInput={undefined} />);
  expect(queryByText("Gas")).toBeNull();
  expect(queryByText("Electricity")).toBeNull();
});

test("if there is input, render as expected", () => {
  // createObjectURL does not exist in jest so we pass a fake one to get the test passing
  global.URL = { ...global.URL, createObjectURL: jest.fn() };

  const wrapper = render(
    <B1Window
      selectedInput={{
        id: "1",
        mpan: "1591029068761",
        mprn: "7471856205",
        jad: "jad1",
        jtc: "jtc1"
      }}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
