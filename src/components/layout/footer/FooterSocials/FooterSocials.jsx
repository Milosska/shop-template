import { FaInstagram, FaTelegram, FaFacebook } from "react-icons/fa";
import {
  Container,
  Title,
  SocialList,
  SocialLink,
} from "./FooterSocials.styled";

export const FooterSocials = () => {
  return (
    <Container>
      <Title>Follow Us</Title>
      <SocialList>
        <li>
          <SocialLink
            href="#"
            target="_blank"
            rel="noreferrer noopener nofollow"
            aria-label="instagram"
          >
            <FaInstagram />
          </SocialLink>
        </li>
        <li>
          <SocialLink
            href="#"
            target="_blank"
            rel="noreferrer noopener nofollow"
            aria-label="telegram"
          >
            <FaTelegram />
          </SocialLink>
        </li>
        <li>
          <SocialLink
            href="#"
            target="_blank"
            rel="noreferrer noopener nofollow"
            aria-label="facebook"
          >
            <FaFacebook />
          </SocialLink>
        </li>
      </SocialList>
    </Container>
  );
};
