import React from "react";
import InformationForm from "../components/InformationForm";
import Card from "../components/Card";

class InformationNew extends React.Component {

    state = {

        //objeto donde se almacenará la info del formulario
        form: {

            title:"",
            description:"", 
            img:"", 
            leftColor:"", 
            rigthColor:""
        }
    }

    handleChange = e => {

        //revisar elemento que se lee y ver qué valor tiene
        //console.log(`${e.target.name} : ${e.target.value}`)

        //guardar la info del evento en un objeto de estado
        // let partialState ={}
        // partialState[e.target.name] = e.target.value
        // this.setState(partialState)

        //esto es lo mismo que las 3 líneas anteriores, gracias a Babbel se simplifica así
        this.setState({

            form: {
                //con esta línea (spread ...) se mantendrán los valores anteriores cuando el valor cambie
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {

        return (
            <div className="row">
                <div className="col-sm">
                    <Card
                        //compartir todo el estado del form con spread (...)
                        {...this.state.form}
                    />
                </div>
                <div className="col-sm">
                    <InformationForm
                        onChange={this.handleChange}
                        form={
                            this.state.form
                        }
                    />
                </div>
            </div>
        )
    }
}

export default InformationNew