import { fetchM98 } from "./fetchM98";

test("fetches electricity details if a valid MPAN is provided", () => {
  const result = fetchM98({ mpan: "1591029068761" });

  expect(result.appointmentId).toBeTruthy();
  expect(result.roleCode).toBeTruthy();
  expect(result.serialNumber).toBeTruthy();
  expect(result.meterOperatingMode).toBeTruthy();
});

test("if an invalid MPAN is provided, no details are fetched", () => {
  const result = fetchM98({ mpan: "INVALID_MPAN" });

  expect(result.appointmentId).toBe(undefined);
  expect(result.roleCode).toBe(undefined);
  expect(result.serialNumber).toBe(undefined);
  expect(result.meterOperatingMode).toBe(undefined);
});
