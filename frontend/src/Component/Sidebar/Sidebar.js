import React from 'react'
import { AiOutlineHome , AiOutlineDollar} from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';

import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <h1 className="sidebar-title">
                یه داشبورد خود خوش آمدید
            </h1>

            <ul className="sidebar-links">
                <li>
                    <Link to="#">
                        <AiOutlineHome />
                        صفحه اصلی
                    </Link>
                </li>
                <li className='active'>
                    <Link to="/product">
                        <MdOutlineProductionQuantityLimits className='icon'/>
                        محصولات
                    </Link>
                </li>
                <li>
                    <Link to="/comments">
                        <BiCommentDetail className='icon'/>
                        کامنت ها
                    </Link>
                </li>
                <li>
                    <Link to="/users">
                        <FiUsers className='icon'/>
                        کاربران
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <BsBagCheck className='icon'/>
                        سفارشات
                    </Link>
                </li>
                <li>
                    <Link to="/offs">
                        <AiOutlineDollar className='icon'/>
                        تخفیف ها
                    </Link>
                </li>
            </ul>
        </div>
    )
}
