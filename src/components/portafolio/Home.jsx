import '../../css/App.css'
import NavLinkSelect from '../util/NavLinkSelect'

export const Home = () => {
  return (
    <main className='bg-primary text-primary flex flex-col items-center justify-center' id='content'>
      <h1 className='text-primary font-bold text-4xl'>@efrxngg</h1>
      <nav>
        <ul>
          <NavLinkSelect to="/services">
            Services
          </NavLinkSelect>
        </ul>
      </nav>
    </main>
  )
}