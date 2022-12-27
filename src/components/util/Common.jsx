import { useState } from "react";
import NavLinkSelect from "./NavLinkSelect"
import { VscMenu } from "react-icons/vsc"
import { RxSlash } from "react-icons/rx"




export const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <header
      className="shadow-md bg-neutral-900 text-white"
    >

      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent">
        <div className="container px-auto mx-auto flex flex-wrap items-center text-center">
          <div className="w-full flex justify-between items-center">

            <div className="flex">
              {/* start logo */}
              <span className="font-bold">X</span>
              {/* end logo */}

              <div
                className={
                  `lg:flex flex-grow items-center ${(navbarOpen ? " hidden" : "hidden")}`
                }
              >
                <Options />
              </div>
            </div>

            {/* start input */}
            <form className="text-secondary" onSubmit={(e) => { e.preventDefault() }}>
              <div className="relative">

                <input
                  type="search"
                  className="
                  bg-neutral-800
                  block w-full 
                  rounded-md border 
                  border-neutral-800
                  focus:bg-neutral-700
                  text-slate-300 
                  py-2 pr-10 pl-3 
                  leading-5 
                  placeholder-gray-500 
                  focus:border-gray-900
                  focus:placeholder-gray-400 
                  focus:outline-none 
                  focus:ring-1 
                  focus:ring-slate-50
                  sm:text-sm
                "
                  maxLength={30}
                  placeholder="Search"
                  onChange={search}

                />

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-primary">
                  <RxSlash className="border-slate-800" />
                </div>

              </div>
            </form>
            {/* end logo */}

            {/* start Icono */}
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div
                className="
                  p-2
                  rounded-xl
                  hover:bg-slate-800
                "
              >
                <VscMenu />
              </div>
            </button>
            {/* end icono */}
            {/* end content navbar */}
          </div>
        </div>
        <div
          className={
            ` flex-grow items-center sm:${(navbarOpen ? " flex" : " hidden")} lg:${navbarOpen ? "hidden" : ""}`
          }
        >
          <Options />
        </div>
      </nav>
    </header>
  )
}

const search = (e) => {
  console.log(e.target.value)
}

const Options = () => {
  return <ul
    className="
     flex flex-col 
     lg:flex-row
     list-none lg:ml-auto 
     font-medium
     px-10
    ">

    <NavLinkSelect
      className=""
      to="/services"
    >
      <span className="mr-6 py-5 hover:text-gray-400">Proyectos</span>
    </NavLinkSelect>

    <NavLinkSelect
      className=""
      to="/services"
    >
      <span className="mr-6 py-5 hover:text-gray-400">Servicios</span>
    </NavLinkSelect>


  </ul>
}