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

    constructor(props){
        super(props)
        //estado inicial del componente
        this.state={
            image:'https://depor.com/resizer/4LiA3UcZpkTbq0pGF8j9dPiahkw=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6Y2EDIISGFGVFANEVDCR5LCG34.jpg'
        }
    }

    //se ejecuta inmediatamente despues de que un componente se monte o cargue
    componentDidMount(){

        //cambiar la info del estado a los 5 segundos del montado
        setTimeout(()=>{
            this.setState({
                image:'https://www.latercera.com/resizer/m0DgLUbDGcncxl2kINMzdbTCJ28=/900x600/filters:focal(369x167:379x157)/cloudfront-us-east-1.images.arcpublishing.com/copesa/ALGBWONLONE45D2PFD6PEYKVOI.jpg'
            })
        }, 5000)
    }

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
                            <img src={this.state.image} className="float-right mediana"/>
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
