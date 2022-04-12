import '../styles/mainPage/mainPage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function MainPage() {
  return (
    <div className="land-container">
        <div className="land-logo">
            <h3 className="logo-tit">PB</h3>
        </div>
        <div className="land-title">
            <div className="up-tit"></div>
            <h3 className="down-tit">Front End Developer</h3>
            <Link to="/resume" className="resume-btn">RESUME</Link>
        </div>
        <div className="land-img"></div>
        <div className="footer">
              <a href="https://www.instagram.com/pau1abramz/" target='_blank' rel="noreferrer" ><FontAwesomeIcon className='icons' icon={faInstagram} /></a>
              <a href="https://www.facebook.com/profile.php?id=100012936305663" target='_blank' rel="noreferrer" ><FontAwesomeIcon className='icons' icon={faLinkedin} /></a>
              <a href="https://www.linkedin.com/in/paul-abrams-251b411ba/" target='_blank' rel="noreferrer" ><FontAwesomeIcon className='icons' icon={faFacebook} /></a>
              <a href="https://github.com/ReviveRT"  target='_blank' rel="noreferrer" ><FontAwesomeIcon className='icons' icon={faGithub} /></a>
        </div>
    </div>
  )
}

export default MainPage;