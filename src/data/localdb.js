const num1 = {
  customerDetails: {
    addressDetails: {
      addressName: "111",
      addressLine1: "Nmae PLACE",
      town: "HARTLEPOOL",
      postCode: "TS27 4PN"
    },
    contactDetails: {
      title: "dr",
      contactFirstName: "Name Name1",
      contactSurname: "Name",
      contactNumber: "07901234567"
    }
  },
  elecDetails: {
    siteContactName: "Contact name1",
    premisesId: "1308446060",
    mpan: "1591029068761",
    energisationStatus: "E",
    ssc: "0393",
    gsp: "_F",
    profileClass: "1",
    measurementClass: "A",
    msmtd: "10/10/2020",
    appointment: {
      id: "1331183424",
      roleCode: "M",
      supplier: "SPOW",
      startDate: "02/08/2021",
      regiDate: "10/10/2020",
      contractRef: "SPOWMO21"
    },
    device: {
      serialNumber: "17K0068052",
      deviceFunction: "ME",
      deviceType: "Elster AS300P single ph Smart Meter S1",
      admType: "S1",
      mapId: "SPSM",
      ownerId: "SPSM",
      efd: "10/10/2020",
      etd: "31/12/4712",
      wcCt: "WC",
      currentRating: 100,
      registers: [
        {
          registerId: "1",
          lastReading: 3853.0,
          lastReadingDate: "30/04/2019"
        }
      ],
      dmlCode: "X",
      manufacturerCode: "K",
      testDate: "2017-06-01T00:00:00Z",
      rate: 1,
      effectiveFromDate: "2020-10-10T00:00:00Z"
    },
    location: "Outside Box"
  },
  gasDetails: {
    mprn: "7471856205",
    locationCode: "32",
    locationDesc: "Meter box Outside",
    u16: false,
    asset: {
      serialNumber: "G4K00122521706",
      assetType: "METER",
      mapId: "UNK",
      modelCode: "BK-G4E",
      manufacturerCode: "ELM",
      measuringCapacity: 6,
      multiplicationFactor: 1,
      numberOfDigits: 5,
      pulseValue: 0,
      unitsOfMeasure: "SCMH",
      meterType: "S",
      mechanism: "NS",
      paymentMethod: "CR"
    },
    appointments: [
      {
        role: "SUP",
        marketParticipant: "SCP",
        startDate: "02/08/2021"
      },
      {
        role: "GAO",
        marketParticipant: "SCP",
        startDate: "02/08/2021"
      }
    ]
  },
  siteInfo: {
    isVip: false,
    specialNeeds: [],
    gasSiteType: "GAS"
  }
};

const num2 = {
  customerDetails: {
    addressDetails: {
      addressName: "222",
      addressLine1: "Name COURT",
      addressLine2: "HORBURY",
      town: "WAKEFIELD",
      county: "WEST YORKSHIRE",
      postCode: "WF4 5QD"
    },
    contactDetails: {
      title: "dr",
      contactFirstName: "Name Name2",
      contactSurname: "Name"
    }
  },
  elecDetails: {
    siteContactName: "Contact name2",
    premisesId: "1308524531",
    mpan: "2351100243111",
    energisationStatus: "E",
    ssc: "0393",
    gsp: "_M",
    profileClass: "1",
    measurementClass: "A",
    msmtd: "01/12/2017",
    appointment: {
      id: "1331323774",
      roleCode: "M",
      supplier: "SPOW",
      startDate: "16/08/2021",
      regiDate: "06/12/2020",
      contractRef: "SPOWMO21"
    },
    device: {
      serialNumber: "17K0418156",
      deviceFunction: "ME",
      deviceType: "GENERIC S1 Meter (15 Yr Recert)",
      admType: "S1",
      mapId: "SPSM",
      ownerId: "SPSM",
      efd: "01/12/2017",
      etd: "31/12/4712",
      wcCt: "WC",
      currentRating: 100,
      registers: [
        {
          registerId: "1",
          lastReading: 5284.0,
          lastReadingDate: "21/03/2019"
        }
      ],
      dmlCode: "E",
      testDate: "2017-10-01T00:00:00Z",
      rate: 1,
      effectiveFromDate: "2017-12-01T00:00:00Z"
    },
    location: "Indoors"
  },
  gasDetails: {
    mprn: "5067333410",
    locationCode: "32",
    locationDesc: "Meter box Outside",
    u16: false,
    asset: {
      serialNumber: "G4K00946291706",
      assetType: "METER",
      mapId: "UNK",
      modelCode: "BK-G4E",
      manufacturerCode: "ELM",
      measuringCapacity: 6,
      multiplicationFactor: 1,
      numberOfDigits: 5,
      pulseValue: 0,
      unitsOfMeasure: "SCMH",
      meterType: "S",
      mechanism: "NS",
      paymentMethod: "CR"
    },
    appointments: [
      {
        role: "SUP",
        marketParticipant: "SCP",
        startDate: "02/08/2021"
      },
      {
        role: "GAO",
        marketParticipant: "SCP",
        startDate: "02/08/2021"
      }
    ]
  },
  siteInfo: {
    isVip: false,
    specialNeeds: [],
    gasSiteType: "GAS"
  }
};

const num3 = {
  customerDetails: {
    addressDetails: {
      addressName: "333",
      addressLine1: "Name AVENUE",
      town: "SCUNTHORPE",
      postCode: "DN15 8AF"
    },
    contactDetails: {
      title: "dr",
      contactFirstName: "Name Nmae3",
      contactSurname: "Name"
    }
  },
  elecDetails: {
    siteContactName: "Contact name3",
    premisesId: "1308429606",
    mpan: "2374251370210",
    energisationStatus: "E",
    ssc: "0393",
    gsp: "_M",
    profileClass: "1",
    measurementClass: "A",
    msmtd: "27/02/2017",
    appointment: {
      id: "1331329697",
      roleCode: "M",
      supplier: "SPOW",
      startDate: "16/08/2021",
      regiDate: "06/12/2020",
      contractRef: "SPOWMO21"
    },
    device: {
      serialNumber: "16K0355397",
      deviceFunction: "ME",
      deviceType: "GENERIC S1 Meter (Uncertified)",
      admType: "S1",
      mapId: "MFSE",
      ownerId: "MFSE",
      efd: "27/02/2017",
      etd: "31/12/4712",
      wcCt: "WC",
      currentRating: 100,
      registers: [
        {
          registerId: "R1",
          lastReading: 8472.0,
          lastReadingDate: "23/02/2019"
        }
      ],
      dmlCode: "E",
      testDate: "2016-10-12T00:00:00Z",
      rate: 1,
      effectiveFromDate: "2017-02-27T00:00:00Z"
    },
    location: "Indoors"
  },
  gasDetails: {
    mprn: "2228987709",
    locationCode: "98",
    locationDesc: "Other",
    u16: false,
    asset: {
      serialNumber: "G4KS0114893161",
      assetType: "METER",
      mapId: "UNK",
      modelCode: "BK-G4E",
      manufacturerCode: "ELM",
      measuringCapacity: 6,
      multiplicationFactor: 1,
      numberOfDigits: 5,
      pulseValue: 0,
      unitsOfMeasure: "SCMH",
      meterType: "S",
      mechanism: "NS",
      paymentMethod: "CR"
    },
    appointments: [
      {
        role: "SUP",
        marketParticipant: "SCP",
        startDate: "02/08/2021"
      },
      {
        role: "GAO",
        marketParticipant: "SCP",
        startDate: "02/08/2021"
      }
    ]
  },
  siteInfo: {
    isVip: false,
    specialNeeds: [],
    gasSiteType: "GAS"
  }
};

export const localdb = [num1, num2, num3];
