import React from 'react'

function IconWithData({item}) {
    return (
        <i data-visualcompletion="css-img"
            style={{
                backgroundImage: item.url,
                backgroundPosition: item.position, backgroundSize: "auto", width: "36px", height: "36px",
                backgroundRepeat: "no-repeat", display: "inline-block"
            }}
        ></i>
    )
}

export default IconWithData