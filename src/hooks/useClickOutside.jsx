import { useEffect } from "react";

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const handlerId = (event) => {
      if (!ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handlerId);

    return () => {
      document.removeEventListener("mousedown", handlerId);
    };
  });
};
