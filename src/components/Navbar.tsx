import { NavLink } from "react-router-dom"
import { Toggle } from "./toggle"
import { useState } from "react";

const Navbar = () => {
  
  const [isDark, setIsdark] = useState(false);
  const [mode, setMode] = useState('lune');
  
const handleChange = () => {
  setIsdark(!isDark);
  if (mode === 'lune') {
    setMode('soleil');
  } else {
    setMode('lune');
  }

  document.body.classList.toggle('dark-mode');
}
  return (

    <nav className="flex justify-center pt-8 body-font">

        <NavLink to={"/"}>
        <img src="./logo_geekgenuis.png" alt="" className="border w-36 border-slate-100" />
        </NavLink>
        <Toggle handleChange={handleChange} isChecked={isDark} mode={mode}/>
    </nav>
  )
}

export default Navbar