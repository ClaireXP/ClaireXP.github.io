import './Header.css';

import AnchorLink from 'react-anchor-link-smooth-scroll'
import Typewriter from 'typewriter-effect';

export default function Header() {
  return (
    <div>
      <div className='socials'>
        <a href='https://github.com/ClaireXP' target='_blank' rel='noopener noreferrer'>
          <img id='gitHubLogo' className='socialLogo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png' alt='GitHub Logo' />
        </a>

        <a href='https://www.linkedin.com/in/clairepoukey/' target='_blank' rel='noopener noreferrer'>
          <img id='linkedInLogo' className='socialLogo'
            src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='LinkeIn Logo' />
        </a>
      </div>

      <AnchorLink href='#about' offset='49.5'>
        <img id='downArrow' alt='Down Arrow' src='https://icon-library.com/images/downward-arrow-icon/downward-arrow-icon-18.jpg' />
      </AnchorLink>
      
      <div id='pageHeader'>
        <h1 id='titleName'>Claire Poukey</h1>

        <Typewriter
          options={{
            strings: ['Incoming Microsoft PM Intern', 'Presidential Scholar at Purdue University', 'Sophomore in Computer Engineering', 'Google STEP Intern ‘21'],
            autoStart: true,
            loop: true,
            delay: 80,
            deleteSpeed: 35,
          }}
        />
      </div>
    </div>
  );
}
