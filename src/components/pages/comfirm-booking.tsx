import { Component, h, State } from "@stencil/core";
import {  href } from "stencil-router-v2";
// import { href } from "stencil-router-v2";
import { toNextpageState } from "../globalState/globalState";
import { Router } from "../routerconfig/routerconfig";
// import { handleErrors } from "../useFulSnippets/actions";



@Component({
    tag: 'comfirm-booking',
    styleUrl: 'pages.css',
    shadow: true
})

export class ConfirmBooking {

    // const activePath = Router.activeRoute?.path;

    @State() estimatePrice;

    @State() localState = JSON.parse(localStorage.getItem("departureAirport"));
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
        Router.push('/home');

        console.log(Router);
        

        // Router.push(() => {
        //     history.pushState(null, null, '/page-comfirm-booking');
        // }) 

    
        

    // let ConfirmBooking: FormData = new FormData();
    // ConfirmBooking.append('firstname', this.globalTrips.firstName);
    // ConfirmBooking.append('surname', this.globalTrips.surname);
    // ConfirmBooking.append('email', this.globalTrips.emailAddress);
    // ConfirmBooking.append('phonenumber', this.globalTrips.phoneNumber);
    // ConfirmBooking.append('airid', this.globalTrips.from);
    // if (this.estimatePrice?.first_cost) {
    //   ConfirmBooking.append('from', this.estimatePrice?.first_cost?.from);
    //   ConfirmBooking.append('estmin', this.estimatePrice?.first_cost?.est_min);
    //   ConfirmBooking.append('estmax', this.estimatePrice?.first_cost?.est_max);
    // } else {
    //   ConfirmBooking.append('from', this.estimatePrice?.from);
    //   ConfirmBooking.append('estmin', this.estimatePrice?.est_min);
    //   ConfirmBooking.append('estmax', this.estimatePrice?.est_max);
    // }

    // ConfirmBooking.append('to', this.globalTrips.destination);
    // ConfirmBooking.append('date', this.globalTrips.date);
    // ConfirmBooking.append('time', this.globalTrips.time);
   
    // if (this.globalTrips?.returnDate) {
    //    ConfirmBooking.append('returndate', this.globalTrips.returnDate);
    // }
    // if (this.globalTrips?.returnTime) {
    //   ConfirmBooking.append('returntime', this.globalTrips.returnTime);
    // }
   
    
    // ConfirmBooking.append('dest_address', this.globalTrips.destinationAddress);
    

    // try {
    //     const response = await fetch(`https://watchoutachan.herokuapp.com/api/booktrip`,
    //       {
    //         method: 'post',
    //         body: ConfirmBooking,
    //       }
    //     )
    //   handleErrors(response);
      
    //     this.loading = false;
    //     let json = await response.json();
    //     this.cabTicketDetails = json;
        
    // } catch (error) {
    //     console.log(error);
    //     this.cabTicketDetails = null;
    //     this.loading = false;
    // }
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
                                  <a {...href('/page-pickup-point')}>
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