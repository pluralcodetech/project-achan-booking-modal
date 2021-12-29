import { Component, h } from "@stencil/core";
import { airportToDestinationPageState, departureAirPageState, finalDestinationPageState, roundTripPickupPageState } from "../globalState/globalState";


@Component({
    tag: "home-page",
    styleUrl: 'pages.css',
    // shadow: true,
    assetsDirs: ['assets'],
})

export class HomePage {
        componentWillLoad() { 
            departureAirPageState.set('departureAirPage', false);
            finalDestinationPageState.set('finalDestinationPage', false);
            airportToDestinationPageState.set('airportToDestinationPage', false);
            roundTripPickupPageState.set('roundTripPickupPage', false);
        
        }
    render() {
        return (
            <div>
                <main-screen></main-screen>
            </div>
        );
    }
}