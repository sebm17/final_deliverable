import { fetchBSmart } from "./fetchBSmart";

test("fetches gas details if a valid MPRN is provided", () => {
  const result = fetchBSmart({ mprn: "7471856205" });

  expect(result.serialNumber).toBeTruthy();
  expect(result.modelCode).toBeTruthy();
  expect(result.manufacturerCode).toBeTruthy();
  expect(result.meterType).toBeTruthy();
  expect(result.paymentMethod).toBeTruthy();
});

test("if an invalid MPRN is provided, no details are fetched", () => {
  const result = fetchBSmart({ mprn: "INVALID_MPRN" });

  expect(result.serialNumber).toBe(undefined);
  expect(result.modelCode).toBe(undefined);
  expect(result.manufacturerCode).toBe(undefined);
  expect(result.meterType).toBe(undefined);
  expect(result.paymentMethod).toBe(undefined);
});
