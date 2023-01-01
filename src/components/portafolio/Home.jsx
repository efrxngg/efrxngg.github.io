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
        {/* Caja Padre */}
        <div className="flex flex-col lg:flex-row">
          {/* part 1 */}
          <div className="flex-1 px-12 pb-12">
            {/* Nombre y descripcion */}
            <div className="flex flex-col mb-5 pt-24 ">
              <span
                className="
              font-bold uppercase 
              text-5xl
              lg:text-5xl
              "
              >
                Efren Galarza
              </span>
              <span className="font-semibold">
                <Technologies />
              </span>
            </div>
            <div className="text-justify">
              <p>
                Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Mollitia, veniam incidunt. Cum nisi quidem ex.
                Aperiam rerum atque alias obcaecati ad? Iste error quae maxime
                officia blanditiis excepturi est recusandae.
              </p>
            </div>
          </div>

          {/* part 2 */}
          <div className="flex-1 ">
            {/* Tecnologias y Frameworks */}
            <div className="w-auto h-full p-5 flex flex-col justify-center">
              <Languages />
            </div>
          </div>
        </div>

        {/* proyectos */}
        <Projects />

        {/* pie de pagina */}
        <Footer />

      </main>
    </>
  );
}


const Technologies = () => {

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

const Languages = () => {
  return (
    <>
      <p>
        Tecnologias y Frameworks
      </p>
      <div className='
        grid grid-cols-2 gap-2
        lg:grid-cols-3 lg:gap-2
      '>
        <Technologie name={"JAVA"} />
        <Technologie name={"REACT"} />
        <Technologie name={"POSTGRESQL"} />
        <Technologie name={"SPRING BOOT"} />
        <Technologie name={"JAVASCRIPT"} />
        <Technologie name={"GIT"} />
      </div>
      <NavLink to={"/services"}>Mas</NavLink>
    </>
  )
}


const Technologie = ({ name }) => {
  return (
    <div
      className='
      px-14 py-14
      bg-slate-400 
      rounded
      text-center
      hover:opacity-50
      '>
      {name}
    </div>
  )
}


const Projects = () => {
  const [repos, setRepos] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/user/repos?per_page=6&sort=pinned", {
      method: "GET",
      headers: {
        "Accept": "application/vnd.github+json",
        "Authorization": "Bearer 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"
      }
    })
      .then(response => response.json())
      // .then(data => { console.log(data); return data }) //peek
      .then(repos => { setRepos(repos) })
  }, [])

  return (
    <>
      <h1 className='px-3 py-1'>Proyectos Recientes</h1>
      {/* Content */}
      <div className='grid grid-cols-2 lg:grid-cols-6'>
        {repos.map(repo => <ProjectCard key={repo.id} project={repo} />)}
      </div>
      <NavLink to="/services" className="px-3 float-right">Mas</NavLink>
    </>
  )
}


const ProjectCard = ({ project }) => {
  return (
    <div className='px-2 py-4'>
      <div className='
      bg-slate-400 
      w-full h-full 
      rounded 
      pt-2
      px-2
      '>
        <div className='font-bold '>
          <a target="_blank" href={project.html_url} rel="noreferrer">{project.name}</a>
        </div>
        <p className=''>{project.description}</p>
      </div>
    </div>)
}

const Contact = () => {
  return (
    <>
    </>
  )
}

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">

        <NavLink to="/" className="flex title-font font-medium items-center md:justify-start justify-center ">
          <span className="ml-3 text-xl uppercase">efrxngg</span>
        </NavLink>

        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Efren Galarza —
          <a href="" className="text-gray-600 ml-1" rel="noopener noreferrer" target="">@efrxngg</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500" href=''>
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href=''>
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href=''>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500" href=''>
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