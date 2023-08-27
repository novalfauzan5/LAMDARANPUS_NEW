import React from 'react'
import LogOutBtn from './LogOut-Btn'
import PuskesmasLogo from '../assets/logo-puskesmas.png'

const DashboardHeading = ({ linkTo, heading }) => {
    return (
        <div className='w-full h-[66px] bg-[#08AD36] flex'>
            <img src={PuskesmasLogo} className='w-[33px] h-[36px] mt-[15px] ml-[30px] mb-[15px]' />

            <div className='w-[990px] mr-[186px]'>
                <h1 className='font-inter text-[#FFFFFF] font-bold ml-[16px] pt-[20px]'>{heading}
                </h1>

            </div>


            <LogOutBtn linkTo={linkTo} />
        </div>
    )
}

export default DashboardHeading