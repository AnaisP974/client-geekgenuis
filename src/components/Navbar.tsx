import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className=" body-font flex justify-center pt-8">
        <NavLink to={"/"}>
        <img src="./logo_geekgenuis.png" alt="" className="w-36 border border-slate-100" />
        </NavLink>
    </nav>
  )
}

export default Navbar