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
          color="var(--accent-bg-color, blue)"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="var(--loader-oval-color, lightblue)"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </LoaderThumb>
    </Container>,
    LoaderRoor
  );
};
