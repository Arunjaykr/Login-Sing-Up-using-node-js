import React from "react"
import SignUp from "./Components/LoginSignUp/SignUp"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./Components/LoginSignUp/Login"


function App() {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App