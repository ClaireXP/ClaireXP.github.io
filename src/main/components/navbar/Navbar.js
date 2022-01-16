import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Navbar() {
  return (
    <div className='navbar'>
      <AnchorLink className='navPath' href='#pageHeader'>HOME</AnchorLink>
      <AnchorLink className='navPath' href='#about' offset='49.5'>ABOUT</AnchorLink>
      <AnchorLink className='navPath' href='#orgs' offset='49.5'>ORGS</AnchorLink>
      <AnchorLink className='navPath' href='#resume' offset='49.5'>RESUME</AnchorLink>
    </div>
  );
}
