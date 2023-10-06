import { LinkBtn } from "@/components/global/LinkBtn/LinkBtn";
import { Container, Thumb, Message } from "./NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <>
      <Container>
        <Thumb>
          <Message>404 | Page Not Found</Message>
          <LinkBtn text={"Homepage"} address={"/"} />
        </Thumb>
      </Container>
    </>
  );
};

export default NotFoundPage;
