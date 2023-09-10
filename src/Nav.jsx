import {} from 'react'
import { NavLink } from 'react-router-dom'

function Nav(){
  return(
    <>
    <NavLink to="/Home">Home|</NavLink>
    <NavLink to="/Produtos">Produtos|</NavLink>
    <NavLink to="/Sobre">Sobre|</NavLink>
    <NavLink to="/Footer">Footer|</NavLink>
    </>
  )
}
export default Nav