interface Brief {
  date: string,
  eventId: string,
  eventName: string,
  loads: {
    status: string,
    spreadsheetName: string,
    progress: number,
    contributors: string[]
  }[]
}

export const briefs: Brief[] = [
  {
    eventName: "Marketo Events 7/21/21 0N24 Elite Webcast No",
    date: "2021-07-22",
    eventId: "QIJXMAMB",
    loads: [
      {
        status: "Upload process complete",
        progress: -1,
        spreadsheetName: "webcast_4.xlsx",
        contributors: [
          "eshin.griffith@ibm.com",
          "kinsey.ashby@ibm.com"
        ]
      },
      {
        status: "Upload process in progress",
        progress: 1,
        spreadsheetName: "webcast_7.xlsx",
        contributors: [
          "darice.mathis@ibm.com",
          "tim.blackwood@ibm.com"
        ]
      },
    ]
  },
  {
    eventName: "Marketo Events 7/21/21 EDIT No Activities",
    date: "2021-07-20",
    eventId: "CON216MB",
    loads: [
      {
        status: "Upload process complete",
        progress: -1,
        spreadsheetName: "webcast_4.xlsx",
        contributors: [
          "eshin.griffith@ibm.com",
          "kinsey.ashby@ibm.com"
        ]
      }
    ]
  },
  {
    eventName: "Marketo Events 7/21/21 ON24 Elite Webcast",
    date: "2021-07-20",
    eventId: "FUY4I1MB",
    loads: [
      {
        status: "Upload process complete",
        progress: -1,
        spreadsheetName: "webcast_4.xlsx",
        contributors: [
          "eshin.griffith@ibm.com",
          "kinsey.ashby@ibm.com"
        ]
      }
    ]
  },
  {
    eventName: "Marketo Events 7/21/21 EDIT Activities,",
    date: "2021-07-20",
    eventId: "Z96C30MB",
    loads: []
  },
]