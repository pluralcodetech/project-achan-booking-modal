import { Component, h, State } from "@stencil/core";
import { toNextpageState } from "../globalState/globalState";

@Component({
    tag: 'roundtrip-cbtd',
    styleUrl: 'pages.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class RoundTripCBTD {

    componentWillLoad() {
        toNextpageState.set('toNextpage', false);
    }
    @State() airportDestinationCBTD = JSON.parse(localStorage.getItem("roundtripCBTD"));
    @State() estimateState = JSON.parse(localStorage.getItem("estimatedPrice"));
    render() {
        return (
            <div class="p-4">
                <h1>roundtrip-cbtd</h1>
                {/* <ad-get-cabticket
                    passengername={this.airportDestinationCBTD?.first_ticket?.passenger_name}
                    phonenumber={this.airportDestinationCBTD?.first_ticket?.phone_number}
                    date = {this.airportDestinationCBTD?.first_ticket?.date}
                    time = {this.airportDestinationCBTD?.first_ticket?.time}
                    pickupticketnum={this.airportDestinationCBTD?.first_ticket?.ticket_num}
                    arrivalticketnum = {this.airportDestinationCBTD?.second_ticket?.ticket_num}
                    pickuparea = {this.airportDestinationCBTD?.first_ticket?.from}
                    departureairport = {this.airportDestinationCBTD?.first_ticket?.destination}
                    arrivalairport = {this.airportDestinationCBTD?.second_ticket?.from}
                    arrivaldestination = {this.airportDestinationCBTD?.second_ticket?.destination}
                    phonenum = {this.airportDestinationCBTD?.first_ticket?.phone_num}
                    whatapp = {this.airportDestinationCBTD?.first_ticket?.whatapp}
                    estmin = {this.estimateState?.first_cost?.est_min}
                    estmax = {this.estimateState?.first_cost?.est_max}
                    estmax2 = {this.estimateState?.second_cost?.est_max}
                    estmin2 = {this.estimateState?.second_cost?.est_min}
                >
                    <div class="mt-4 space-y-4">
                        <div>
                            <a href={`http://www.codesandbox.com.ng/details/receipt.php?trip_id=${this.airportDestinationCBTD?.first_ticket?.trip_id}` }>
                                <button 
                                    // onClick={this.openDriverDetails.bind(this)}  
                                    type="button"  
                                    class="text-center w-full border-0 p-3 outline-none focus:outline-none customBookingDetails-btn">
                                    Pick up Trip Details
                                </button>
                            </a>
                        </div>
                        <div>
                            <a href={`http://www.codesandbox.com.ng/details/receipt.php?trip_id=${this.airportDestinationCBTD?.second_ticket?.trip_id}` }>
                                <button 
                                    // onClick={this.openDriverDetails.bind(this)}  
                                    type="button"  
                                    class="text-center w-full border-0 p-3 outline-none focus:outline-none customBookingDetails-btn">
                                        Arrival Trip Details
                                </button>
                            </a>
                        </div>
                        

                        
                    </div>
                </ad-get-cabticket> */}
            </div>
        )
    }
}