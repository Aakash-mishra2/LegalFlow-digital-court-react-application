import { useSelector } from "react-redux";
import { AiOutlineBell } from "react-icons/ai";
import { dummyUser } from "../../data/dummyCasesList";

const Header = () => {
    const username = useSelector((state) => state.userAccount.userName);
    return (
        <div className="sticky top-0 flex justify-between items-center bg-[#213555] text-white p-2 shadow-sm z-10 ">
            <div className="text-lg font-thin font-circular">Welcome back, {username}</div>
            <div className="flex items-center space-x-8 mr-4">
                <AiOutlineBell className="text-white text-2xl hover:text-[#5889d8]" />

                <img
                    src={dummyUser.image}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                />
            </div>
        </div>
    );
};

export default Header;
