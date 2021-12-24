import { Component, h, State } from "@stencil/core";
import {  href } from "stencil-router-v2";
import { toNextpageState } from "../globalState/globalState";
import { Router } from "../routerconfig/routerconfig";
import { handleErrors } from "../useFulSnippets/actions";



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
  };


  callConfirmBookingApi = async () => {
    this.loading = true;

    let ConfirmBooking: FormData = new FormData();
    ConfirmBooking.append('firstname', this.localState.firstName);
    ConfirmBooking.append('surname', this.localState?.surname);
    ConfirmBooking.append('email', this.localState?.emailAddress);
    
    ConfirmBooking.append('phonenumber', this.localState?.phoneNumber);
    ConfirmBooking.append('from', this.estimateState?.first_cost?.from);
    ConfirmBooking.append('date', this.localState?.pickupDate);
    ConfirmBooking.append('time', this.localState?.pickupTime);
    ConfirmBooking.append('estmin', this.estimateState?.first_cost?.est_min);
    ConfirmBooking.append('estmax', this.estimateState?.first_cost?.est_max); 
    ConfirmBooking.append('airid', this.localState?.arrivalAirport);
    
    ConfirmBooking.append('pickup_address', this.localState?.pickupAddress);
    ConfirmBooking.append('depature_airid', this.localState?.departureAirport);
    ConfirmBooking.append('pickup_area', this.localState?.pickupArea);
    ConfirmBooking.append('pickupaddress', this.localState?.pickupAddress);
    
    ConfirmBooking.append('dest_address', this.localState?.destinationAddress);
    ConfirmBooking.append('to', this.estimateState?.first_cost?.to);
    ConfirmBooking.append('estmin2', this.estimateState?.second_cost?.est_min);
    ConfirmBooking.append('estmax2', this.estimateState?.second_cost?.est_max);
    ConfirmBooking.append('estimated_arivaltime', this.localState?.arrivalTime);
    
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
        this.loading = false;
    }
  };
      
    
    render() {
        return (
            <div class='p-4 space-y-4'>
              <div>
                <modal-booking-details
                    date={this.localState?.pickupDate} //date
                    time={this.localState?.arrivalTime} //time
                    airport={ this.estimateState?.first_cost?.from}
                    destinationAddress={this.estimateState?.first_cost?.to}
                    estimatedPriceMax={this.estimateState?.first_cost?.est_max}
                    estimatedPriceMin={this.estimateState?.first_cost?.est_min}
                ></modal-booking-details>
              </div>
              <div>
                <modal-booking-details
                    returnproperties={true}
                    date={this.localState?.pickupDate} //date
                    time={this.localState?.pickupTime} //time
                    airport={ this.estimateState?.second_cost?.from}
                    destinationAddress={this.estimateState?.second_cost?.to}
                    estimatedPriceMax={this.estimateState?.second_cost?.est_max}
                    estimatedPriceMin={this.estimateState?.second_cost?.est_min}
                ></modal-booking-details>
              </div>
                
                
                

                <div>
                    {!this.loading ? (
                      <div>
                        <button 
                          onClick={this.callConfirmBookingApi.bind(this)} 
                          disabled={this.loading} 
                          type="button"  
                          class="text-center mt-10 w-full border-0 p-3 outline-none focus:outline-none customBookingDetails-btn">Continue Book
                        </button>
                        <a {...href('/page-pickuppoint-airport-destination')}>
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