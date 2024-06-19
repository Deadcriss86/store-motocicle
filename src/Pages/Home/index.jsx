import { Navlink } from "../../Components/Navbar_";

function Home() {
  return (
    <>
      <Navlink />
      <div className="border-yellow-400 h-1/2 w-1/2 bg-yellow-300 rounded-sm px-2">
        <ul className="text-white flex justify-between">
          <li>Productos</li>
          <li>Atencion a cliente</li>
          <li>Mis compras</li>
          <li>🛒</li>
        </ul>
      </div>
      <h1 className="">home</h1>
    </>
  );
}

export default Home;
