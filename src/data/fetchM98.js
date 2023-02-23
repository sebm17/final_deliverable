import { localdb } from "./localdb";

export function fetchM98(b1Input) {
  const dataEntry = localdb.find(
    (entry) => entry.elecDetails.mpan === b1Input.mpan
  );

  const electricData = dataEntry?.elecDetails;

  return {
    appointmentId: electricData?.appointment.id,
    roleCode: electricData?.appointment.roleCode,
    serialNumber: electricData?.device.serialNumber,
    meterOperatingMode: electricData?.device.admType
  };
}
