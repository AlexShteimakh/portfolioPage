import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopO() {
  const { pathname } = useLocation();
  useEffect(O => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}