import { NavLink as NavLinkReactRouter } from "react-router-dom";

export const NavLink = ({ to, children, ...props}) => {
    return (
        <NavLinkReactRouter
            {...props}
            to={to}
            className={({ isActive }) => isActive ? 'active nav-link' : 'nav-link'}
        >{children}
        </NavLinkReactRouter>
    )
};