import React from "react";
import PageHeader from "../../Components/pageheader";
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from "react-simple-animate";
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaYinYang, FaYarn } from 'react-icons/fa'
import './style.scss'
const personsllDetails = [
    {
        lable: "Name", value: "Shamayel Mohammadi"
    },
    {
        lable: "Age", value: "22"
    },
    {
        lable: "Address", value: "Afghanistan"
    },
    {
        lable: "Email", value: "daryamohammdi036@gmail.com"
    }
]
const Summary = `I started full stack web designing in 2022, I am student in Code To Inspire.
We learned HTML , CSS, Bootstrap , JavaScript and ReactJS. I learned Java, C and DetaBase too.
I started full stack web designing in 2022, I am student in Code To Inspire.
We learned HTML , CSS, Bootstrap , JavaScript and ReactJS. I learned Java, C and DetaBase too. `
const About = () => {

    return (
        <section id="about" className="about">

            <PageHeader headerText="About"
                icon={<BsInfoCircleFill size={40} />} />
            <div className="about__content">
                <div className="about__content__personal">
                    <Animate play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translateY(0px)'
                        }}>

                        <h3>Front End Developer</h3>
                        <p>{Summary}</p>

                    </Animate>

                    <Animate play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translateY(0px)'
                        }}>

                        <h3 className="personalInformation">Personal Information</h3>
                        <ul>
                            {
                                personsllDetails.map((item, index) => (
                                    <li key={index}>
                                        <span className="title">{item.lable}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__services">
                <Animate play
                            duration={1.5}
                            delay={1}
                            start={{
                                transform: 'translateX(600px)'
                            }}
                            end={{
                                transform: 'translateY(0px)'
                            }}>
                    <div className="about__content__services__inner">
                       
                            <div>
                                <FaYinYang size={60} color="var( --yellow-theme-main-color)" />

                            </div>
                            <div>
                                <FaYarn size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiApple size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                          
                    </div>
                    </Animate>
                    

                </div>

            </div>
        </section>
    )
}
export default About;