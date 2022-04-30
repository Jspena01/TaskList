import { NavLink } from "react-router-dom";

import style from "./Header.module.css"
export default function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.headerTitle}>Task List</h1>
      <ul className={style.headerMenu}>
        <li className={style.headerMenuTitle}>
          <NavLink className={style.headerLink} to={"/Home"}>Home</NavLink>
        </li>
        <li className={style.headerMenuTitle}>
          <NavLink className={style.headerLink} to={"/About"}>About</NavLink>
        </li>
        <li className={style.headerMenuTitle}>
          <NavLink className={style.headerLink} to={"/Register"}>Register</NavLink>
        </li>
      </ul>
    </header>
  );
}
