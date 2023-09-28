import { Container, Title, List } from "./Address.styled";

export const Address = () => {
  return (
    <Container>
      <Title>Company Name</Title>
      <List>
        <li>
          <a
            href="https://goo.gl/maps/5ZYDRsjNGcq4B8iE6"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            18a, Some Street, City, 02000
          </a>
        </li>
        <li>
          <a href="mailto:tasteme@corpmail.com">shop@corpmail.com</a>
        </li>
        <li>
          <a href="tel:+380911111111">+38 091 111 11 11</a>
        </li>
      </List>
    </Container>
  );
};
