import { RxDashboard } from "react-icons/rx";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { FaList } from "react-icons/fa";
import { BsTable } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";

import { MdOutlineEmail } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { LiaFileInvoiceSolid } from "react-icons/lia";

import { AiOutlinePieChart } from "react-icons/ai";
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";

export const Menu = [
    {
        title: "Dashboard",
        link: "/",
        icon: <RxDashboard size={20} />,
        subItems: [
            {
                title: 'eCommerce',
                link: "/"
            },
            {
                title: 'Analytics',
                link: "/dashboard/analytics"
            },
            {
                title: 'Marketing',
                link: "/dashboard/marketing"
            },
            {
                title: 'CRM',
                link: "/dashboard/crm"
            },
            {
                title: 'Stocks',
                link: "/dashboard/stocks"
            }
        ]
    },
    {
        title: 'Calender',
        link: '/calender',
        icon: <FaRegCalendarDays size={20} />
    },
    {
        title: 'Profile',
        link: '/profile',
        icon: <FiUser size={20} />
    },
    {
        title: "Task",
        link: "/task",
        icon: <FaList size={20} />,
        subItems: [
            {
                title: 'List',
                link: "/tasks/task-list"
            },
            {
                title: 'Kanban',
                link: "/tasks/task-kanban"
            },

        ]
    },
    {
        title: "Forms",
        link: "/form",
        icon: <FaList size={20} />,
        subItems: [
            {
                title: 'Form Elements',
                link: "/forms/form-elements"
            },
            {
                title: 'Pro Form Elements',
                link: "/forms/pro-form-elements"
            },
            {
                title: 'Form Layout',
                link: "/forms/form-layout"
            },
            {
                title: 'Pro Form Layout',
                link: "/forms/pro-form-layout"
            }

        ]
    },
    {
        title: "Tables",
        link: "/table",
        icon: <BsTable size={18} />,
        subItems: [
            {
                title: 'Tables',
                link: "/tables"
            },
            {
                title: 'Pro Tables',
                link: "/tables/pro-tables"
            },
        ]
    },
    {
        title: "Pages",
        link: "/page",
        icon: <RiPagesLine size={22} />,
        subItems: [
            {
                title: 'Settings',
                link: "/pages/settings"
            },
            {
                title: 'File Manager',
                link: "/pages/file-manager"
            },
            {
                title: 'Data Tables',
                link: "/pages/data-tables"
            },
            {
                title: 'Pricing Tables',
                link: "/pages/pricing-tables"
            },
            {
                title: 'Error Page',
                link: "/pages/error-page"
            },
            {
                title: "Faq's",
                link: "/pages/faq"
            },
            {
                title: "Teams",
                link: "/pages/teams"
            },
            {
                title: "Terms & Conditions",
                link: "/pages/terms-and-conditions"
            },
            {
                title: "Mail Success",
                link: "/pages/mail-success"
            }
        ]
    },
]

export const Support = [

    {
        title: 'Messages',
        link: '/messages',
        icon: <MdOutlineEmail size={22} />
    },
    {
        title: 'Inbox',
        link: '/inbox',
        icon: <FiDownload size={22} />
    },
    {
        title: 'Invoice',
        link: '/invoice',
        icon: <LiaFileInvoiceSolid size={22} />
    },
]

export const Others = [
    {
        title: 'Chart',
        link: '/chart',
        icon: <AiOutlinePieChart size={22} />,
        subItems: [
            {
                title: 'Basic Chart',
                link: "/chart/basic-chart"
            },
            {
                title: 'Advanced Chart',
                link: "/chart/advanced-chart"
            }
        ]
    },
    {
        title: 'UI Elements',
        link: '/ui-element',
        icon: <AiOutlinePieChart size={22} />,
        subItems: [
            {
                title: 'Basic Chart',
                link: "/chart/basic-chart"
            },
            {
                title: 'Advanced Chart',
                link: "/chart/advanced-chart"
            }
        ]
    },
    {
        title: 'Authentication',
        link: '/auth',
        icon: <HiMiniArrowRightEndOnRectangle size={22} />,
        subItems: [
            {
                title: 'Basic Chart',
                link: "/chart/basic-chart"
            },
            {
                title: 'Advanced Chart',
                link: "/chart/advanced-chart"
            }
        ]
    },
]