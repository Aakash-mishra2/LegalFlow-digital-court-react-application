
export const allDummyCases = {
    activeCases: 8,
    closedCases: 123,
    totalCases: 130,
    allCases: [
        {
            id: "C12345",
            status: "Scheduled",
            caseTitle: "State vs. John Doe",
            summary: "In the case of State vs. John Doe, the defendant is charged with aggravated assault following an altercation at a local bar. The prosecution argues that Doe's actions were premeditated and resulted in severe injuries to the victim, who required hospitalization. The defense claims self-defense, asserting that Doe was provoked and acted in response to a physical threat. ",
            judge: {
                judgeName: "Judge Emily Carter",
                judgeId: "J1001"
            },
            lawyer: {
                lawyerName: "Michael Johnson",
                lawyerId: "L2001"
            },
            court: {
                courtName: "District Court A",
                courtAddress: "123 Main St, Springfield, IL",
                courtId: "DCA100"
            },
            nextHearing: {
                date: "2024-11-10",
                timings: "10:00 AM - 11:00 AM",
            }
        },
        {
            id: "C12346",
            status: "In Progress",
            caseTitle: "Doe Corporation vs. Smith Inc.",
            summary: "In the case of Doe Corporation vs. Smith Inc., Doe Corporation alleges that Smith Inc. breached their contract by failing to deliver goods within the agreed-upon timeframe. As a result, Doe Corporation claims substantial financial losses due to production delays. Smith Inc. argues that unforeseen supply chain disruptions caused delays, and they notified Doe Corporation accordingly.",
            judge: {
                judgeName: "Judge Michael Brown",
                judgeId: "J1002"
            },
            lawyer: {
                lawyerName: "Sarah Lee",
                lawyerId: "L2002"
            },
            court: {
                courtName: "High Court B",
                courtAddress: "456 Justice Ave, Metropolis, NY",
                courtId: "HCB200"
            },
            nextHearing: {
                date: "2024-11-10",
                timings: "10:00 AM - 11:00 AM"
            },
        },
        {
            id: "C12347",
            status: "Adjourned",
            caseTitle: "City of Metropolis vs. Alex Johnson",
            summary: "City of Metropolis vs. Alex Johnson involves allegations of environmental violations by the defendant. Johnson, the owner of a local factory, is accused of discharging waste into nearby water sources, causing harm to the ecosystem. The prosecution, representing the city, presents evidence from environmental tests showing elevated levels of toxic substances.",
            judge: {
                judgeName: "Judge Sarah Lee",
                judgeId: "J1003"
            },
            lawyer: {
                lawyerName: "David Roberts",
                lawyerId: "L2003"
            },
            court: {
                courtName: "Supreme Court C",
                courtAddress: "789 Court Plaza, Gotham, NJ",
                courtId: "SCC300"
            },
            nextHearing: {
                date: "2024-11-10",
                timings: "10:00 AM - 11:00 AM"
            }
        },
        {
            id: "C12348",
            caseTitle: "Jane Doe vs. John Smith",
            summary: "In the case of Jane Doe vs. John Smith, Jane Doe is filing for divorce, citing irreconcilable differences. The couple has been married for over 10 years and has two children. Doe seeks primary custody, claiming Smith’s work commitments leave him unable to adequately care for the children. Smith argues for joint custody, citing a strong bond with the children. ",
            judge: {
                judgeName: "Judge Robert Green",
                judgeId: "J1004"
            },
            lawyer: {
                lawyerName: "Laura White",
                lawyerId: "L2004"
            },
            court: {
                courtName: "Family Court D",
                courtAddress: "101 Family St, Hill Valley, CA",
                courtId: "FCD400"
            },
            nextHearing: {
                date: "2024-11-10",
                timings: "10:00 AM - 11:00 AM"
            },
            status: "Dismissed"
        },
        {
            id: "C12349",
            caseTitle: "ACME Corp vs. New Technologies Ltd.",
            summary: "In the commercial dispute ACME Corp vs. New Technologies Ltd., ACME alleges that New Technologies breached a licensing agreement by using proprietary technology beyond the scope permitted. ACME is seeking damages and an injunction to prevent further unauthorized use. New Technologies contends that the contract terms are ambiguous and that they acted within their rights.",
            judge: {
                judgeName: "Judge Laura White",
                judgeId: "J1005"
            },
            lawyer: {
                lawyerName: "Benjamin Carter",
                lawyerId: "L2005"
            },
            court: {
                courtName: "Commercial Court E",
                courtAddress: "202 Market St, Silicon City, CA",
                courtId: "CCE500"
            },
            nextHearing: {
                date: "2024-11-10",
                timings: "10:00 AM - 11:00 AM"
            },
            status: "Closed"
        }
    ]
};

export const dummyUser = {
    "_id": "648db724c8dfa0ec049c6cbd",
    "name": "Sharma Ji",
    "email": "imsharmaji234@gmail.com",
    "password": "0",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4jCtU_gyHF8E34n_3ihpEtv9Cy0Ef6wQvA&usqp=CAU",
    "idCardNo": 0,
    "cases": [
        "650a9d2ddf9bb7700d91d3f6",
        "657adb4e27834ed8ee19a825",
        "66f1947d098c0d165df6b297"
    ],
    "__v": 11,
    "id": "648db724c8dfa0ec049c6cbd"
}

