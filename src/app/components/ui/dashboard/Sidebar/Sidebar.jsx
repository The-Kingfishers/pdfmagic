import React from 'react';
import { MdDashboard, MdHelp, MdPeople, MdHome, MdSettings, MdMan, MdSupervisedUserCircle } from 'react-icons/md';
import MenuLink from './MenuLink/MenuLink';

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Home",
                path: "/",
                icon: <MdHome />
            },
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            }
        ]
    },
    {
        title: "User",
        list: [
            {
                title: "Profile",
                path: "/dashboard/profile",
                icon: <MdSupervisedUserCircle />
            },
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdSettings />
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelp/>
            },
        ]
    },

]

const Sidebar = () => {
    return (
        <div className='sticky '>
                <ul>
                {menuItems.map(category => (
                    <li key={category.title} >
                        <span>{category.title}</span>
                        {category.list.map(item => (
                            <MenuLink item={item} key={item.title}/>
                        ))}
                    </li>

))}
                    </ul>
        </div>
    );
};

export default Sidebar;