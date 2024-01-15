import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return ( 
        <div className="md:w-2/5 xl:w-1/5 bg-gray-800 ">
            <div className="p-6">
                <p className="uppercase text-white tex-2xl tracking-wide text-center font-bold">BonAppétitHub</p>

                <p className="mt-3 text-gray-500"> Administra tu restaurante en las siguientes opciones : </p>

                <nav className="mt-10">
                    <NavLink /* activeClassName="text-yellow-500" NO FUNCA*/ className="p-1 text-gray-300 block hover:bg-yellow-500 hover:text-gray-900" exact to="/" >Ordenes</NavLink>
                    <NavLink className="p-1 text-gray-300 block hover:bg-yellow-500 hover:text-gray-900" exact to="/menu">Menú</NavLink>
                    {/* <NavLink className="p-1 text-gray-300 block hover:bg-yellow-500 hover:text-gray-900" exact to="nuevo">Nuevo Platillo</NavLink>
 */}
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;