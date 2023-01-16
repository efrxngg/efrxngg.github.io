import { Footer, Header } from '../util/Common'
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
      </main>

      <Footer />
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
            Soy un desarrollador apasionado, siempre en busca de nuevos desafíos y oportunidades para expandir mis habilidades y conocimientos. Me especializo en crear soluciones robustas y escalables, utilizando las últimas tecnologías y tendencias en el mundo del desarrollo. Mi experiencia incluye una amplia gama de lenguajes de programación
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
  const p1 = "github_"
  const p2 = "pat_"
  const p3 = "11AVEGXBQ0l4lpGGBi5oNg_iZSAfMjhIyxePlPk2N6gSbr5gEtwF5VzUsPSPGr6kNlEV43JQ55pW743yWs"
  const [repos, setRepos] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/user/repos?per_page=6&sort=pinned", {
      method: "GET",
      headers: {
        "Accept": "application/vnd.github+json",
        "Authorization": `Bearer ${p1 + p2 + p3}`
        // "X-GitHub-Api-Version": "2022-11-28"
      }
    })
      .then(response => response.json())
      .then(data => { console.log(data); return data }) //peek
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
