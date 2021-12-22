import { Component, getAssetPath, h, Prop } from "@stencil/core";
import { href } from 'stencil-router-v2';


@Component({
    tag: "route-card",
    styleUrl: 'my-component.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class RouteCard { 
    @Prop() faqIcon = 'faq.png'
    @Prop() pathname: string;
    @Prop() places: string;

    render() {
        return (
            <a {...href(this.pathname)}  >
                <div class='p-3 sm:p-5 mx-auto border w-full flex flex-row items-center justify-between sm:w-96 custom-border-color'>
                    <div>
                        <h1 class="font-semibold custom-text-color">{this.places}</h1>
                    </div>
                    <div>
                        <img  
                            src={getAssetPath(`../assets/${this.faqIcon}`)} 
                            alt="logo-icon"
                        /> 
                    </div>
                </div>
            </a>
            
        )
    }
}