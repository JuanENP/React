/*Hay componentes funcionales y de clase, este es de clase*/
//un elemento es a un componente como un objeto es a una clase
import React from "react";
import imgPrincipal from "../imgs/halo-reach-principal.png";
import "./styles/Card.css";
import circlesImage from '../imgs/circles.png'

/*
    Las propiedades o props de los componentes
    son los parámetros que se les dan, así cada
    componente puede ser reutilizable. Las props
    son fijas en toda la vida del componente
*/

/*
    El estado contiene informacion sobre el componente.
    comienza con un valor por defecto y va mutando su 
    valor (actualizando) a lo largo de la vida del componente.


*/
class Card extends React.Component {
    //pinta lo que definimos dentro de la funcion
    render() {

        //destructuring con una constante que son las props a usar
        const {title, description, img, leftColor, rigthColor} = this.props
        return (
            <div className="card mx-auto Halo-Card"
                //estilo en línea
                style={{
                    backgroundImage: `url(${circlesImage}), linear-gradient(to right, ${leftColor}, ${rigthColor})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} className="float-right mediana"/>
                        </div>
                        <div className="col-6 Halo-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
