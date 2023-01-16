import { Button } from "../../auth/util"
import { Footer, Header } from "../Common"
import { useLocation, useNavigate } from "react-router-dom"

export const NotImplement = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    return (
        <>
            <main className="h-screen w-screen bg-neutral-800 text-white">
                <div className="h-full w-full flex flex-col items-center justify-center text-2xl uppercase">
                    <h1 className="animate-bounce"> 501 </h1>
                    <span>No implementado</span>
                    {/* rome-ignore lint/a11y/useButtonType: <explanation> */}
                    <button onClick={() => navigate(location.state?.location?.pathname ?? "/")}>Back</button>
                </div>
            </main>
        </>
    )
}