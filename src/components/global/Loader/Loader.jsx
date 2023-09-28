import { createPortal } from "react-dom";
import { Oval } from "react-loader-spinner";
import { Container, LoaderThumb } from "./Loader.styled";

const LoaderRoor = document.querySelector("#loader-root");

export const Loader = () => {
  return createPortal(
    <Container>
      <LoaderThumb>
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </LoaderThumb>
    </Container>,
    LoaderRoor
  );
};
