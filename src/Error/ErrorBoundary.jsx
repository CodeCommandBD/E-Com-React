import { useNavigate, useRouteError } from "react-router-dom"
import errorImg from '../Assets/404 Error.gif'
import { X } from "lucide-react";


export const ErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate()
  return (
    <div className="bg-gradient-to-t from-green-400 to-purple-400 h-screen flex flex-col gap-20" style={{ padding: "2rem", textAlign: "center" }}>
      <div className="flex items-center justify-center">
      <X size={50} strokeWidth={10} absoluteStrokeWidth className="text-red-600"/>
      <h1 className="text-5xl font-semibold text-white"> Something went wrong</h1>
      </div>
      {
        error.status === 404 ?
          <div className="h-screen">
            <div className="container flex flex-col items-center  justify-center gap-10">

              <div className="font-pop flex justify-start w-full flex-col items-start gap-4">
                <p className="font-extrabold text-white text-4xl"> Oh snap!</p>
                <p className="font-semibold text-white text-lg"> We couldn't find the page you're looking for.</p>
                <button onClick={() => navigate('/')} className="bg-gradient-to-r from-green-600 to-purple-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300">Go To Home Page</button>
              </div>

              <div className=" flex items-center justify-center">
                <img src={errorImg} alt="404 Error" />
              </div>
            </div>
          </div>
          :
          <p className="text-3xl font-semibold ">{error.statusText || error.message} </p>
      }
    </div>
  )
}

