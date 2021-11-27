import { Outlet, NavLink } from "react-router-dom";
import routes from '../../routes'
import './index.css';
export default function Layout() {
  return (
    <div className="box">
      <nav className="box-left">
      {
        routes.map(
            ({ title, path }) => {
                return (
                    <div className="nav" key={title}>
                        <NavLink 
                            to={`/${path}`} 
                            style={({ isActive }) => {
                                return {
                                  color: isActive ? "red" : ""
                                };
                            }}
                        >{title}</NavLink>
                    </div>
                )
            })
        }
      </nav>
      <div className="box-right">
        <Outlet />
      </div>
    </div>
  )
};