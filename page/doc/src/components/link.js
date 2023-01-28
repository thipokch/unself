import React from 'react';
import { ArrowUpRight } from "phosphor-react";

export default function ExternalLink({ name = "link", url = "app.webp", alt = "App Icon", size = 18 }) {
    return (
        <div style={{ fontWeight: "bold" }}>
            <a href={url}>
                {name}
            </a>
            <a href={url}>
                <ArrowUpRight size={size} weight="bold" />
            </a>
        </div>
    );
}
