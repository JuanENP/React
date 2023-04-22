import React from "react";
import InfoList from "../components/InformationList";
import Welcome from '../components/Welcome'

/*Esta clase embeberá nuevos componentes*/
class Information extends React.Component{

    constructor(props){

        super(props)
        this.state={
            data: [{
                "id": 1,
                "title": "Halo: Reach, the best game",
                "description": "Learn about this game and love it",
                "img": "https://www.latercera.com/resizer/m0DgLUbDGcncxl2kINMzdbTCJ28=/900x600/filters:focal(369x167:379x157)/cloudfront-us-east-1.images.arcpublishing.com/copesa/ALGBWONLONE45D2PFD6PEYKVOI.jpg",
                "leftColor": "#A74CF2",
                "rightColor": "#617BFB"
            },{
                "id": 2,
                "title": "Game Of The Year? NO",
                "description": "Find out why the game didn't win the GOTY award",
                "img": "https://phantom-marca.unidadeditorial.es/e6f61644c47d5469e64e2f8b91d2194f/resize/828/f/webp/assets/multimedia/imagenes/2022/11/15/16685424243094.jpg",
                "leftColor": "#17EAD9",
                "rightColor": "#6078EA"
            },{
                "id": 3,
                "title": "The Best Multiplayer of Halo Saga",
                "description": "Playing with friends and strangers has never been so good",
                "img": "https://i2-prod.dailystar.co.uk/incoming/article21011837.ece/ALTERNATES/s810/0_Halo-Reach-multiplayer.jpg",
                "leftColor": "#FAD961",
                "rightColor": "#F76B1C"
            }]
        }
    }

    render(){

        return(

            <div>
                    <Welcome
                        username="YisuCrist"
                    />
                    <InfoList
                        //infos es el nombre de las props en InformationList.js
                        infos={this.state.data}
                    />
                    
                </div>
        )
    }

}

export default Information