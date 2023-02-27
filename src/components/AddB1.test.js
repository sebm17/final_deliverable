import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { B1FileInputProvider } from "../B1Context";
import { AddB1 } from "./AddB1";
import { fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("button is enabled after adding input", async () => {
  const { getByText, getByTestId } = render(
    <B1FileInputProvider value={[undefined, jest.fn()]}>
      <AddB1 />
    </B1FileInputProvider>
  );
  const processButton = getByText("Process B1 file");
  expect(processButton).toBeDisabled();

  const mpanInput = getByTestId("mpan");
  await userEvent.type(mpanInput, "1234567890");
  const mprnInput = getByTestId("mprn");
  await userEvent.type(mprnInput, "1234567890");
  const jadInput = getByTestId("jad");
  await userEvent.type(jadInput, "2023-10-10");
  const jtcInput = getByTestId("jtc");
  await userEvent.type(jtcInput, "ABC");

  expect(processButton).not.toBeDisabled();
});

test("when click add button, dispatches action", async () => {
  const dispatchFn = jest.fn();
  const { getByText, getByTestId } = render(
    <B1FileInputProvider value={[undefined, dispatchFn]}>
      <AddB1 />
    </B1FileInputProvider>
  );

  const mpanInput = getByTestId("mpan");
  await userEvent.type(mpanInput, "1234567890");
  const mprnInput = getByTestId("mprn");
  await userEvent.type(mprnInput, "1234567890");
  const jadInput = getByTestId("jad");
  await userEvent.type(jadInput, "2023-10-10");
  const jtcInput = getByTestId("jtc");
  await userEvent.type(jtcInput, "ABC");

  const processButton = getByText("Process B1 file");
  await userEvent.click(processButton);

  expect(dispatchFn).toHaveBeenCalledWith({
    type: "ADD_B1_FILE",
    payload: {
      mpan: "1234567890",
      mprn: "1234567890",
      jad: "2023-10-10",
      jtc: "ABC"
    }
  });
});

test("when click reset, clears user input", async () => {
  const { getByText, getByTestId } = render(
    <B1FileInputProvider value={[undefined, jest.fn()]}>
      <AddB1 />
    </B1FileInputProvider>
  );
  const processButton = getByText("Process B1 file");
  expect(processButton).toBeDisabled();

  const mpanInput = getByTestId("mpan");
  await userEvent.type(mpanInput, "1234567890");
  const mprnInput = getByTestId("mprn");
  await userEvent.type(mprnInput, "1234567890");
  const jadInput = getByTestId("jad");
  await userEvent.type(jadInput, "2023-10-10");
  const jtcInput = getByTestId("jtc");
  await userEvent.type(jtcInput, "ABC");

  expect(processButton).not.toBeDisabled();

  const resetButton = getByText("Reset");
  await userEvent.click(resetButton);

  // values are cleared
  expect(mpanInput.value).toBe("");
  expect(mprnInput.value).toBe("");
  expect(jadInput.value).toBe("");
  expect(jtcInput.value).toBe("");

  // button is disabled again
  expect(processButton).toBeDisabled();
});
