import React from 'react'
import { stormGroup } from '../assets'
import styles from '../style'

const aboutHero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        

        <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
                FRC Team <br className='sm:block hidden'/> {" "}
                <span className='text-gradient'>2729</span> {" "} Storm Robotics.
            </h1>
        </div>

            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>*add red gradient* From 2009 to 2021, we were part of Team 2729, Storm Robotics. It was a joint team between Lenape and Cherokee High Schools, making up an average of about 80 students our rookie year. In 2022 however, we split into two teams: Red Watch (FRC 2720) and Charge (FRC 2722).</p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={stormGroup} alt='billing' className='w-[100%] h-[100%] relative z-[5] rounded mr-10'/>

            <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
            <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
            <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>

        </div>
    </section>
)

export default aboutHero