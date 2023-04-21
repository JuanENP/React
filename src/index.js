import React from "react"
import ReactDOM from "react-dom"
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'

const container=document.getElementById('root')
//ReactDOM.render(QUÉ?, DÓNDE?)

//Card, al ser un componente, se debe definir con sus etiquetas
ReactDOM.render(<Card
                    title="Halo: Reach, the best game"
                    description="Learn about this game and love it"
                    img="https://www.latercera.com/resizer/m0DgLUbDGcncxl2kINMzdbTCJ28=/900x600/filters:focal(369x167:379x157)/cloudfront-us-east-1.images.arcpublishing.com/copesa/ALGBWONLONE45D2PFD6PEYKVOI.jpg"
                    leftColor="#A74CF2"
                    rigthColor="#617BFB"
                />, container)
