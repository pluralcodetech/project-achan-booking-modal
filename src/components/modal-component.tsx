import { Component, getAssetPath, h, Prop } from "@stencil/core";

import { Route } from 'stencil-router-v2';
import { Router } from "./routerconfig/routerconfig";


console.log(Router);


@Component({
    tag: 'modal-component',
    styleUrl: 'my-component.css',
    shadow: true,
    assetsDirs: ['assets'],
})
    


export class ModalComponent {
    @Prop({ reflect: true, mutable: true }) opened: boolean;
    @Prop()logoIcon = 'logo.png';


    // Close the Modal
    closeModal() {
        this.opened = false;
        console.log("closing Modal...")
    }

    render() {
        return (
            <div>
                {this.opened ? (
                    // Modal Container
                    <div class=' justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none modal-container'>
                        <div class="relative w-72  sm:w-9/12  my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div class="flex items-center  justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                                    <div>
                                        <div>
                                            <img  
                                                class="w-16" 
                                                src={getAssetPath(`../assets/${this.logoIcon}`)} 
                                                alt="logo-icon"
                                            /> 
                                        </div>
                                    </div>
                                    <button
                                        onClick={this.closeModal.bind(this)}
                                        class="text-gray-400 p-1 ml-auto bg-transparent border-0 outline-none focus:outline-none"
                                    >x</button>
                                </div>
                                <main>
                                    <Router.Switch>
                                        <Route path="/home">
                                            <home-page></home-page>
                                        </Route>
                                        <Route path="/page-pickup-point">
                                            <page-pickup-point></page-pickup-point>
                                        </Route>
                                        <Route path="/page-arrival-to-final-destination">
                                            <page-arrival-to-final-destination></page-arrival-to-final-destination>
                                        </Route>
                                        <Route path="/page-pickuppoint-airport-destination">
                                            <page-pickuppoint-airport-destination></page-pickuppoint-airport-destination>
                                        </Route>
                                        <Route path="/page-roundtrip-pickup">
                                            <page-roundtrip-pickup></page-roundtrip-pickup>
                                        </Route>

                                        {/* Redirect to Home */}
                                        <Route path="/" to="/home"/>
                                    </Router.Switch>
                                </main>
                            </div>
                        </div>
                    </div>
                ) : null}
                {/* End of Modal Container */}
                    
                
            </div>
            
        );
    }
}