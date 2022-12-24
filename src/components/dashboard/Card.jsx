// import ud from './assets/user-default.png'
import { VscCircleFilled } from "react-icons/vsc";
import ud from "../assets/dashboard/user-default.png"

export const CardUser = () => {
  return (
    // card
    <div className="
      flex
      text-center
      items-center
      bg-slate-800 
      mx-1
      my-1
      rounded-md 
      hover:bg-slate-500
    ">

      {/* img */}
      <img
        src={ud}
        alt="user"
        className="
          w-16
          m-0
        "
      />

      {/* username */}
      <h2 className="text-white">
        efrxngg
      </h2>

      {/* state */}
      <div className="
      text-red-600
        mx-4
      ">
        <VscCircleFilled />
      </div>
    </div>
  )
}