import logo from '../images/logo.svg'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLinks parent="nav-links" item="nav-link" />
        <SocialLinks parent="nav-icons" item="nav-icon" />
      </div>
    </nav>
  )
}
export default Navbar
