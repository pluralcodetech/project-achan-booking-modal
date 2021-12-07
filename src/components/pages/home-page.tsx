import { Component, h } from "@stencil/core";

@Component({
    tag: "home-page",
    styleUrl: 'pages.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class HomePage {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                {/* <stencil-router>
                    <stencil-route url="/" component="landing-page" exact={true}/>
                    <stencil-route url="/page-pickup-point" component="page-pickup-point"/>
                    <stencil-route url="/page-arrival-to-final-destination" component="page-arrival-to-final-destination"/>
                    <stencil-route url="/page-roundtrip-pickup" component="page-roundtrip-pickup"/>
                </stencil-router> */}
            </div>
        );
    }
}