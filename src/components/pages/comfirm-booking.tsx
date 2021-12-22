import { Component, h, State } from "@stencil/core";
import {  href } from "stencil-router-v2";
import { toNextpageState } from "../globalState/globalState";
import { Router } from "../routerconfig/routerconfig";
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
    @State() loading = false;

    componentWillLoad() { 
        toNextpageState.set('toNextpage', true);
        console.log(this.localState)
        console.log(this.estimateState)

    };


    callConfirmBookingApi = async () => {
        

      // console.log(Router);

      let ConfirmBooking: FormData = new FormData();
      ConfirmBooking.append('firstname', this.localState.firstName);
      ConfirmBooking.append('surname', this.localState?.surname);
      ConfirmBooking.append('email', this.localState?.emailAddress);
      ConfirmBooking.append('phonenumber', this.localState?.phoneNumber);
      ConfirmBooking.append('airid', this.localState?.airport);
      ConfirmBooking.append('from', this.localState?.pickupAdress);
      ConfirmBooking.append('date', this.localState?.pickupDate);
      ConfirmBooking.append('time', this.localState?.pickupTime);
      ConfirmBooking.append('pickup_area', this.localState?.pickupArea);
      ConfirmBooking.append('estmax', this.estimateState?.est_max);
      ConfirmBooking.append('estmin', this.estimateState?.est_min);
        
    
    try {
        const response = await fetch(`https://watchoutachan.herokuapp.com/api/firstform`,
          {
            method: 'post',
            body: ConfirmBooking,
          }
        )
      handleErrors(response);
      
        this.loading = false;
        let json = await response.json();
        localStorage.setItem("departureAirportCBTD", JSON.stringify(json));
        Router.push('/page-confirmed-departure-airport');
        
    } catch (error) {
        console.log(error);
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
                      <a {...href('/page-pickup-point')}>
                          <button 
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
            
        )
    }
}