import { Component, h, State } from "@stencil/core";
import { toNextpageState } from "../globalState/globalState";
import { handleErrors } from "../useFulSnippets/actions";

@Component({
    tag: 'comfirm-booking',
    styleUrl: 'pages.css',
    shadow: true
})

export class ConfirmBooking {

    @State() estimatePrice;

    @State() localState = JSON.parse(localStorage.getItem("departureAirport"));
    @State() estimateState = JSON.parse(localStorage.getItem("estimatedPrice"));
    
    

    componentWillLoad() { 
        toNextpageState.set('toNextpage', true);

    //    this.callEstimatedDataApi();

        console.log(this.localState)
        console.log(this.estimateState)

    };

      
    
    render() {
        return (
            <div class='p-4'>
                <modal-booking-details
                    date={this.localState?.pickupDate} //date
                    time={this.localState?.pickupTime} //time
                    airport={ this.estimateState?.from}
                    destinationAddress={this.estimateState?.to}
                    //   destination={this.globalTrips?.destination} //destination
                    estimatedPriceMax={this.estimateState?.est_max}
                    estimatedPriceMin={this.estimateState?.est_min}
                ></modal-booking-details>
            </div>
            // <modal-booking-details></modal-booking-details>
            
        )
    }
}