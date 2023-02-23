export function generateB1File({
  mpan = "",
  jtc = "",
  elecSerialNumber = "",
  meterOperatingMode = "",
  mprn = "",
  modelCode = "",
  roleCode = "",
  manufacturerCode = "",
  paymentMethod = "",
  gasSerialNumber = "",
  appointmentId = ""
}) {
  const csvContent = `
HEADR,B0001,SCP,SUP,sms,MOA,20210511,113022,PN000001,PRDCT,24,1,,,,,,,,,,,,,,
TRANS,SM0000000004,SMMS-000000000000000000000000000000000000000000004,SIEMSPOWMO,${jtc},RDS3,REQST,,,,,,,,,,,,,,,,D,PMCUST000004,N,1
EMTPNT,${mpan},P,393,,,,,,,,,,,,,,,,,,,,,,
ASSET,REMVE,EMETER,1C-23-4F-00-00-04-1E-FA,${elecSerialNumber},2.4,,D,sfwfwffw,,SPOW,,,,Additional Elec Asset info,,,,,,,,,,,
EMETER,S2AD,${meterOperatingMode},,,,,,,,,,,,,,,,,,,,,,,
EREGST,1,,,,,,,,,,,,,,,,,,,,,,,,
GMTPNT,${mprn},F,,,,,,,,,,,,,,,,,,,,,,,
ASSET,REMVE,GMETER,44-11-02-00-00-00-31-7A,${gasSerialNumber},2.4,,0,16 Office,,LBG,,,,Additional GAS Asset info,,,,,,,,,,,
GMETER,${modelCode},${roleCode},${manufacturerCode},${paymentMethod},,,,,,S2,,,,,,,,,,,,,,,
GREGST,1,,,,,,,,,,,,,,,,,,,,,,,,
ASSET,REMVE,CHUB,E4-FE-D9-00-01-CE-2C-3F,,DUAL,,X,,,,,,,Additional CHUB Asset info,,,,,,,,,,,
CHUB,Standard 420,DUAL,,,,,,,,,,,AERIAL REQUIRED,,,,,,,,,,,,
ASSET,REMVE,PPMID,0C-A2-F4-00-00-29-52-2B,,2.4,,X,,,,,,,Additional PPMID Asset info,,,,,,,,,,,
WAN,H,Standard 420,North,,,,,,,,,,,,,,,,,,,,,,
APPNT,${appointmentId},${appointmentId},0,0,,,,,,,,,,,,,,,,,,,,,
ADDRS,SITE,,,,361,,,369DINNERCLOSE,,,,TESTCHESTER,A12 3BC,,,,,,,,,,,,
NAME,CONS,Mrs,JJJJJJJ361,PPP361,,,,,,,,,,,,,,,,,,,,,
CONTM,MOBIL,TEL,7712345678,1,,,,,,,,,,,,,,,,,,,,,
CONTM,MOBIL,MOBIL,7712345678,1,,,,,,,,,,,,,,,,,,,,,
CONTM,MOBIL,EMAIL,TEST@TEST369.COM,1,,,,,,,,,,,,,,,,,,,,,
CARE,15,,,,,,,,,,,,,,,,,,,,,,,,
CARE,28,,,,,,,,,,,,,,,,,,,,,,,,
CARE,29,,,,,,,,,,,,,,,,,,,,,,,,
CARE,9,,,,,,,,,,,,,,,,,,,,,,,,
CARE,10,,,,,,,,,,,,,,,,,,,,,,,,
TRAIL,,,,,,,,,,,,,,,,,,,,,,,,,
`;

  return new Blob([csvContent], { type: "text/csv" });
}
