import { Component, h, Host } from "@stencil/core";

@Component({
    tag: "main-screen",
    styleUrl: 'my-component.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class MainScreen { 
    render() {
        return (
            <Host>
                <h1>Main Screen</h1>
            </Host>
        )
    }
}