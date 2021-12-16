import { Component, h, State } from "@stencil/core";
import {  href } from "stencil-router-v2";
// import { href } from "stencil-router-v2";
import { toNextpageState } from "../globalState/globalState";
import { Router } from "../routerconfig/routerconfig";
import { handleErrors } from "../useFulSnippets/actions";
// import { handleErrors } from "../useFulSnippets/actions";



@Component({
    tag: 'ad-comfirm-booking',
    styleUrl: 'pages.css',
    shadow: true
})

export class ADConfirmBooking {

    @State() estimatePrice;

    @State() localState = JSON.parse(localStorage.getItem("airportDestination"));
    @State() estimateState = JSON.parse(localStorage.getItem("estimatedPrice"));
    @State() loading = false;

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
    ConfirmBooking.append('from', this.estimateState?.from);
    ConfirmBooking.append('date', this.localState?.pickupDate);
    ConfirmBooking.append('time', this.localState?.pickupTime);
    ConfirmBooking.append('estmin', this.estimateState?.est_min);
    ConfirmBooking.append('estmax', this.estimateState?.est_max); 
    ConfirmBooking.append('airid', this.localState?.arrivalAirport);
    
    ConfirmBooking.append('pickup_address', this.localState?.pickupAddress);
    ConfirmBooking.append('depature_airid', this.localState?.departureAirport);
    ConfirmBooking.append('pickup_area', this.localState?.pickupArea);
    ConfirmBooking.append('pickupaddress', this.localState?.pickupAddress);
    
    ConfirmBooking.append('dest_address', this.localState?.destinationAddress);
    ConfirmBooking.append('to', this.estimateState?.to);
    ConfirmBooking.append('estmin2', this.estimateState?.to);
    ConfirmBooking.append('estmax2', this.estimateState?.to);
    
    
    
        
    
    try {
        const response = await fetch(`https://watchoutachan.herokuapp.com/api/thirdform`,
          {
            method: 'post',
            body: ConfirmBooking,
          }
        )
      handleErrors(response);
      
        this.loading = false;
        let json = await response.json();
        localStorage.setItem("airportDestinationCBTD", JSON.stringify(json));
        Router.push('/page-confirmed-airportdest-booking');
        
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