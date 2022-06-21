import { StyledFooter, StyledSocialList, StyledCopyRight, StyledLi, StyledSpan } from "./styles";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialList>
        <StyledLi>
          <FaFacebook />
        </StyledLi>
        <StyledLi>
          <FaInstagram />
        </StyledLi>
        <StyledLi>
          <FaLinkedin />
        </StyledLi>
      </StyledSocialList>
      <StyledCopyRight>
        <StyledSpan>Movies</StyledSpan> &copy; 2022
      </StyledCopyRight>
    </StyledFooter>
  );
};

export default Footer;
