import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

function App() {
  return (
      <Container 
      className="d-flex align-items-center justify content-center" 
      style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{maxWidth: "400px"}}>
          <Router>
            <AuthProvider>
              {/* Routes determines which router we are currently on */}
              <Routes>
                {/* <PrivateRoute path="/" exact element={<Dashboard/>}/> */}

                <Route exact path="/" element={<PrivateRoute/>}>
                  <Route exact path='/' element={<Dashboard/>}/>
                </Route>

                <Route exact path="/update-profile" element={<PrivateRoute/>}>
                  <Route exact path='/update-profile' element={<UpdateProfile/>}/>
                </Route>

                <Route path="/signup" element={ <Signup/> }/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>

              </Routes>
            </AuthProvider>
          </Router> 
        </div>
      </Container>
  )
}

export default App;
