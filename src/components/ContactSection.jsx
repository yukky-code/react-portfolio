import React from 'react'
import { MdAddIcCall, MdLocationOn, MdMailOutline } from 'react-icons/md';
import styled from 'styled-components'
import ContactForm from './ContactForm'
import ContactInfoItem from './ContactInfoItem'
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
text-align: center;
padding: 5rem 0 0 0;

.container2 h1 {
  font-size {
    3.5rem
  }
}
.contactSection__wrapper {
  display: flex;
  gap: 5rem;
  margin-top: 7rem;
  justify-content: space-around;
  position: relative;
}
.contactSection__wrapper::after {
  position: absolute;
  content: '';
  width: 2px;
  height: 50%;
  background-color: #212121;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
}
.left {
  width: 100%;
  max-width: 500px;
  padding: 0 2rem 0 2rem;
}
.right {
  max-width: 500px;
  width: 100%;
  border-radius: 12px;
  /* padding-left: 3rem; */
}
@media only screen and (max-width: 768px) {
  .contactSection__wrapper {
    flex-direction: column;
  }
  .contactSection__wrapper::after {
    display: none;
  }
  .left,
  .right {
    max-width: 100%;
  }
  .right {
    padding: 0rem 2rem 2rem 2rem;
  }
}
`;

function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">

        <SectionTitle 
        heading='CONTACT'
        subheading='address & mail' />

        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem 
            icon={<MdAddIcCall />}
            text="090-6201-0259"
            />
            <ContactInfoItem 
            icon={<MdMailOutline />}
            text="yukky.tomo.0331@gmail.com"
            />
            <ContactInfoItem
            icon={<MdLocationOn />}
            text="Japan in Hyogo"
            />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  )
}

export default ContactSection