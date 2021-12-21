import { Component, h, State } from "@stencil/core";
import { toNextpageState } from "../globalState/globalState";
import { Router } from "../routerconfig/routerconfig";

@Component({
    tag: 'confirmed-roundtrip-booking',
    styleUrl: 'pages.css',
    shadow: true
})

export class ConfirmedRoundtripBooking {
    componentWillLoad() {
        toNextpageState.set('toNextpage', false);
    }

    @State() roundtripCBTD = JSON.parse(localStorage.getItem("roundtripCBTD"));

    nextpage() {
        Router.push('/page-roundtrip-cbtd');
        console.log(this.roundtripCBTD)
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
