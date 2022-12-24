import '../../css/App.css'
import NavLinkSelect from '../util/NavLinkSelect'

export const Services = () => {
  return (
    <main className='bg-primary text-primary flex flex-col items-center justify-center' id='content'>
      <h1 className='text-primary font-bold text-4xl'>@Services</h1>
      <nav>
        <ul>
          <NavLinkSelect to="/">
            Home
          </NavLinkSelect>
        </ul>
      </nav>
    </main>)
}