import { useWindowScroll } from "react-use";
import { Icon, Button } from "./GoUpButton.styled";

export const GoUpButton = () => {
  const { y } = useWindowScroll();

  console.log(y);

  const handleClick = () => {
    if (y > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {y > 300 && (
        <Button type="button" onClick={handleClick}>
          <Icon />
        </Button>
      )}
    </>
  );
};
