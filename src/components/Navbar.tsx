import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-center pt-8 body-font">
        <NavLink to={"/"}>
        <img src="./logo_geekgenuis.png" alt="" className="border w-36 border-slate-100" />
        </NavLink>
    </nav>
  )
}

export default Navbar