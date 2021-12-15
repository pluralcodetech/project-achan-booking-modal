import { Component, h, State } from "@stencil/core";
import { toNextpageState } from "../globalState/globalState";

@Component({
    tag: 'departure-airport-cbtd',
    styleUrl: 'pages.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class DepartureAirportCBTD {

    componentWillLoad() {
        toNextpageState.set('toNextpage', false);
    }
    @State() estimateState = JSON.parse(localStorage.getItem("departureAirportCBTD"));
    
    render() {
        return (
            <div>
                <h1>DepartureAirportCBTD</h1>
            </div>
        )
    }
}