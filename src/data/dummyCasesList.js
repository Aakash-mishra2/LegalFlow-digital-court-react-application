import { AiOutlineFileAdd } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { HiOutlineHome } from "react-icons/hi";
import { BsWallet } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

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
        "court": "tis hazari court",
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
        "court": "443314r",
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
        "court": "tis hazari court",
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
        "court": "443314r",
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
        url: '/cases'
    },
    {
        icon: BsWallet,
        title: 'Transactions',
        url: '/cases'
    },
    {
        icon: IoSettingsOutline,
        title: 'Settings',
    },
    {
        icon: TbLogout,
        title: 'Logout'
    }
]