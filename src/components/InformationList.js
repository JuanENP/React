import React from "react";
import Card from "./Card";

const InfoList = ({infoData}) => (
    <div>
        {
            infoData.map((info) => (
                <Card
                    key={info.id}
                    title={info.title}
                    description={info.description}
                    img={info.img}
                    leftColor={info.leftColor}
                    rigthColor={info.rightColor}
                />
            ))
        }
    </div>
);

// function InfoList(props) {
//     return (
//         <div>
//             {props.infos.map((info) => {
//                 return (
//                     <Card
//                         title={info.title}
//                         description={info.description}
//                         img={info.img}
//                         leftColor={info.leftColor}
//                         rigthColor={info.rightColor}
//                     />
//                 );
//             })}
//         </div>
//     );
// }

export default InfoList;
