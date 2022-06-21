import { StyledFooter, StyledSocialList, StyledCopyRight } from "./styles";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialList>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </StyledSocialList>
      <StyledCopyRight>
        <span>Movies</span> &copy; 2022
      </StyledCopyRight>
    </StyledFooter>
  );
};

export default Footer;
