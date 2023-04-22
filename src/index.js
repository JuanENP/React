import React from "react"
import ReactDOM from "react-dom"
import Information from "./pages/Information"

import 'bootstrap/dist/css/bootstrap.css'

const container=document.getElementById('root')
//ReactDOM.render(QUÉ?, DÓNDE?)

//Card, al ser un componente, se debe definir con sus etiquetas
ReactDOM.render(<Information/>, container)
