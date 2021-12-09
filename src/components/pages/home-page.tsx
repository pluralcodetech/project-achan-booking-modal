import { Component, h } from "@stencil/core";
// import { Router } from "../routerconfig/routerconfig";

@Component({
    tag: "home-page",
    styleUrl: 'pages.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class HomePage {
    render() {
        // const url = Router.url?.pathname;
        // console.log(url);
        return (
            <div>
                <main-screen></main-screen>
            </div>
        );
    }
}