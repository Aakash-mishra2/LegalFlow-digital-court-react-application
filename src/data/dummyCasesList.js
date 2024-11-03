import { AiOutlineFileAdd } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { HiOutlineHome } from "react-icons/hi";
import { BsWallet } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBank } from "react-icons/bs";
import { IoCashOutline } from "react-icons/io5";
import { FaLaptop } from "react-icons/fa";
import iciciImage from "../assets/images/iciciLogo.png";
import axisImage from "../assets/images/axisBank.png";

export const allDummyCases = [
    {
        "location": {
            "city": "Delhi",
            "pincode": 11232424
        },
        "_id": "650a9d2ddf9bb7700d91d3f6",
        "court": " Allahabad High Court",
        "description": " Vehicle stolen case",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRholMhydH0A3KqdWelqNqBG_YgCPQaOXa2vS2SufTU5w&usqp=CAU&ec=48600113",
        "judge": "Mrs. Surbhi tiwari",
        "status": "Pending",
        "next_hearing": " 28-11-2023 ",
        "plaintiff": "648db724c8dfa0ec049c6cbd",
        "__v": 0,
        "id": "650a9d2ddf9bb7700d91d3f6"
    },
    {
        "location": {
            "city": "Delhi",
            "pincode": 1100998
        },
        "_id": "657adb4e27834ed8ee19a825",
        "court": "Tis Hazari Court",
        "description": "stolen watch",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRholMhydH0A3KqdWelqNqBG_YgCPQaOXa2vS2SufTU5w&usqp=CAU&ec=48600113",
        "judge": "To Be Decided",
        "status": "Under trial",
        "next_hearing": " TO BE DECIDED ",
        "plaintiff": "648db724c8dfa0ec049c6cbd",
        "__v": 0,
        "id": "657adb4e27834ed8ee19a825"
    },
    {
        "location": {
            "city": "Delhi",
            "pincode": 1100998
        },
        "_id": "66f1947d098c0d165df697",
        "court": "Court ABC",
        "description": "4r43rt4t24354t",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRholMhydH0A3KqdWelqNqBG_YgCPQaOXa2vS2SufTU5w&usqp=CAU&ec=48600113",
        "judge": "To Be Decided",
        "status": "Decision Reserved",
        "next_hearing": " TO BE DECIDED ",
        "plaintiff": "648db724c8dfa0ec049c6cbd",
        "__v": 0,
        "id": "66f1947d098c0d165df697"
    },
    {
        "location": {
            "city": "Delhi",
            "pincode": 11232424
        },
        "_id": "650a9d2ddf9bb7700dd3f6",
        "court": " Allahabad High Court",
        "description": " Vehicle stolen case",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRholMhydH0A3KqdWelqNqBG_YgCPQaOXa2vS2SufTU5w&usqp=CAU&ec=48600113",
        "judge": "Mrs. Surbhi tiwari",
        "status": "Accepted",
        "next_hearing": " 28-11-2023 ",
        "plaintiff": "648db724c8dfa0ec049c6cbd",
        "__v": 0,
        "id": "650a9d2ddf9bb7700dd3f6"
    },
    {
        "location": {
            "city": "Delhi",
            "pincode": 1100998
        },
        "_id": "657adb4e27834ed8ee19a25",
        "court": "Tis Hazari Court",
        "description": "stolen watch",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRholMhydH0A3KqdWelqNqBG_YgCPQaOXa2vS2SufTU5w&usqp=CAU&ec=48600113",
        "judge": "To Be Decided",
        "status": "NOT ACCEPTED",
        "next_hearing": " TO BE DECIDED ",
        "plaintiff": "648db724c8dfa0ec049c6cbd",
        "__v": 0,
        "id": "657adb4e27834ed8ee19a25"
    },
    {
        "location": {
            "city": "Delhi",
            "pincode": 1100998
        },
        "_id": "66f1947d098c0d165df6b27",
        "court": "Court abcd",
        "description": "4r43rt4t24354t",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRholMhydH0A3KqdWelqNqBG_YgCPQaOXa2vS2SufTU5w&usqp=CAU&ec=48600113",
        "judge": "To Be Decided",
        "status": "NOT ACCEPTED",
        "next_hearing": " TO BE DECIDED ",
        "plaintiff": "648db724c8dfa0ec049c6cbd",
        "__v": 0,
        "id": "66f1947d098c0d165df6b27"
    }
];

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
        url: '/cases'
    },
    {
        icon: AiOutlineFileAdd,
        title: 'New Case',
        url: '/new-case'
    },
    {
        icon: RiAccountCircleLine,
        title: 'Profile',
        url: '/profile'
    },
    {
        icon: BsWallet,
        title: 'Transactions',
        url: '/payments'
    },
    {
        icon: IoSettingsOutline,
        title: 'Settings',
        url: '/cases'
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
]
