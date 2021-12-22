import { Component, h, State } from "@stencil/core";
import { toNextpageState } from "../globalState/globalState";
import { Router } from "../routerconfig/routerconfig";
import { handleErrors } from "../useFulSnippets/actions";

@Component({
    tag: 'confirmed-departure-airport',
    styleUrl: 'pages.css',
    shadow: true
})

export class ConfirmedDepartureAirport {
    componentWillLoad() {
        toNextpageState.set('toNextpage', false);
    }

    @State() departureAirportCBTD = JSON.parse(localStorage.getItem("departureAirportCBTD"));
    @State() localState = JSON.parse(localStorage.getItem("departureAirport"));
    @State() loading = false;

    sendTicketApi = async () => { 
        let sendTicket: FormData = new FormData(); 

        const link_1 = `http://www.codesandbox.com.ng/details/receipt.php?trip_id=${this.departureAirportCBTD?.first_ticket?.trip_id}`;

        sendTicket.append('link1', link_1);
        sendTicket.append('name', this.departureAirportCBTD?.first_ticket?.passenger_name);
        sendTicket.append('email', this.localState?.emailAddress);
    
    
        try {
            const response = await fetch(`https://watchoutachan.herokuapp.com/api/sendticket`,
                {
                    method: 'post',
                    body: sendTicket,
                }
            );
            handleErrors(response);
            this.loading = false;
            let json = await response.json();
            console.log(json);
            Router.push('/page-departure-airport-cbtd');
            
        } catch (error) {
            console.log(error);
            this.loading = false;
        }
    
    }

    nextpage() {
        this.loading = true;

        this.sendTicketApi();
        console.log(this.departureAirportCBTD)
    }
    render() {
        return (
            <div class="px-4 py-56">
                <booking-confirmed></booking-confirmed>

                {
                    !this.loading ? (
                        <button 
                            onClick={this.nextpage.bind(this)}  
                            type="button"  
                            class="text-center mt-10 w-full border-0 p-3 outline-none focus:outline-none customBookingDetails-btn"
                        >Preview Ticket</button>
                    ) : (
                        <div class=" flex justify-center w-full">
                            <div class="flex flex-row rounded-xl space-x-2 shadow-2xl p-4 items-center w-auto">
                                <div class=" animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-400"></div>
                                <small class="text-midnightblue">Please wait...</small>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
