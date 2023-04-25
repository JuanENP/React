import React from "react";
import "./styles/Form.css"

class InformationForm extends React.Component{

    //inicializo estado vacío
    state={}
        /*
            Cuando se trabaja con funciones para
            eventos, la funcion que manejará el 
            evento inicia siempre
            con handle.
        */

    //enlace para recibir las props (mejor usar funcion de flecha en handle click y listo)
    // constructor(props){
    //     super(props)

    //     this.handleClick = this.handleClick.bind(this)
    // }

    handleClick = () =>{
        //this indica las props que se enlazan de forma automática con babbel
        //console.log(this);
        console.log("Clicked")
    }

    handleSubmit = e =>{
        //e = event
        //evitar que la página se recargue al dar submit
        e.preventDefault()
        console.log(this.state)
    }


    render(){
        //destructuring del controlador
        const {onChange, form} =this.props


        /*
            el react event es nombrado con camelCase
            y con jsx se le manda la funcion que 
            controla dicho evento: handleClick
        */
        return (
            <div className = "container">
               <form
                onSubmit={this.handleSubmit}
               >
                   <div className = "form-group form-group-element form-title-element">
                       <input
                            className = "form-control"
                            placeholder = "title"
                            type = "text"
                            name="title"
                            //evento
                            onChange={onChange}
                            value={form.title}
                       />
                   </div>
                   <div className = "form-group form-group-element">
                       <input
                            className = "form-control"
                            placeholder = "description"
                            type = "text"
                            name="description"
                            //evento
                            onChange={onChange}
                            value={form.description}
                       />
                    </div>
                    <div className = "form-group form-group-element">
                       <input
                            className = "form-control"
                            placeholder = "img (URL)"
                            type = "text"
                            name="img"
                            //evento
                            onChange={onChange}
                            value={form.img}
                       />
                   </div>
                   <div className = "row form-group-element">
                       <div className = "col-sm form-group-element">
                            <input
                                className = "form-control"
                                type = "text"
                                placeholder = "leftColor"
                                name="leftColor"
                                //evento
                                 onChange={onChange}
                                 value={form.leftColor}
                            />
                       </div>
                       <div className = "col-sm form-group-element">
                            <input
                                className = "form-control"
                                type = "text"
                                placeholder = "rigthColor"
                                name="rigthColor"
                                //evento
                                onChange={onChange}
                                value={form.rigthColor}
                            />
                       </div>
                    </div>
                <button
                    className = "btn btn-primary"
                    type = "submit"
                >
                    Aceptar
                </button>   
               </form>
           </div>
        )
    }
}

export default InformationForm