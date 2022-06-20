import  {StyledFooter} from './styles'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <StyledFooter className="footer">
          <ul className="social_list">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
          </ul>
          <p className="copy_right">
            <span>Movies</span> &copy; 2022
          </p>
        </StyledFooter>
      )
}

export default Footer