import { useEffect, useRef } from "react";

export function useOutsideClick(close, listenerCaptring = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handelClick(e) {
        if (ref.current && !ref.current.contains(e.target)) close();
      }
      document.addEventListener("click", handelClick, listenerCaptring);

      //clean
      return () =>
        document.removeEventListener("click", handelClick, listenerCaptring);
    },
    [close, listenerCaptring]
  );
  return ref;
}
