import { useState } from 'react'
import Header from './components/Header'
import Somos from './components/Somos'
function App() {

  return (
    <>
    <div className="conteiner-fluid bg-warning  ">
      <div className="row w-100 bg-secondary">
        <div className="col">
            <Header></Header>
        </div>
      </div>
      <div className="row w-100">
        <div className="col">
          <Somos/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
