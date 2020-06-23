import React from "react";
import Menu from "./Menu";
import "../styles.css";
import { Link } from "react-router-dom";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => (
  <div>
    <Menu />
    <div className="jumbotron">
      <Link to="/">
        <img className="logo" src="/green_farm.png" />
      </Link>
      <h2>{title}</h2>
      <p className="lead">{description}</p>
    </div>
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
