import React from 'react';
import HomeIcon from '@mui/icons-material/Home'
import MailIcon from '@mui/icons-material/Mail';
import AnalyticsIcon from '@mui/icons-material/Analytics';

export const SidebarData = [
    {
    title:"Home",
    icon: <HomeIcon />,
    link: "/home"
},
{
    title: "Mail",
    icon: <MailIcon />,
    link: "/mail"
},
{
    title: "Analytics", 
    icon: <AnalyticsIcon />,
    link: "/Analytics"       
}
]
