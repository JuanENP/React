import React from "react"
import ReactDOM from "react-dom"


import 'bootstrap/dist/css/bootstrap.css'
import App from "./components/App"

const container=document.getElementById('root')
//ReactDOM.render(QUÉ?, DÓNDE?)

//Card, al ser un componente, se debe definir con sus etiquetas
ReactDOM.render(<App/>, container)
