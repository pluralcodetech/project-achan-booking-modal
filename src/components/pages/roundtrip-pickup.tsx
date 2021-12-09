import { Component, getAssetPath, h, Prop } from "@stencil/core";
import { toNextpageState } from "../globalState/globalState";

@Component({
    tag: "page-roundtrip-pickup",
    styleUrl: 'pages.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class PageRoundtripPickusp { 
    @Prop() logoIcon = 'logo.png';

    componentWillLoad() { 
        toNextpageState.set('toNextpage', true);
    };

    render() { 
        return (
            <div class="pt-14 pb-10">
                <title-component>
                    <img  
                        class="w-20" 
                        src={getAssetPath(`../assets/${this.logoIcon}`)} 
                        alt="logo-icon"
                    /> 
                </title-component>

                <main class='mt-20 space-y-6'></main>
            </div>
        )
    }
}