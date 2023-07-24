import { useState } from 'react'
import Header from './components/Header'
import Somos from './components/Somos'
function App() {

  return (
    <>
    <div className="container-fluid w-100">
      
      <div className="row ">
        <div className="col-12">
            <Header></Header>
        </div>
      </div>
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
