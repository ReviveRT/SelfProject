import '../styles/resume/resume.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquareAlt , faEnvelope } from '@fortawesome/free-solid-svg-icons';


 

function Resume() {
  const [about,setAbout] = useState('about');
  const [contact,setContact] = useState('contact-form');
  const handleClick = () => {
    if(about === 'about'){
      setAbout(() => 'about active')
      setSkills(() => 'skills')
      setContact(() => 'contact-form')

    }else if(about === 'about active'){
      setAbout(() => 'about')
      
    }
  }

  const [skills,setSkills] = useState('skills');
  const handleSkills = () => {
    if(skills === 'skills'){
      setSkills(() => 'skills active')
      setAbout(() => 'about')
      setContact(() => 'contact-form')
    }else if(skills === 'skills active'){
      setSkills(() => 'skills')
    }
  }

  const handleRemove = () => {
    if(skills === 'skills active'){
      setSkills(() => 'skills')
    }else if(about === 'about active'){
      setAbout(() => 'about')
    }else if(contact === 'contact-forms active'){
      setContact(() => 'contact-form')
    }
  }


  const handleFormAppear = () => {
    if(contact === 'contact-form'){
      setContact(() => 'contact-forms active')
      setSkills(() => 'skills')
    }else{
      setContact(() => 'contact-form')
    }

  }





/*   const [play,setPlay] = useState(true); */
  



  return (
    <div className='resume-container'>
  
        <div className="logo" onClick={handleRemove}>
          <h3 className="logo-tits">PB</h3>
        </div>
        <nav className="resume-navi">
          <li onClick={handleClick} >About</li>
          <li onClick={handleSkills}>Skills</li>  
        </nav>
        <div className="show-block">
          {/* <button className='audio-btn' onClick={handleAudio} >{btnPlay}</button> */}
         <div className={about === 'about' && skills === 'skills' && contact === 'contact-form' ? 'txtActive' : 'noTxt'} > <h2> Any Sufficiently Advanced Technology Is Indistinguishable From Magic </h2> </div>
          <div className={about}>
            <div className="resume-img"></div>
            <h1 className="about-tit"> Pavel Botsan <br /> Front End Developer <br /> <br /> Fast Learner,Ambitious,Motivated Front End Developer with 1+ year study and experience in Front End Developement. <br /> <br /> Years: 25 <br /> Location: Chishinau,Moldova <br/> Status: Job Seeker</h1>
          </div>
          <div className={skills}>
            <div className="blockOne">
              <p className="skill_content">| HTML/CSS(SCSS)+Adaptive/Responsive | <br /> <br /> | JavaScipt(OOP)/TypeScript - React JS / Next JS | <br /> <br /> | GraphQL(basic) Git | </p> <br /> <p>| Photoshop/Figma |</p>
            </div>
            <button className="contact-btn" onClick={handleFormAppear} >CONTACT</button>  
            <div className="blockTwo">
              <div className="lang">
                <p className="lang-content">Languages: <br /> <br />| English B2+ | Russian Native |</p>
              </div>
            </div>
          </div>
          <div className={contact}>
            <div className="contact-container">
                <FontAwesomeIcon icon={faEnvelope} className='mail-i' />
                <h2 className="email">POUL.ABRAMS@MAIL.RU</h2>
                  <br />
                <FontAwesomeIcon icon={faPhoneSquareAlt} className='phone-i' />
                <h2 className="phone">+373-68-147-456</h2>
              </div>  
          </div>  
        </div>
        <div className="media-footer">
              <a href="https://www.instagram.com/pau1abramz/" target='_blank' rel="noreferrer" ><FontAwesomeIcon className='icons' icon={faInstagram} /></a>
              <a href="https://www.linkedin.com/in/paul-abrams-251b411ba/" target='_blank' rel="noreferrer" ><FontAwesomeIcon className='icons' icon={faLinkedin} /></a>
              <a href="https://www.facebook.com/profile.php?id=100012936305663" target='_blank' rel="noreferrer" ><FontAwesomeIcon className='icons' icon={faFacebook} /></a>
              <a href="https://github.com/ReviveRT"  target='_blank' rel="noreferrer" ><FontAwesomeIcon className='icons' icon={faGithub} /></a>
        </div>
    </div>
  )
}

export default Resume