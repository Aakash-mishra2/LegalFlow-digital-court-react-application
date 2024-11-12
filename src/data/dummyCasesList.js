import { AiOutlineFileAdd } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { HiOutlineHome } from "react-icons/hi";
import { BsWallet } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBank } from "react-icons/bs";
import { IoCashOutline } from "react-icons/io5";
import { FaLaptop } from "react-icons/fa";
import iciciImage from "../assets/images/iciciLogo.png";
import axisImage from "../assets/images/axisBank.png";

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

export const sidebarOptions = [
    {
        icon: HiOutlineHome,
        title: 'Dashboard',
        url: '/dashboard'
    },
    {
        icon: AiOutlineFileAdd,
        title: 'New Case',
        url: '/new-case'
    },
    {
        icon: BsWallet,
        title: 'Transactions',
        url: '/payments'
    },
    {
        icon: IoSettingsOutline,
        title: 'Settings',
        url: '/settings'
    },
    {
        icon: TbLogout,
        title: 'Logout',
        url: '/cases'
    }
];

export const paymentMethods = [
    {
        title: "UPI",
        value: 'upi',
        icon: BsBank,
    },
    {
        title: "Net Banking",
        value: "net-banking",
        icon: FaLaptop,

    },
    {
        title: "Cash On Delivery",
        value: "COD",
        icon: IoCashOutline,
    }
]
export const paymentCards = [
    {
        id: 1,
        bankName: "ICICI Debit card",
        holderName: 'Mr. abc def kumar',
        cardNumber: '1324-1231-1231-7456',
        cvv: '123',
        bankImage: iciciImage,
        expiry: '12/24'
    },
    {
        id: 2,
        bankName: "Axis Debit card",
        holderName: 'Mr. abc def kumar',
        cardNumber: '1324-1231-1231-7456',
        cvv: '123',
        bankImage: axisImage,
        expiry: '12/24'
    },
]
export const typeOfCases = [
    {
        "id": 1,
        "name": "Criminal Case",
        "description": "Cases involving offenses against the state or society, prosecuted by the government.",
        "examples": ["Theft", "Murder", "Fraud", "Cybercrime"],
        "fees": 500,
    },
    {
        "id": 2,
        "name": "Civil Case",
        "description": "Disputes between individuals or entities involving rights, obligations, or compensation.",
        "examples": ["Breach of Contract", "Property Dispute", "Defamation", "Consumer Protection Claim"],
        "fees": 650,
    },
    {
        "id": 3,
        "name": "Family Law Case",
        "description": "Cases related to domestic relations and family matters.",
        "examples": ["Divorce", "Child Custody", "Adoption", "Domestic Violence"],
        "fees": 820,
    },
    {
        "id": 4,
        "name": "Constitutional Case",
        "description": "Cases involving challenges to the constitutionality of laws or government actions.",
        "examples": ["Fundamental Rights Violation", "Election Disputes", "Law Interpretation"],
        "fees": 740,
    },
    {
        "id": 5,
        "name": "Administrative Law Case",
        "description": "Disputes between individuals or organizations and government agencies over administrative decisions.",
        "examples": ["License Denial", "Tax Disputes", "Pension Issues", "Regulatory Challenges"],
        "fees": 480,
    },
    {
        "id": 6,
        "name": "Labor and Employment Case",
        "description": "Disputes between employers and employees over workplace rights and contracts.",
        "examples": ["Unlawful Termination", "Wage Disputes", "Workplace Harassment", "Union Matters"],
        "fees": 690,
    },
    {
        "id": 7,
        "name": "Property and Land Dispute",
        "description": "Disputes involving the ownership, use, or transfer of property or land.",
        "examples": ["Land Title Disputes", "Tenant-Landlord Issues", "Easement Conflicts"],
        "fees": 580,
    },
    {
        "id": 8,
        "name": "Commercial and Corporate Case",
        "description": "Disputes related to business transactions and corporate governance.",
        "examples": ["Breach of Business Contracts", "Bankruptcy", "Shareholder Disputes", "Intellectual Property Issues"],
        "fees": 620,
    },
    {
        "id": 9,
        "name": "Environmental Case",
        "description": "Cases dealing with violations of environmental laws and regulations.",
        "examples": ["Pollution Control", "Illegal Deforestation", "Wildlife Conservation"],
        "fees": 620,
    },
    {
        "id": 10,
        "name": "Juvenile Case",
        "description": "Cases involving offenses committed by minors, focusing on rehabilitation.",
        "examples": ["Vandalism", "Substance Abuse", "Truancy", "Underage Curfew Violation"],
        "fees": 650,
    },
    {
        "id": 11,
        "name": "Tax Case",
        "description": "Disputes between individuals or businesses and tax authorities over assessments or collections.",
        "examples": ["Income Tax Disputes", "GST Disputes", "Property Tax Appeals", "Customs Duty Cases"],
        "fees": 760,
    },
    {
        "id": 12,
        "name": "Intellectual Property Case",
        "description": "Cases involving the protection of intellectual property rights.",
        "examples": ["Trademark Infringement", "Copyright Violations", "Patent Disputes", "Trade Secret Theft"],
        "fees": 700,
    },
    {
        "id": 13,
        "name": "Election Dispute",
        "description": "Disputes arising from elections or electoral processes.",
        "examples": ["Voter Fraud Allegations", "Disqualification of Candidates", "Election Result Challenges"],
        "fees": 680,
    },
    {
        "id": 14,
        "name": "Public Interest Litigation (PIL)",
        "description": "Cases filed to protect public interest or enforce public policies.",
        "examples": ["Environmental Protection PIL", "Healthcare Improvement", "Human Rights Violation PIL"],
        "fees": 570,
    },
    {
        "id": 15,
        "name": "Arbitration and Dispute Resolution Case",
        "description": "Disputes resolved through arbitration or alternative dispute resolution methods.",
        "examples": ["Commercial Arbitration", "Mediation in Family Disputes", "Construction Contract Arbitration"],
        "fees": 510,
    }
];

export const lawyersData = [
    {
        id: '1',
        fullName: "Adv. Rohan Mehta",
        enrollmentNumber: "D/1234/2020",
        barCouncilAffiliation: "Bar Council of Delhi",
        practiceCertificate: "DL123456",
        cases: [
            {

                id: "C12345",
                caseTitle: "State vs. John Doe",
            },
            {
                id: "C12349",
                caseTitle: "ACME Corp vs. New Technologies Ltd.",
            }
        ],
        officeAddress: {
            street: "123 Law Chambers",
            city: "New Delhi",
            state: "Delhi",
            postalCode: "110001"
        },
        contactDetails: {
            phoneNumber: "+91-9876543210",
            email: "rohan.mehta@lawfirm.com"
        },
        vakalatnamaSigned: true,
        authorizedRepresentative: {
            firmName: "Mehta & Associates",
            representingLawyer: "Adv. Rohan Mehta"
        },
        courtDetails: {
            courtName: "Delhi High Court",
            jurisdiction: "Delhi",
            caseNumber: "HC12345678"
        },
        feeAgreement: {
            retainerFee: 50000,
            feeCurrency: "INR",
            paymentTerms: "50% advance, 50% upon completion of case"
        }
    },
    {
        fullName: "Adv. Neha Sharma",
        enrollmentNumber: "MH/5678/2018",
        barCouncilAffiliation: "Bar Council of Maharashtra & Goa",
        practiceCertificate: "MH567890",
        cases: [
            {
                id: "C12345",
                caseTitle: "State vs. John Doe",
            },
            {
                id: "C12347",
                caseTitle: "City of Metropolis vs. Alex Johnson",
            }
        ],
        officeAddress: {
            street: "456 Justice Avenue",
            city: "Mumbai",
            state: "Maharashtra",
            postalCode: "400001"
        },
        contactDetails: {
            phoneNumber: "+91-9123456789",
            email: "priya.sharma@lawfirm.com"
        },
        vakalatnamaSigned: true,
        authorizedRepresentative: {
            firmName: "Sharma Legal Services",
            representingLawyer: "Adv. Priya Sharma"
        },
        courtDetails: {
            courtName: "Bombay High Court",
            jurisdiction: "Maharashtra",
            caseNumber: "BHC98765432"
        },
        feeAgreement: {
            retainerFee: 60000,
            feeCurrency: "INR",
            paymentTerms: "30% advance, 70% upon case progress"
        }
    },
    {
        fullName: "Adv. Jiya Sharma",
        enrollmentNumber: "MH/5678/2018",
        barCouncilAffiliation: "Bar Council of Maharashtra & Goa",
        practiceCertificate: "MH567890",
        cases: [
            {

                id: "C12345",
                caseTitle: "State vs. John Doe",
            },
            {
                id: "C12347",
                caseTitle: "City of Metropolis vs. Alex Johnson",
            }
        ],
        officeAddress: {
            street: "456 Justice Avenue",
            city: "Mumbai",
            state: "Maharashtra",
            postalCode: "400001"
        },
        contactDetails: {
            phoneNumber: "+91-9123456789",
            email: "priya.sharma@lawfirm.com"
        },
        vakalatnamaSigned: true,
        authorizedRepresentative: {
            firmName: "Sharma Legal Services",
            representingLawyer: "Adv. Priya Sharma"
        },
        courtDetails: {
            courtName: "Bombay High Court",
            jurisdiction: "Maharashtra",
            caseNumber: "BHC98765432"
        },
        feeAgreement: {
            retainerFee: 60000,
            feeCurrency: "INR",
            paymentTerms: "30% advance, 70% upon case progress"
        }
    },
    {
        fullName: "Adv. Priya Sharma",
        enrollmentNumber: "MH/5678/2018",
        barCouncilAffiliation: "Bar Council of Maharashtra & Goa",
        practiceCertificate: "MH567890",
        cases: [
            {

                id: "C12345",
                caseTitle: "State vs. John Doe",
            },
            {
                id: "C12347",
                caseTitle: "City of Metropolis vs. Alex Johnson",
            }
        ],
        officeAddress: {
            street: "456 Justice Avenue",
            city: "Mumbai",
            state: "Maharashtra",
            postalCode: "400001"
        },
        contactDetails: {
            phoneNumber: "+91-9123456789",
            email: "priya.sharma@lawfirm.com"
        },
        vakalatnamaSigned: true,
        authorizedRepresentative: {
            firmName: "Sharma Legal Services",
            representingLawyer: "Adv. Priya Sharma"
        },
        courtDetails: {
            courtName: "Bombay High Court",
            jurisdiction: "Maharashtra",
            caseNumber: "BHC98765432"
        },
        feeAgreement: {
            retainerFee: 60000,
            feeCurrency: "INR",
            paymentTerms: "30% advance, 70% upon case progress"
        }
    }
]
