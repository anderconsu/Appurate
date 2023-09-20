import { Outlet } from 'react-router-dom'
import './App.css'
// import Nosotros from './components/visible/nosotros/nosotros'
// import Login from './components/visible/login/login'
// import Unete from './components/visible/unete/unete'
import Admin from './components/admin/admin'
// import Mapa from './components/visible/mapa/mapa'




function App() {
  

  return (
    <>
      {/* <Login />
      <Unete />
      <Nosotros /> */}
      <div>

      <Admin />
      <div>
        <Outlet />
      </div>
      </div>
      {/* <Mapa /> */}
    </>
  )
}

export default App
