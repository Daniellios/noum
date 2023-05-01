import { RefObject, useEffect } from "react";

// Типизировал хук
type Handler = MouseEvent | TouchEvent;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Handler) => void
): void {
  console.log("FSFF");

  useEffect(() => {
    const listener = (event: Handler) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;
