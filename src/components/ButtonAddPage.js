import React from "react";
import "./styles/Card.css";
import { Link } from "react-router-dom";

/*La forma más sencilla de escribir un componente funcional
 (con funciones) en react es utilizando funciones de javascript:

declaramos la funcion, el nombre del componente con
sus propiedades (props) y se exporta al proyecto (export).
*/

const ButtonAdd = (props) => (
  <Link to="/information/new">
    <div className="mx-auto Halo-Card">
      <div className="Halo-User-Info">
        <img src={props.img} className="float-right mediana" />
      </div>
    </div>
  </Link>
);

// function ButtonAdd(props) {

//     return (

//         <Link to="/information/new">
//             <div className="mx-auto Halo-Card">
//                 <div className="Halo-User-Info">
//                     <img src={props.img} className="float-right mediana" />
//                 </div>
//             </div>
//         </Link>

//     )
// }

export default ButtonAdd;
