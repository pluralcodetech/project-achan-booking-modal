import { Component, h, State } from "@stencil/core";
import { toNextpageState } from "../globalState/globalState";

@Component({
    tag: 'finaldest-cbtd',
    styleUrl: 'pages.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class FinalDestCBTD {

    componentWillLoad() {
        toNextpageState.set('toNextpage', false);
    }
    @State() finalDestinationCBTD = JSON.parse(localStorage.getItem("finalDestinationCBTD"));
    @State() estimateState = JSON.parse(localStorage.getItem("estimatedPrice"));
    render() {
        return (
            <div class="p-4">
                <get-cabticket
                    passengername={this.finalDestinationCBTD?.first_ticket?.passenger_name}
                    phonenumber = {this.finalDestinationCBTD?.first_ticket?.phone_number}
                    ticketnum = {this.finalDestinationCBTD?.first_ticket?.ticket_num}
                    date = {this.finalDestinationCBTD?.first_ticket?.date}
                    time = {this.finalDestinationCBTD?.first_ticket?.time}
                    from = {this.finalDestinationCBTD?.first_ticket?.from}
                    destination = {this.finalDestinationCBTD?.first_ticket?.destination}
                    phonenum = {this.finalDestinationCBTD?.first_ticket?.phone_num}
                    whatapp = {this.finalDestinationCBTD?.first_ticket?.whatapp}
                    estmin = {this.estimateState?.est_min}
                    estmax = {this.estimateState?.est_max}
                >
                    <div>
                        <a href={`http://www.codesandbox.com.ng/details/receipt.php?trip_id=${this.finalDestinationCBTD?.first_ticket?.trip_id}` }>
                            <button 
                                // onClick={this.openDriverDetails.bind(this)}  
                                type="button"  
                                class="text-center w-full border-0 p-3 outline-none focus:outline-none customBookingDetails-btn">
                                Ticket Details
                            </button>
                        </a>
                    </div>
                </get-cabticket>
            </div>
        )
    }
}