import { Header } from '../util/Common'
import '../../css/App.css'
import { TypeAnimation } from 'react-type-animation'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Home = () => {
  return (
    <>
      <Header />

      <main className="bg-neutral-900 text-white font-mono">
        {/* Contenido Principal */}
        <Content />

        {/* proyectos */}
        <Projects />

        {/* Contacto */}
        <Contact />

        {/* pie de pagina */}
        <Footer />

      </main>
    </>
  );
}

const Content = () => {
  return (

    < div className="flex flex-col lg:flex-row mb-10" >
      < div className="flex-1 px-12 pb-12" >
        <div className="flex flex-col mb-5 pt-24 " >
          <span className="font-bold uppercase text-5xl lg:text-5xl">
            Efren Galarza
          </span>
          <span className="font-semibold">
            <WriterSubtitleInfo />
          </span>
        </div >
        <div className="text-justify">
          <p>
            Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Mollitia, veniam incidunt. Cum nisi quidem ex.
            Aperiam rerum atque alias obcaecati ad? Iste error quae maxime
            officia blanditiis excepturi est recusandae.
          </p>
        </div>
      </div >

      {/* part 2 */}
      < div className="flex-1 " >
        {/* Tecnologias y Frameworks */}
        <div className="w-auto h-full p-5 flex flex-col justify-center" >
          <TechnoligiesAndFrameworks />
        </div >
      </div >
    </div >
  )
}

const WriterSubtitleInfo = () => {

  let result = ['Desarrollador Backend', "Ecuatoriano", "20 Años"]
  result.forEach(language => result.push(language, 2000));
  return (
    < TypeAnimation
      className="uppercase not-italic"
      // Same String at the start will only be typed once, initially
      sequence={result}
      speed={40} // Custom Speed from 1-99 - Default Speed: 40
      repeat={Infinity} // Repeat this Animation Sequence infinitely
      style={{ fontSize: '1em' }}
      wrapper="span" // Animation will be rendered as a <span>
    />
  )
}

const TechnoligiesAndFrameworks = () => {
  return (
    <>
      <p className='italic'>
        Tecnologias y Frameworks
      </p>
      <div className='grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-2 w-full h-full'>
        <Technologie name={"JAVA"} className=" hover:bg-red-400 hover:text-black" />
        <Technologie name={"REACT"} className=" hover:bg-cyan-400 hover:text-black" />
        <Technologie name={"POSTGRESQL"} className=" hover:bg-blue-400 hover:text-black" />
        <Technologie name={"SPRING BOOT"} className=" hover:bg-green-400 hover:text-black" />
        <Technologie name={"JAVASCRIPT"} className=" hover:bg-yellow-400 hover:text-black" />
        <Technologie name={"GIT"} className=" hover:bg-orange-400 hover:text-black" />
      </div>
      <NavLink to={"/services"}>Mas</NavLink>
    </>
  )
}

const Technologie = ({ name, className }) => {
  return (
    <div className={`bg-neutral-800 flex items-center justify-center py-14 ${className}`} >
      {name}
    </div>
  )
}

const Projects = () => {
  console.log(import.meta.env)
  const [repos, setRepos] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/user/repos?per_page=6&sort=pinned", {
      method: "GET",
      headers: {
        "Accept": "application/vnd.github+json",
        "Authorization": `Bearer ${import.meta.env.VITE_API_TOKEN_GITHUB}`
      }
    })
      .then(response => response.json())
      // .then(data => { console.log(data); return data }) //peek
      .then(repos => { setRepos(repos) })
  }, [])

  return (
    <>
      <h1 className='px-3 py-1 font-bold'>Proyectos Recientes</h1>
      {/* Content */}
      <div className='grid grid-cols-2 lg:grid-cols-6'>
        {repos.map(repo => <ProjectCard key={repo.id} project={repo} />)}
      </div>
      <NavLink to="/services" className="px-3 flex flex-row-reverse">Mas</NavLink>
    </>
  )
}

const ProjectCard = ({ project }) => {
  const title = project.name.replace(/-/g, " ")
  return (
    <div className='px-2 py-4'>
      <div className='
      bg-neutral-800 
      w-full h-full 
      rounded 
      pt-2
      px-2
      '>
        <div className='font-bold '>
          <a target="_blank" href={project.html_url} rel="noreferrer">{title}</a>
        </div>
        <p className=''>{project.description}</p>
      </div>
    </div>)
}

const Contact = () => {
  return (
    <div className='
      py-10
      flex flex-col lg:flex-row
    '>
      <div className='flex-1 px-3 py-2'>

        <h1 className="font-bold">Contacto</h1>
        <div className='flex flex-col w-full h-full items-center justify-center'>
          <form className="grid grid-cols-2 gap-2 w-10/12" onSubmit={(e) => { e.preventDefault() }}>
            <input className='px-4 py-3 bg-neutral-800 border-none outline-none focus:bg-neutral-700' type="text" name="name" id="name" placeholder='Nombre' />
            <input className='px-4 py-3 bg-neutral-800 border-none outline-none focus:bg-neutral-700' type="text" name="last_name" id="last_name" placeholder='Apellido' />
            <input className='col-span-2 px-4 py-3 bg-neutral-800 border-none outline-none  focus:bg-neutral-700' type="text" name="email" id="email" placeholder='Correo Electronico' />
            <textarea className="col-span-2 px-4 py-3 bg-neutral-800 border-none outline-none focus:bg-neutral-700" id="message" placeholder='Mensaje' cols="5" rows="5" />
            <div className='col-start-2 w-full h-full flex items-left justify-end'>
              <button
                type='submit'
                className='col-start-2 mt-6 py-3 px-10 w-fit border border-green-400 text-green-400 mb-1 hover:border-white hover:text-white'>
                Enviar Mensaje!
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className='flex-1'>
        <RedesSociales />
      </div>
    </div>
  )
}

const RedesSociales = () => {
  return (
    <>
      <h1 className='px-3 font-bold'>Redes</h1>
      <div className='grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-2 w-full h-full p-5'>
        <RedSocialCard name={"LinkedIn"} />
        <RedSocialCard name={"WhatsApp"} />
        <RedSocialCard name={"Facebook"} />
        <RedSocialCard name={"Intagram"} />
        <RedSocialCard name={"Twiter"} />
        <RedSocialCard name={"Mas?"} />
      </div>
    </>
  )
}

const RedSocialCard = ({ name, link }) => {
  return (
    <a
      href={"https://chat.openai.com/chat"}
      className='border border-neutral-400 flex items-center justify-center py-14'
      type="button"
    >
      <div className=''>
        {name}
      </div>
    </a>)
}

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
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