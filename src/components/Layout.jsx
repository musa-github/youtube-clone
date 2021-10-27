import React from "react";
import { useSelector } from "react-redux";

function Layout({ children }) {
  const showAside = useSelector((state) => state.control.aside);

  return (
    <div className={showAside ? "container" : "containerAside"}>{children}</div>
  );
}

export default Layout;
