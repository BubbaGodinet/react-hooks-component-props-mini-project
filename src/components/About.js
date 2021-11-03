import React from "react";

function About ({image = 'https://via.placeholder.com/215', about }) {
    return (
<>
        <img src= {image} alt= "blog Logo"/>
        <p>{about}</p>
</>
    )
}

export default About