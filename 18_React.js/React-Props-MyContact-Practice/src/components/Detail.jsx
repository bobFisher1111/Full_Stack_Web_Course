import React from "react";
import { isPropertySignature } from "typescript";

function Detail(props) {
    return (
        <p className="info">{props.detailInfo}</p>
    );
}

export default Detail;