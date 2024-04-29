import { RxDashboard } from "react-icons/rx";
import { LuCalendarDays } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { FaList } from "react-icons/fa";
import { BsTable } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa";

import { MdOutlineEmail } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { LiaFileInvoiceSolid } from "react-icons/lia";

import { AiOutlinePieChart } from "react-icons/ai";
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";

import { IoEyeOutline } from "react-icons/io5";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { HiOutlineUsers } from "react-icons/hi2";

import { FcGoogle } from "react-icons/fc";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { TiSocialVimeoCircular } from "react-icons/ti";

export const Menu = [
    {
        id: 1,
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
        id: 2,
        title: 'Calender',
        link: '/calender',
        icon: <LuCalendarDays size={20} />
    },
    {
        id: 3,
        title: 'Profile',
        link: '/profile',
        icon: <FiUser size={20} />
    },
    {
        id: 4,
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
        id: 5,
        title: "Forms",
        link: "/form",
        icon: <FaWpforms size={20} />,
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
        id: 6,
        title: "Tables",
        link: "/table",
        icon: <BsTable size={20} />,
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
        id: 7,
        title: "Pages",
        link: "/page",
        icon: <RiPagesLine size={20} />,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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

export const Info = [
    {
        id: 1,
        icon: <IoEyeOutline size={22} />,
        title: 'Total Views',
        value: '$3.456K',
        percent: 0.43,
        pIcon: <BiUpArrowAlt size={20} />
    },
    {
        id: 2,
        icon: <BsCart2 size={22} />,
        title: 'Total Profit',
        value: '$45.2K',
        percent: 4.35,
        pIcon: <BiUpArrowAlt size={20} />
    },
    {
        id: 3,
        icon: <CgShoppingBag size={22} />,
        title: 'Total Product',
        value: '2.450',
        percent: 2.59,
        pIcon: <BiUpArrowAlt size={20} />
    },
    {
        id: 4,
        icon: <HiOutlineUsers size={22} />,
        title: 'Total Users',
        value: '3.456',
        percent: 0.95,
        pIcon: <BiDownArrowAlt size={20} />
    }
]

export const TableInfo = [
    {
        id: 1,
        icon: <FcGoogle size={40} />,
        source: 'Google',
        visitors: 3.5,
        revenues: '5,768',
        sales: 590,
        conversion: 4.8
    },
    {
        id: 2,
        icon: <AiFillTwitterCircle color="#2a97f0" size={40} />,
        source: 'Twitter',
        visitors: 2.2,
        revenues: '4,635',
        sales: 467,
        conversion: 4.3
    },
    {
        id: 3,
        icon: <FaGithub size={40} />,
        source: 'Github',
        visitors: 2.1,
        revenues: '4,290',
        sales: 420,
        conversion: 3.7
    },
    {
        id: 4,
        icon: <TiSocialVimeoCircular size={40} color="#4cc1fe" />,
        source: 'Vimeo',
        visitors: 1.5,
        revenues: '3,580',
        sales: 389,
        conversion: 2.5
    },
    {
        id: 5,
        icon: <FaFacebook size={40} color="#3063c9" />,
        source: 'Facebook',
        visitors: 3.5,
        revenues: '6,768',
        sales: 390,
        conversion: 4.2
    }
]

export const Chats = [
    {
        id: 1,
        pp: 'https://nextjs-demo.tailadmin.com/_next/image?url=%2Fimages%2Fuser%2Fuser-01.png&w=64&q=75',
        name: 'Devid Heilo',
        msg: 'How are you?',
        time: 12,
        status: 'online',
        notification: 3
    },
    {
        id: 2,
        pp: 'https://nextjs-demo.tailadmin.com/_next/image?url=%2Fimages%2Fuser%2Fuser-02.png&w=64&q=75',
        name: 'Henry Fisher',
        msg: 'Waiting for you!',
        time: 12,
        status: 'offline',
        notification: 0
    },
    {
        id: 3,
        pp: 'https://nextjs-demo.tailadmin.com/_next/image?url=%2Fimages%2Fuser%2Fuser-04.png&w=64&q=75',
        name: 'Stella Johnson',
        msg: 'See you later',
        time: 19,
        status: 'online',
        notification: 0
    },
    {
        id: 4,
        pp: 'https://nextjs-demo.tailadmin.com/_next/image?url=%2Fimages%2Fuser%2Fuser-05.png&w=64&q=75',
        name: 'Eleanor Pena',
        msg: 'I am fine, thank you!',
        time: 30,
        status: 'away',
        notification: 2
    },
    {
        id: 5,
        pp: 'https://nextjs-demo.tailadmin.com/_next/image?url=%2Fimages%2Fuser%2Fuser-03.png&w=64&q=75',
        name: 'John Doe',
        msg: 'Great',
        time: 32,
        status: 'offline',
        notification: 0
    },
    {
        id: 6,
        pp: 'https://nextjs-demo.tailadmin.com/_next/image?url=%2Fimages%2Fuser%2Fuser-06.png&w=64&q=75',
        name: 'Doris Brown',
        msg: 'How are you?',
        time: 32,
        status: 'away',
        notification: 3
    }
]