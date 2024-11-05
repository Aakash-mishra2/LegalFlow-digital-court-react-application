import { lawyersData } from "../../../data/dummyCasesList";
import { CiCircleChevRight } from "react-icons/ci";

const LawyersSection = () => {
    return (
        <div id="adv" className="bg-transparent rounded-xl w-[35%] mr-4 flex-col mt-4">
            <p className="text-lg font-semibold mt-2 ml-2">Your lawyers</p>
            <div className="mt-4 shadow-card p-2 bg-white max-h-[420px] h-fit py-4 rounded-xl flex flex-col gap-3 overflow-hidden overflow-y-auto custom-scrollbar">

                {
                    lawyersData.map((item, index) => {
                        let res = [];
                        item.cases.forEach((obj) => res.push(obj.caseTitle));
                        return (
                            <div key={index} className="relative w-full rounded-xl shadow-nav font-circular p-2 py-2">

                                <CiCircleChevRight className="text-xl text-pink-950 font-bold absolute top-1 right-2" />

                                <p className="font-medium text-sm" >{item.fullName}</p>
                                <p className="text-xs text-gray-500">{res.join(" , ")}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};
export default LawyersSection;