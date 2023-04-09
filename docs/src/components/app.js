import React from 'react';

export default function App({ src = "/img/app/app.svg", alt = "App Icon", width = 48, height = 48, radius = 10 }) {
    return (
        <img src={src} alt={alt} width={width} style={{ borderRadius: radius + "px" }} />
    );
}
// {{marginRight: spacing + 'em'}}