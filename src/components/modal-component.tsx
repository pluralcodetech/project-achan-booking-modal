import { Component, getAssetPath, h, Prop, State } from "@stencil/core";

import { href, Route } from 'stencil-router-v2';

// import customPostAction from '../components/redux-statement/actions/customPostAction'


import { Router } from "./routerconfig/routerconfig";
import { airportToDestinationPageState, branchId, departureAirPageState, finalDestinationPageState, roundTripPickupPageState, toNextpageState } from "./globalState/globalState";
// import { store } from "@stencil/redux";
// import { configureStore } from "./redux-statement/store";




console.log(Router);


console.log(toNextpageState.get('toNextpage'));



@Component({
    tag: 'modal-component',
    styleUrl: 'my-component.css',
    shadow: true,
    assetsDirs: ['assets'],
})
    


export class ModalComponent {
    @Prop({ reflect: true, mutable: true }) opened: boolean;
    @Prop({ reflect: true, mutable: true })  requiredid: string;
    @Prop() previousBtn = 'arrow-left.svg';
    @Prop() logoIcon = 'logo.png';

    @State() customPost;
    @State() loading;
    @State() error;

    customPostAction: (...args: any) => any;
    
    componentWillLoad() { 

        toNextpageState.set('toNextpage', false);
        branchId.set('id', this.requiredid);

        departureAirPageState.set('departureAirPage', false);
        finalDestinationPageState.set('finalDestinationPage', false);
        airportToDestinationPageState.set('airportToDestinationPage', false);
        roundTripPickupPageState.set('roundTripPickupPage', false);
    }


    // Close the Modal
    closeModal() {
        this.opened = false;
        console.log("closing Modal...")
        
        localStorage.removeItem("departureAirportCBTD");
        localStorage.removeItem("estimatedPrice");
        localStorage.removeItem("confirmBooking");
        localStorage.removeItem("departureAirport");
        localStorage.removeItem("finalDestination");
        localStorage.removeItem("finalDestinationCBTD");
        localStorage.removeItem("airportDestination");
        localStorage.removeItem("roundTripPickUp");
        localStorage.removeItem("airportDestinationCBTD");
        localStorage.removeItem("roundtripCBTD");
    }

    // Previous Button
    previousButton() {
        toNextpageState.set('toNextpage', false);
        
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
                                            {!toNextpageState.get('toNextpage') ? (
                                                <img  
                                                    class="w-16" 
                                                    src={getAssetPath(`../assets/${this.logoIcon}`)} 
                                                    alt="logo-icon"
                                                /> 
                                            ) : (
                                                    <a {...href('/home')} >
                                                        <img 
                                                            onClick={this.previousButton.bind(this)}  
                                                            class="mr-6" 
                                                            src={getAssetPath(`../assets/${this.previousBtn}`)} 
                                                            alt="previous-icon"
                                                        />
                                                    </a>
                                                    
                                            )}
                                        </div>
                                    </div>

                                    {
                                        departureAirPageState.get('departureAirPage') ? (
                                            <div class='mx-auto custom-text-color'>
                                                <h1>Pick up Point - Departure Airport</h1>
                                            </div>
                                        ) : null 
                                    }

                                    {
                                        finalDestinationPageState.get('finalDestinationPage') ? (
                                            <div class='mx-auto custom-text-color'>
                                                <h1>Arrival Airport - Final Destination</h1>
                                            </div>
                                        ) : null 
                                    }

                                    {
                                        airportToDestinationPageState.get('airportToDestinationPage') ? (
                                            <div class='mx-auto custom-text-color'>
                                                <h1>Pick Up point - Airports - Destination</h1>
                                            </div>
                                        ) : null 
                                    }

                                    {
                                        roundTripPickupPageState.get('roundTripPickupPage') ? (
                                            <div class='mx-auto custom-text-color'>
                                                <h1>Round Trip Pick ups</h1>
                                            </div>
                                        ) : null 
                                    }

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
                                        <Route path="/page-comfirm-booking">
                                            <comfirm-booking></comfirm-booking>
                                        </Route>
                                        <Route path="/page-confirmed-departure-airport">
                                            <confirmed-departure-airport></confirmed-departure-airport>
                                        </Route>
                                        <Route path="/page-departure-airport-cbtd">
                                            <departure-airport-cbtd></departure-airport-cbtd>
                                        </Route>
                                        <Route path="/page-fd-comfirm-booking">
                                            <fd-comfirm-booking></fd-comfirm-booking>
                                        </Route>
                                        <Route path="/page-confirmed-finaldest-booking">
                                            <confirmed-finaldest-booking></confirmed-finaldest-booking>
                                        </Route>
                                        <Route path="/page-finaldest-cbtd">
                                            <finaldest-cbtd></finaldest-cbtd>
                                        </Route>
                                        <Route path="/page-ad-comfirm-booking">
                                            <ad-comfirm-booking></ad-comfirm-booking>
                                        </Route>
                                        <Route path="/page-confirmed-airportdest-booking">
                                            <confirmed-airportdest-booking></confirmed-airportdest-booking>
                                        </Route>
                                        <Route path="/page-pickup-comfirm-booking">
                                            <pickup-comfirm-booking></pickup-comfirm-booking>
                                        </Route>
                                        <Route path="/page-airdestination-cbtd">
                                            <airdestination-cbtd></airdestination-cbtd>
                                        </Route>
                                        <Route path="/page-roundtrip-confirm-booking">
                                            <roundtrip-confirm-booking></roundtrip-confirm-booking>
                                        </Route>
                                        <Route path="/page-confirmed-roundtrip-booking">
                                            <confirmed-roundtrip-booking></confirmed-roundtrip-booking>
                                        </Route>
                                        <Route path="/page-roundtrip-cbtd">
                                            <roundtrip-cbtd></roundtrip-cbtd>
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