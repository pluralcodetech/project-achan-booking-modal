

import { Component, getAssetPath, h, Prop } from "@stencil/core";
import convertDate from "./useFulSnippets/convertDate";
import convertTime from "./useFulSnippets/convertTime";
import toCurrency from "./useFulSnippets/toCurrency";

@Component({
    tag: 'ad-get-cabticket',
    styleUrl: 'my-component.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class AirportDestinationGetcabticket {
    @Prop() carIcon = "car-icon.png"
    @Prop() callIcon = "call-icon.png"
    @Prop() whatappIcon = "whatapp.png"
        
  
    @Prop({ reflect: true, mutable: true}) passengername : string | number;
    @Prop({ reflect: true, mutable: true}) phonenumber: string | number;
    @Prop({ reflect: true, mutable: true}) date : string | number;
    @Prop({ reflect: true, mutable: true }) time: string | number;
    @Prop({ reflect: true, mutable: true }) pickupticketnum: string | number;
    @Prop({ reflect: true, mutable: true}) arrivalticketnum : string | number;
    @Prop({ reflect: true, mutable: true}) pickuparea : string | number;
    @Prop({ reflect: true, mutable: true }) departureairport: string | number;
    @Prop({ reflect: true, mutable: true }) arrivalairport: string | number;
    @Prop({ reflect: true, mutable: true}) arrivaldestination : string | number;
    @Prop({ reflect: true, mutable: true}) phonenum : string | number;
    @Prop({ reflect: true, mutable: true }) whatapp: string | number;
    @Prop({ reflect: true, mutable: true}) estmin : string | number;
    @Prop({ reflect: true, mutable: true }) estmax: string | number;
    @Prop({ reflect: true, mutable: true}) estmax2 : string | number;
    @Prop({ reflect: true, mutable: true}) estmin2 : string | number;

    render() {
        return (
            <div class=" px-4 sm:px-16 py-7">
                <div class="shadow-lg pb-10 w-full rounded-xl bg-white">
                    <header class='w-full p-4 py-6 rounded-t-xl cabTicket-header'>
                        <div class="flex w-full items-center  justify-center">
                            <img  
                                class="mr-6 w-6" 
                                src={getAssetPath(`../assets/${this.carIcon}`)} 
                                alt="car-icon"
                            />
                            <h4 class="text-xl font-semibold">Cab Ticket</h4>
                        </div>
                    </header>

                    <main class="w-full px-6">
                        <section class="sm:px-6 pt-12 pb-6 border-b-2 border-dashed">
                            <h1 class="text-xl font-semibold cabTicket-m-s-h1">Booking Details</h1>

                            <div class="mt-10">
                                <row-element>
                                    <small>Name:</small>
                                    <small>{this.passengername}</small>
                                </row-element>
                                <row-element>
                                    <small>phone Number:</small>
                                    <small>{this.phonenumber}</small>
                                </row-element>
                                
                                <row-element>
                                    <small>Date:</small>
                                    <small>{convertDate(this.date)}</small>
                                </row-element>
                                <row-element>
                                    <small>Time:</small>
                                    <small>{convertTime(this.time)}</small>
                                </row-element>

                                <row-element>
                                    <small>Pick up Ticket No:</small>
                                    <small>{this.pickupticketnum}</small>
                                </row-element>
                                <row-element>
                                    <small>Arrival Ticket No:</small>
                                    <small>{this.arrivalticketnum}</small>
                                </row-element>
                                <row-element>
                                    <small class='flex-1'>Pick up Area:</small>
                                    <div class='flex-1 justify-items-end'>
                                    <small class='break-all'>{this.pickuparea}</small>
                                    </div>
                                </row-element>
                                <row-element>
                                    <small class='flex-1'>Departure Airport:</small>
                                    <div class='flex-1 justify-items-end'>
                                    <small class='break-all'>{this.departureairport}</small>
                                    </div>
                                </row-element>
                                <row-element>
                                    <small class='flex-1'>Arrival Airport:</small>
                                    <div class='flex-1 justify-items-end'>
                                    <small class='break-all'>{this.arrivalairport}</small>
                                    </div>
                                </row-element>
                                <row-element>
                                    <small class='flex-1'>Arrival Destination:</small>
                                    <div class='flex-1 justify-items-end'>
                                    <small class='break-all'>{this.arrivaldestination}</small>
                                    </div>
                                </row-element>
                            </div>
                        </section>

                        <section class="sm:px-6 py-10 border-b-2 border-dashed">
                            <h1 class="text-xl font-semibold cabTicket-m-s-h1 text-start">Achan Customer Service</h1>
                            <div class="mt-10 space-y-8">
                                <div class="flex">
                                    <img  
                                    class="mr-6 " 
                                    src={getAssetPath(`../assets/${this.callIcon}`)} 
                                    alt="car-icon"
                                    />
                                    <a href={`tel:${this.phonenum}` }>
                                    <h4 class="text-sm text-gray-400 font-semibold">{this.phonenum}</h4>
                                    </a>
                                    
                                </div>
                                <div class="flex">
                                    <img  
                                    class="mr-6" 
                                    src={getAssetPath(`../assets/${this.whatappIcon}`)} 
                                    alt="car-icon"
                                    />
                                    <a href={`https://wa.me/${this.whatapp}` }>
                                    <h4 class="text-sm text-gray-400 font-semibold">{this.whatapp}</h4>
                                    </a>
                                </div>
                            </div>
                        </section>

                        <div class="space-y-4">
                            <slot/>
                        </div>

                        <section class="sm:px-6 py-10 ">
                            <h1 class="text-xl font-semibold cabTicket-m-s-h1">Estimated cost</h1>
                            <div class="mt-10 space-y-8">
                                <div>
                                    <row-element>
                                        <small>Pick up Trip Total Estimate:</small>
                                        <small class="font-bold">{toCurrency(this.estmin, "NGN")} - {toCurrency(this.estmax, "NGN")}</small>
                                    </row-element>
                                    <row-element>
                                        <small>Arrival Trip Total Estimate:</small>
                                        <small class="font-bold">{toCurrency(this.estmin2, "NGN")} - {toCurrency(this.estmax2, "NGN")}</small>
                                    </row-element>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        )
    }
}