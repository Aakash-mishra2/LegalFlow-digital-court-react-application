import { sidebarOptions } from "../../data/dummyCasesList";


const Sidebar = () => {


    return (
        <div className="sticky left-0 top-0 z-10 h-[100vh] w-56 bg-[#213555] shadow-lg flex flex-col">
            <div className="p-2 ml-2 font-extrabold text-2xl tracking-wider text-left text-white mt-2">Court Case Management System</div>
            <ul className="mt-2 space-y-2 text-white">
                {sidebarOptions.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <li
                            key={index}
                            className="flex cursor-pointer items-center pl-4 space-x-3 p-3 transition ease-in-out duration-150 text-gray-200 
                            hover:text-white hover:bg-[#3b5e97]"
                        >
                            <Icon className="text-lg" />
                            <span>{item.title}</span>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    );
};

export default Sidebar;