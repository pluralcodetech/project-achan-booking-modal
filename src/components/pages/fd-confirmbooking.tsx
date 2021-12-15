import { Component, h, State } from "@stencil/core";
import {  href } from "stencil-router-v2";
// import { href } from "stencil-router-v2";
import { toNextpageState } from "../globalState/globalState";
import { Router } from "../routerconfig/routerconfig";
import { handleErrors } from "../useFulSnippets/actions";
// import { handleErrors } from "../useFulSnippets/actions";



@Component({
    tag: 'fd-comfirm-booking',
    styleUrl: 'pages.css',
    shadow: true
})

export class FDConfirmBooking {

    @State() estimatePrice;

    @State() localState = JSON.parse(localStorage.getItem("finalDestination"));
    @State() estimateState = JSON.parse(localStorage.getItem("estimatedPrice"));
    @State() loading = false;
    // @Prop() router = createRouter();
    

    componentWillLoad() { 
        toNextpageState.set('toNextpage', true);


    //    this.callEstimatedDataApi();

        console.log(this.localState)
        console.log(this.estimateState)

    };


    callConfirmBookingApi = async () => {
        

        console.log(Router);
        

    let ConfirmBooking: FormData = new FormData();
    ConfirmBooking.append('firstname', this.localState.firstName);
    ConfirmBooking.append('surname', this.localState?.surname);
    ConfirmBooking.append('email', this.localState?.emailAddress);
    ConfirmBooking.append('phonenumber', this.localState?.phoneNumber);
    ConfirmBooking.append('airid', this.localState?.arrivalAirport);
    ConfirmBooking.append('from', this.estimateState?.from);
    ConfirmBooking.append('to', this.estimateState?.to);
    ConfirmBooking.append('date', this.localState?.pickupDate);
    ConfirmBooking.append('time', this.localState?.pickupTime);
    ConfirmBooking.append('dest_area', this.localState?.destinationArea);
    ConfirmBooking.append('estmax', this.estimateState?.est_max);
    ConfirmBooking.append('estmin', this.estimateState?.est_min);
        
    
    try {
        const response = await fetch(`https://watchoutachan.herokuapp.com/api/secondbookingform`,
          {
            method: 'post',
            body: ConfirmBooking,
          }
        )
      handleErrors(response);
      
        this.loading = false;
        let json = await response.json();
        localStorage.setItem("finalDestinationCBTD", JSON.stringify(json));
        Router.push('/page-confirmed-departure-airport');
        
    } catch (error) {
        console.log(error);
        // this.cabTicketDetails = null;
        this.loading = false;
    }
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

                <div>
                    {!this.loading ? (
                                <div>
                                  <button 
                                    onClick={this.callConfirmBookingApi.bind(this)} 
                                    disabled={this.loading} 
                                    type="button"  
                                    class="text-center mt-10 w-full border-0 p-3 outline-none focus:outline-none customBookingDetails-btn">Continue Book
                                  </button>
                                  <a {...href('/page-arrival-to-final-destination')}>
                                      <button 
                                        // onClick={this.previousChange.bind(this)}  
                                        type="button" 
                                        class="text-center mt-10 w-full border p-3 outline-none hover:border-0 focus:outline-none customBookingDetails-btn2">Cancel
                                    </button>
                                  </a>
                                  
                                </div>
                              ) : (
                                <div class=" flex justify-center w-full">
                                  <div class="flex flex-row rounded-xl space-x-2 shadow-2xl p-4 items-center w-auto">
                                      <div class=" animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-400"></div>
                                      <small class="text-midnightblue">Please wait...</small>
                                  </div>
                                </div>
                              )}
                </div>
            </div>
            // <modal-booking-details></modal-booking-details>
            
        )
    }
}