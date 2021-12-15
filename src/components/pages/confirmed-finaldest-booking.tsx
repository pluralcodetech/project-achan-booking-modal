import { Component, h, State } from "@stencil/core";
import { toNextpageState } from "../globalState/globalState";
import { Router } from "../routerconfig/routerconfig";

@Component({
    tag: 'confirmed-finaldest-booking',
    styleUrl: 'pages.css',
    shadow: true
})

export class ConfirmedFinalDestination {
    componentWillLoad() {
        toNextpageState.set('toNextpage', false);
    }

    @State() finalDestinationCBTD = JSON.parse(localStorage.getItem("finalDestinationCBTD"));

    nextpage() {
        Router.push('/page-departure-airport-cbtd');
        console.log(this.finalDestinationCBTD)
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
