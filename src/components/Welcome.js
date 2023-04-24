import React from "react";
import "./styles/Welcome.css";

/*La forma más sencilla de escribir un componente funcional
 (con funciones) en react es utilizando funciones de javascript:

declaramos la funcion, el nombre del componente con
sus propiedades (props) y se exporta al proyecto (export).
*/

const Welcome = ({username}) => (

    <div className="container">
        <div className="Halo-User-Info">
            <h1>Hola {username}</h1>
            <p>Learn more about Halo Reach</p>
        </div>
    </div>
)

// function Welcome(props) {

//     return (

//         <div className="container">
//             <div className="Halo-User-Info">
//                 <h1>Hola {props.username}</h1>
//                 <p>Learn more about Halo Reach</p>
//             </div>
//         </div>
//     )
// }

export default Welcome