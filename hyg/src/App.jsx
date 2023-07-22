import { useState } from 'react'
import Header from './components/Header'
import Somos from './components/Somos'
function App() {

  return (
    <>
    <div className="conteiner-fluid">
      <div className="row ">
        <div className="col ">
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
