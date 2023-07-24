import { useState } from 'react'
import Header from './components/Header'
import Somos from './components/Somos'
function App() {

  return (
    <>
    <Header/>
    <div className="container-fluid w-100">
      <div className="row">
        <div className="col ">
          <Somos/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
