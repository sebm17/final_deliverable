import React from "react";
import { render } from "@testing-library/react";
import { B1Card } from "./B1Card";
import { B1FileInputProvider } from "../B1Context";
import { fireEvent } from "@testing-library/react";

test("card renders as expected", () => {
  const result = render(
    <B1FileInputProvider value={[{ selectedInputId: 2 }, jest.fn()]}>
      <B1Card
        b1File={{
          id: "1",
          mpan: "mpan1",
          mprn: "mprn1",
          jad: "jad1",
          jtc: "jtc1"
        }}
      />
    </B1FileInputProvider>
  );

  expect(result).toMatchSnapshot();
});

test("clicking card dispatches selection action", () => {
  const dispatchFn = jest.fn();

  const { getByTestId } = render(
    <B1FileInputProvider value={[{ selectedInputId: 2 }, dispatchFn]}>
      <B1Card
        b1File={{
          id: "1",
          mpan: "mpan1",
          mprn: "mprn1",
          jad: "jad1",
          jtc: "jtc1"
        }}
      />
    </B1FileInputProvider>
  );

  const card = getByTestId("card");
  fireEvent.click(card);

  expect(dispatchFn).toHaveBeenCalledWith({
    type: "SET_CURRENT_B1_FILE",
    id: "1"
  });
});

test("clicking bin dispatches delete action", () => {
  const dispatchFn = jest.fn();

  const { getByTestId } = render(
    <B1FileInputProvider value={[{ selectedInputId: 2 }, dispatchFn]}>
      <B1Card
        b1File={{
          id: "1",
          mpan: "mpan1",
          mprn: "mprn1",
          jad: "jad1",
          jtc: "jtc1"
        }}
      />
    </B1FileInputProvider>
  );

  const bin = getByTestId("bin");
  fireEvent.click(bin);

  expect(dispatchFn).toHaveBeenCalledWith({ type: "REMOVE_B1_FILE", id: "1" });
});
