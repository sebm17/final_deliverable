import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("App renders as expected", () => {
  const wrapper = render(<App />);
  expect(wrapper).toMatchSnapshot();
});
