import { Component, h, State } from "@stencil/core";
import { toNextpageState } from "../globalState/globalState";
import { Router } from "../routerconfig/routerconfig";

@Component({
    tag: 'confirmed-departure-airport',
    styleUrl: 'pages.css',
    shadow: true
})

export class ConfirmedDepartureAirport {
    componentWillLoad() {
        toNextpageState.set('toNextpage', false);
    }

    @State() estimateState = JSON.parse(localStorage.getItem("departureAirportCBTD"));

    nextpage() {
        Router.push('/page-departure-airport-cbtd');
    }
    render() {
        return (
            <div class="px-4 py-56">
                <booking-confirmed></booking-confirmed>

                <button 
                    onClick={this.nextpage.bind(this)}  
                    type="button"  
                    class="text-center mt-10 w-full border-0 p-3 outline-none focus:outline-none customBookingDetails-btn"
                >Preview Ticket</button>
            </div>
        )
    }
}
