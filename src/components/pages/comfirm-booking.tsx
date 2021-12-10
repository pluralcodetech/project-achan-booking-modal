import { Component, h } from "@stencil/core";

@Component({
    tag: 'comfirm-booking',
    styleUrl: 'pages.css',
    shadow: true
})

export class ConfirmBooking {
    render() {
        return (
            // <modal-booking-details></modal-booking-details>
            <modal-booking-details
                                    //   date={this.globalTrips?.date} //date
                                    //   time={this.globalTrips?.time} //time
                                    //   airport={ 'MM2'}
                                    //   destinationAddress={this.estimatePrice?.first_cost?.to || this.estimatePrice?.to}
                                    //   destination={this.globalTrips?.destination} //destination
                                    //   estimatedPriceMax={this.estimatePrice?.first_cost?.est_max || this.estimatePrice?.est_max}
                                    //   estimatedPriceMin={this.estimatePrice?.first_cost?.est_min || this.estimatePrice?.est_min}
                                    ></modal-booking-details>
        )
    }
}