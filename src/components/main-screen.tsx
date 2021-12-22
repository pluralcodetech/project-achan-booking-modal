import { Component, h, } from "@stencil/core";

@Component({
    tag: "main-screen",
    styleUrl: 'my-component.css',
    shadow: true,
    assetsDirs: ['assets'],
})
    
    

export class MainScreen { 

    render() {
        return (
            <div class="pt-14 pb-10">
                <title-component>
                    <h1 class="text-2xl custom-text-color">Book Our Aiport Taxi</h1>
                </title-component>

                <main class='px-2 sm:px-0 mt-20 space-y-6'>
                    <div>
                        <route-card
                            pathname="/page-pickup-point"
                            // pathname="/page-comfirm-booking"
                            places='Pick up Point - Departure Airport'
                        ></route-card>
                    </div>
                    <div>
                        <route-card
                            pathname="/page-arrival-to-final-destination"
                            places="Arrival Airport - Final Destination"
                        ></route-card>
                    </div>
                    <div>
                        <route-card
                            pathname="/page-pickuppoint-airport-destination"
                            places='Pick Up point - Airports - Destination'
                        ></route-card>
                    </div>
                    <div>
                        <route-card
                            pathname="/page-roundtrip-pickup"
                            places='Round Trip Pick ups'
                        ></route-card>
                    </div>

                </main>

                {/* <modal-booking-details></modal-booking-details> */}
            </div>
        )
    }
}