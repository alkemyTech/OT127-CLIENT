import React from "react";

const News = (props) => {

    function Render(){
        document.body.innerHTML = props.props ;
    };

    return (
        <button type="button" id="boton" onClick={() => Render()} > Render </button>
    );
}

export default News;