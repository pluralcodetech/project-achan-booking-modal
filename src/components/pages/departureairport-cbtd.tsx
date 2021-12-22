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
    @State() departureAirportCBTD = JSON.parse(localStorage.getItem("departureAirportCBTD"));
    @State() estimateState = JSON.parse(localStorage.getItem("estimatedPrice"));
    render() {
        return (
            <div class="py-4 px-2">
                <get-cabticket
                    totalestimate={true}
                    passengername={this.departureAirportCBTD?.first_ticket?.passenger_name}
                    phonenumber = {this.departureAirportCBTD?.first_ticket?.phone_number}
                    ticketnum = {this.departureAirportCBTD?.first_ticket?.ticket_num}
                    date = {this.departureAirportCBTD?.first_ticket?.date}
                    time = {this.departureAirportCBTD?.first_ticket?.time}
                    from = {this.departureAirportCBTD?.first_ticket?.from}
                    destination = {this.departureAirportCBTD?.first_ticket?.destination}
                    phonenum = {this.departureAirportCBTD?.first_ticket?.phone_num}
                    whatapp = {this.departureAirportCBTD?.first_ticket?.whatapp}
                    estmin = {this.estimateState?.est_min}
                    estmax = {this.estimateState?.est_max}
                >
                    <div>
                        <a href={`http://www.codesandbox.com.ng/details/receipt.php?trip_id=${this.departureAirportCBTD?.first_ticket?.trip_id}` }>
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