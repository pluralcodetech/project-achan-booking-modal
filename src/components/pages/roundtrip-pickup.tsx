import { Component, h } from "@stencil/core";

@Component({
    tag: "page-roundtrip-pickup",
    styleUrl: 'pages.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class PageRoundtripPickusp { 
    render() { 
        return (
            <div>
                <h1>Roundtrip Pickup</h1>
            </div>
        )
    }
}