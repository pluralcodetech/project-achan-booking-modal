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
    @State() roundtripCBTD = JSON.parse(localStorage.getItem("roundtripCBTD"));
    @State() estimateState = JSON.parse(localStorage.getItem("estimatedPrice"));
    render() {
        return (
            <div class="py-4 px-2">
                <roundtrip-get-cabticket
                    passengername={this.roundtripCBTD?.first_ticket?.passenger_name}
                    phonenumber={this.roundtripCBTD?.first_ticket?.phone_number}
                    pickupticketnum={this.roundtripCBTD?.first_ticket?.ticket_num}
                    
                    firstpickupdate={this.roundtripCBTD?.first_ticket?.date}
                    firstpickuptime={this.roundtripCBTD?.first_ticket?.time}
                    firstpickuparea = {this.roundtripCBTD?.first_ticket?.from}
                    firstpickudestination={this.roundtripCBTD?.first_ticket?.destination}
                    
                    secondpickupdate={this.roundtripCBTD?.second_ticket?.date}
                    secondpickuptime={this.roundtripCBTD?.second_ticket?.time}
                    secondpickuparea={this.roundtripCBTD?.second_ticket?.from}
                    secondpickudestination={this.roundtripCBTD?.second_ticket?.destination}
                    
                    thirdpickupdate={this.roundtripCBTD?.third_ticket?.date}
                    thirdpickuptime={this.roundtripCBTD?.third_ticket?.time}
                    thirdpickuparea={this.roundtripCBTD?.third_ticket?.from}
                    thirdpickudestination={this.roundtripCBTD?.third_ticket?.destination}
                    
                    fourthpickupdate={this.roundtripCBTD?.forth_ticket?.date}
                    fourthpickuptime={this.roundtripCBTD?.forth_ticket?.time}
                    fourthpickuparea = {this.roundtripCBTD?.forth_ticket?.from}
                    fourthpickudestination={this.roundtripCBTD?.forth_ticket?.destination}

                    phonenum = {this.roundtripCBTD?.first_ticket?.phone_num}
                    whatapp = {this.roundtripCBTD?.first_ticket?.whatapp}
                    estmin = {this.estimateState?.first_cost?.est_min}
                    estmax = {this.estimateState?.first_cost?.est_max}
                    estmax2 = {this.estimateState?.second_cost?.est_max}
                    estmin2 = {this.estimateState?.second_cost?.est_min}
                    estmax3 = {this.estimateState?.third_cost?.est_max}
                    estmin3 = {this.estimateState?.third_cost?.est_min}
                    estmax4 = {this.estimateState?.fourth_cost?.est_max}
                    estmin4 = {this.estimateState?.fourth_cost?.est_min}
                >
                    <div class="mt-4 space-y-4">
                        <div>
                            <a href={`http://www.codesandbox.com.ng/details/receipt.php?trip_id=${this.roundtripCBTD?.first_ticket?.trip_id}` }>
                                <button 
                                    type="button"  
                                    class="text-center w-full border-0 p-3 outline-none focus:outline-none customBookingDetails-btn">
                                    First Trip Details
                                </button>
                            </a>
                        </div>
                        <div>
                            <a href={`http://www.codesandbox.com.ng/details/receipt.php?trip_id=${this.roundtripCBTD?.second_ticket?.trip_id}` }>
                                <button 
                                    type="button"  
                                    class="text-center w-full border-0 p-3 outline-none focus:outline-none customBookingDetails-btn">
                                        Second Trip Details
                                </button>
                            </a>
                        </div>
                        <div>
                            <a href={`http://www.codesandbox.com.ng/details/receipt.php?trip_id=${this.roundtripCBTD?.third_ticket?.trip_id}` }>
                                <button 
                                    type="button"  
                                    class="text-center w-full border-0 p-3 outline-none focus:outline-none customBookingDetails-btn">
                                        Third Trip Details
                                </button>
                            </a>
                        </div>
                        <div>
                            <a href={`http://www.codesandbox.com.ng/details/receipt.php?trip_id=${this.roundtripCBTD?.forth_ticket?.trip_id}` }>
                                <button 
                                    type="button"  
                                    class="text-center w-full border-0 p-3 outline-none focus:outline-none customBookingDetails-btn">
                                        Fourth Trip Details
                                </button>
                            </a>
                        </div>
                        

                        
                    </div>
                </roundtrip-get-cabticket>
            </div>
        )
    }
}