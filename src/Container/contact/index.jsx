import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeader from "../../Components/pageheader";
import { Animate } from "react-simple-animate";
import './style.scss'
const Contact = () => {
  return (
    <section id="contact" className="contact">

      <PageHeader headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} />} />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={
            {
              transform: "translateX(-200px)"
            }

          }
          end={{
            transform: "translateX(0px)"

          }}

        >
          <h3 className="contact__content__heaer-text">
            Let's talk
          </h3>

        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={
            {
              transform: "translateX(200px)"
            }

          }
          end={{
            transform: "translateX(0px)"

          }}

        >
          <div className="contact__content__form">
            <div className="contact__content__form__controls">
              <div>
                <input required type="text" name="name"  className="inputName"/>
                <label htmlFor="name" className="nameLable">your name</label>
              </div>
              <div >
              <input required type="email" name="email"  className="inputEmail"/>
                <label htmlFor="email" className="emailLable">email</label>
              </div>
              <div >
              <textarea required type="text" name="description"  className="inputDescription" rows={6}/>
                <label htmlFor="description" className="descriptionLable">your email</label>
              </div>
            </div>
            <button>submit</button>
          </div>
        </Animate>

      </div>

    </section>
  )
}
export default Contact;