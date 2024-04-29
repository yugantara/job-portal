import React from 'react'
import { BiTimeFive } from "react-icons/bi";
import logo1 from '../../Assets/logo/logo1.png'
import logo2 from '../../Assets/logo/logo2.png'
import logo3 from '../../Assets/logo/logo3.png'
import logo4 from '../../Assets/logo/logo4.png'
import logo5 from '../../Assets/logo/logo5.png'
import logo6 from '../../Assets/logo/logo6.png'

const Data = [
    {
        id: 1,
        image: logo1,
        title: 'Web Developer',
        time: 'Now',
        location: 'Singapore',
        desc: 'Join our dynamic team in the heart of Canada\'s tech hub and unleash your creativity as a Web Developer.',
        company: 'Novac Linus Co.'
    },
    {
        id: 2,
        image: logo2,
        title: 'UI Designer',
        time: '14Hrs',
        location: 'Paris, France',
        desc: 'Join our dynamic team in the heart of India\'s tech hub and unleash your creativity as a UI Designer.',
        company: 'Liquid Accessments'
    },
    {
        id: 3,
        image: logo3,
        title: 'Software Engineer',
        time: '10Hrs',
        location: 'Toronto, Canada',
        desc: 'Join our dynamic team in the heart of Austria\'s tech hub and unleash your creativity as a Software Engineer.',
        company: 'Web Tech Agency'
    },
    {
        id: 4,
        image: logo4,
        title: "Data Scientist",
        time: "5Hrs",
        location: "Tokyo, Japan",
        desc: "Join our data-driven team to analyze complex datasets and extract valuable insights for business growth.",
        company: "Insightful Analytics Co."
    },
    {
        id: 5,
        image: logo5,
        title: "Cybersecurity Analyst",
        time: "22 Hrs",
        location: "Berlin, Germany",
        desc: "Protect our organization from cyber threats by analyzing security incidents and implementing robust security measures.",
        company: "SecureTech Solutions"
    },
    {
        id: 6,
        image: logo6,
        title: "Network Engineer",
        time: "Now",
        location: "Sydney, Australia",
        desc: "Seeking a skilled Network Engineer to design, implement, and maintain secure and efficient network infrastructures.",
        company: "ConnectX Networks Ltd."
    },
    {
        "id": 7,
        "image": "logo7",
        "title": "Cloud Engineer",
        "time": "8Hrs",
        "location": "London, UK",
        "desc": "Join our team to design, implement, and manage scalable cloud infrastructure solutions.",
        "company": "CloudTech Innovations"
    },
    {
        "id": 8,
        "image": "logo8",
        "title": "Full Stack Developer",
        "time": "Now",
        "location": "San Francisco, USA",
        "desc": "Exciting opportunity for a Full Stack Developer to build end-to-end web applications with cutting-edge technologies.",
        "company": "NovaWeb Solutions"
    }
]

const Jobs = () => {
    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center
        py-10" >
            {
                Data.map(({id, image, title, time, location, desc, company}) =>{
                    return (
                        <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded
            [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibold text-textColor 
                    group-hover:text-white'>{title}</h1>
                        <span className='flex items-center text-[#ccc] gap-1'>
                            <BiTimeFive />{time}
                        </span>
                    </span>
                    <h6 className='text-[#ccc]'>{location}</h6>

                    <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] 
                    group-hover:text-white'>{desc}</p>

                    <div className='company flex items-center gap-2'>
                        <img src={image} alt='Company Logo' className='w-[10%]' />
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                    </div>

                    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] 
                    font-semibold text-textColor hover:bg-white group-hover/
                    item:text-textColor group-hover:text-textColor'>
                        Apply Now
                    </button>

                </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Jobs