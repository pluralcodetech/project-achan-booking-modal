import { Component, h } from "@stencil/core";
import { Route } from "stencil-router-v2";
import { Router } from "../routerconfig/routerconfig";

@Component({
    tag: "home-page",
    styleUrl: 'pages.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class HomePage {
    render() {
        const url = Router.url?.pathname;
        console.log(url);
        return (
            <div>
                <h1>Home Page</h1>
                {/* <Route path='/home'>
                    <main-screen></main-screen>
                </Route> */}
                {/* <Route path={(url)}
                    render={() => <main-screen></main-screen>}
                /> */}
                
  
                  
                    
    
                {/* <Route path="/page-pickup-point">
                    <home-page></home-page>
                </Route> */}
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