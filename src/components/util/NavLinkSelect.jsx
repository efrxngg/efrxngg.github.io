import { NavLink } from "react-router-dom";

const NavLinkSelect = ({ to, children, ...props }) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) => { return isActive ? 'font-bold text-primary' : undefined }}
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default NavLinkSelect