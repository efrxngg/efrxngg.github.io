import { Navigate, NavLink } from "react-router-dom"
import { Button, Input, notNullAndBlank } from "./util"


export const SignIn = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold py-4">
        Inicar Session
      </h1>
      <form className="grid grid-cols-1 gap-2" method="POST" onSubmit={constraintOnSubmit}>
        <Input placeholder="exxxn@gmail.com" type="email" maxLength="255" id="inp_email" />
        <Input placeholder="1234" type="password" maxLength="16" id="inp_password" />
        <Button>Continuar</Button>
      </form>

      <span className="text-xs">
        o <NavLink to="/sign-up" type="submit">Registrarse</NavLink>
      </span>
    </div>
  )
}

const constraintOnSubmit = (e) => {
  e.preventDefault()
  // Validaciones
  if (!(notNullAndBlank("inp_email") && notNullAndBlank("inp_password"))) {
    console.log("no pasas")
    return;
  }

  console.log("pasas")
}
