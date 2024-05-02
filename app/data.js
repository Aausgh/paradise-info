

import { IoEyeOutline } from "react-icons/io5";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { LuUsers } from "react-icons/lu";

import { FcGoogle } from "react-icons/fc";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { TiSocialVimeoCircular } from "react-icons/ti";


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
        icon: <LuUsers size={22} />,
        title: 'Total Users',
        value: '3.456',
        percent: 0.95,
        pIcon: <BiDownArrowAlt size={20} />
    }
]

export const TableInfo = [
    {
        id: 1,
        icon: <FcGoogle size={50} />,
        source: 'Google',
        visitors: 3.5,
        revenues: '5,768',
        sales: 590,
        conversion: 4.8
    },
    {
        id: 2,
        icon: <AiFillTwitterCircle color="#2a97f0" size={50} />,
        source: 'Twitter',
        visitors: 2.2,
        revenues: '4,635',
        sales: 467,
        conversion: 4.3
    },
    {
        id: 3,
        icon: <FaGithub size={50} />,
        source: 'Github',
        visitors: 2.1,
        revenues: '4,290',
        sales: 420,
        conversion: 3.7
    },
    {
        id: 4,
        icon: <TiSocialVimeoCircular size={50} color="#4cc1fe" />,
        source: 'Vimeo',
        visitors: 1.5,
        revenues: '3,580',
        sales: 389,
        conversion: 2.5
    },
    {
        id: 5,
        icon: <FaFacebook size={50} color="#3063c9" />,
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