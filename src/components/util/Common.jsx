import { useState } from "react";
import { VscMenu } from "react-icons/vsc"
import { RxSlash } from "react-icons/rx"
import { NavLink, useLocation } from "react-router-dom";

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
                  placeholder="Buscar"
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

    <OptionNavLink to="/proyectos">Proyectos</OptionNavLink>
    <OptionNavLink to="/tecnologias">Tecnologias</OptionNavLink>
    <OptionNavLink to="/redes">Redes Sociales</OptionNavLink>

  </ul>
}

const OptionNavLink = (props) => {
  const location = useLocation()
  return (
    <NavLink state={{location}}
      {...props}
    >
      <span className="mx-4 italic">{props.children}</span>
    </NavLink >
  )
}

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-neutral-900">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">

        <NavLink to="/" className="flex title-font font-medium items-center md:justify-start justify-center ">
          <span className="ml-3 text-xl uppercase">efrxngg</span>
        </NavLink>

        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Efren Galarza —
          <a href="/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="">@efrxngg</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500" href='/'>
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href='/'>
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href='/'>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href='/'>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}