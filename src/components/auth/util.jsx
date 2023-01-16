import { NavLink } from "react-router-dom"

// Componentes
export const Input = (props) => {
  return (
    <input
      className="
      bg-neutral-100
        text-nuetral-800
        px-4 py-2
        rounded
        outline-none
        border-none
        focus:outline-offset-0
      focus:outline-blue-300
      "
      {...props}
    />
  )
}

export const Button = (props) => {
  return (
    <button
      className="
      bg-white
      text-neutral-500
        text-center
        w-full h-full
        outline-none
        border-2
      border-neutral-400
        
        focus:border-blue-400
        focus:text-blue-500
      "
      {...props}
    >
      {props.children}
    </button>
  )
}

// VALIDACIONES

/**
 * Retorna true si el campo cumple con la validacion
 * @param {str} id 
 * @param {int} len 
 * @returns boolean
 */
export const notNull = (id) => {
  return document.getElementById(`${id}`).value != null
}

export const notBlank = (id) => {
  return document.getElementById(`${id}`).value !== ""

}

export const notNullAndBlank = (id) => {
  return notNull(id) && notBlank(id)
}