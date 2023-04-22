import React from "react";
import Card from "./Card";
function InfoList(props) {
    return (
        <div>
            {
                props.infos.map((info => {

                    return (
                        <Card
                            title={info.title}
                            description={info.description}
                            img={info.img}
                            leftColor={info.leftColor}
                            rigthColor={info.rightColor}
                        />
                    )
                }))
            }
        </div>
    )
}

export default InfoList