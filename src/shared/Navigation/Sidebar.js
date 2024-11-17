import { userSideBar, adminSideBar, ROLES } from "../../constants/constants";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/UserAccount/loginSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let options = userSideBar;

    const role = useSelector((state) => state.userAccount.role);
    if (role === ROLES.ADMIN) options = adminSideBar;

    return (
        <div className="sticky left-0 top-0 z-10 h-[100vh] w-56 bg-[#213555] shadow-lg flex flex-col overflow-none">
            <div className="p-2 ml-2 font-extrabold text-2xl tracking-wider text-left text-white mt-2">Court Case Management System</div>
            <ul className="mt-2 space-y-2 text-white">
                {options.map((item, index) => {
                    const Icon = item.icon;
                    if (item.type === "button") {
                        return (
                            <li
                                key={index}
                                className='cursor-pointer pl-4 p-3 transition ease-in-out duration-150 text-gray-200 
                            hover:text-white hover:bg-[#3b5e97]'
                            >
                                <div onClick={() => {
                                    dispatch(logOut());
                                    navigate("/");
                                }} className="flex w-full cursor-pointer items-center space-x-3">
                                    <Icon className="text-lg" />
                                    <span>{item.title}</span>
                                </div>
                            </li>
                        )
                    }
                    return (
                        <li
                            key={index}
                            className={`${location.pathname === item.url && 'bg-[#3b5e97]'} cursor-pointer pl-4 p-3 transition ease-in-out duration-150 text-gray-200 
                            hover:text-white hover:bg-[#3b5e97]`}
                        >
                            <Link to={item.url} className="flex items-center space-x-3">
                                <Icon className="text-lg" />
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })
                }
            </ul>
        </div >
    );
};

export default Sidebar;