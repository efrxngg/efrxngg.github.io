import { SignIn } from "./SignIn"
import "../../css/App.css"
import FTemporal from "../../assets/dashboard/user-default.png"
import { DiJava } from "react-icons/di"

/**
 * @returns Vista General de Authenticacion y Autorizacion o Registro
 */
export const AuthView = () => {
  return (
    <>
      <main id="content" className="bg-neutral-900 text-neutral-900">
        <div className="flex w-full h-full p-10 lg:py-16 lg:px-72">
          <div className="bg-white flex flex-col-reverse rounded lg:flex-row w-full h-full shadow-2xl">
            {/* Login */}
            <div className="flex-1">
              <div className="flex w-full h-full items-center justify-center">
                <SignIn />
              </div>
            </div>
            {/* Img */}
            <div className="lg:flex-1">
              <div className="bg-neutral-800 w-full h-full flex items-center justify-center">
                <DiJava className="text-white w-2/6 h-2/6 lg:w-full lg:h-full" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}