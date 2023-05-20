import {NavLink} from "react-router-dom";
import { Outlet } from "react-router-dom";

const activeMenu = ({isActive}) => isActive ? 'activeMenu' : ''

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to={'/about'} className={activeMenu}>
                        About
                    </NavLink></li>
                    <li><NavLink to={'/posts'}  className={activeMenu}>
                        PostList
                    </NavLink></li>

                </ul>
            </nav>
            <Outlet />
            <footer>Geeks</footer>
        </>
    )
}
export default Layout