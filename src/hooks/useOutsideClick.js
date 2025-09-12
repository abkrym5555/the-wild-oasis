import { useEffect, useRef } from "react";

export function useOutsideClick(close) {
  const ref = useRef();
  useEffect(
    function () {
      function handelClick(e) {
        if (ref.current && !ref.current.contains(e.target)) close();
      }
      document.addEventListener("click", handelClick, true);

      //clean
      return () => document.removeEventListener("click", handelClick, true);
    },
    [close]
  );
  return ref;
}
