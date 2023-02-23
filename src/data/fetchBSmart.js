import { localdb } from "./localdb";

export function fetchBSmart(b1Input) {
  const dataEntry = localdb.find(
    (entry) => entry.gasDetails.mprn == b1Input.mprn
  );

  const gasData = dataEntry?.gasDetails;

  return {
    serialNumber: gasData?.asset.serialNumber,
    modelCode: gasData?.asset.modelCode,
    manufacturerCode: gasData?.asset.manufacturerCode,
    meterType: gasData?.asset.meterType,
    paymentMethod: gasData?.asset.paymentMethod
  };
}
