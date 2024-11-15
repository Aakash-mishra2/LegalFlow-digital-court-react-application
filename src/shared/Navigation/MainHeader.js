import React from 'react';

const MainHeader = props => {
    return <header className="w-full h-auto flex flex-row items-center md:justify-between fixed top-0 left-0 bg-[#213555] shadow-nav p-4 z-10 ">{props.children}</header>;
};

export default MainHeader;