import { Component, h } from "@stencil/core";

@Component({
    tag: "page-pickup-point",
    styleUrl: 'pages.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class MyComponent { 
    render() {
        return (
            <div>
                <h1>Pickup Point</h1>
            </div>
        );
    }
}