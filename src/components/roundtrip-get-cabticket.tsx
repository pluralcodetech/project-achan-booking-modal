import { Component, getAssetPath, h, Prop } from "@stencil/core";
import convertDate from "./useFulSnippets/convertDate";
import convertTime from "./useFulSnippets/convertTime";
import toCurrency from "./useFulSnippets/toCurrency";

@Component({
    tag: 'roundtrip-get-cabticket',
    styleUrl: 'my-component.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class RoundTripGetcabticket {
    @Prop() carIcon = "car-icon.png"
    @Prop() callIcon = "call-icon.png"
    @Prop() whatappIcon = "whatapp.png"
        
  
    @Prop({ reflect: true, mutable: true}) passengername : string | number;
    @Prop({ reflect: true, mutable: true }) phonenumber: string | number;
    @Prop({ reflect: true, mutable: true }) pickupticketnum: string | number;

    @Prop({ reflect: true, mutable: true }) firstpickupdate: string | number;
    @Prop({ reflect: true, mutable: true }) firstpickuptime: string | number;
    
    @Prop({ reflect: true, mutable: true }) firstpickuparea: string | number;
    @Prop({ reflect: true, mutable: true }) firstpickudestination: string | number;

    @Prop({ reflect: true, mutable: true }) secondpickupdate: string | number;
    @Prop({ reflect: true, mutable: true }) secondpickuptime: string | number;
    @Prop({ reflect: true, mutable: true }) secondpickupticketnum: string | number;
    @Prop({ reflect: true, mutable: true }) secondpickuparea: string | number;
    @Prop({ reflect: true, mutable: true }) secondpickudestination: string | number;

    @Prop({ reflect: true, mutable: true }) thirdpickupdate: string | number;
    @Prop({ reflect: true, mutable: true }) thirdpickuptime: string | number;
    @Prop({ reflect: true, mutable: true }) thirdpickupticketnum: string | number;
    @Prop({ reflect: true, mutable: true }) thirdpickuparea: string | number;
    @Prop({ reflect: true, mutable: true }) thirdpickudestination: string | number;

    @Prop({ reflect: true, mutable: true }) fourthpickupdate: string | number;
    @Prop({ reflect: true, mutable: true }) fourthpickuptime: string | number;
    @Prop({ reflect: true, mutable: true }) fourthpickupticketnum: string | number;
    @Prop({ reflect: true, mutable: true }) fourthpickuparea: string | number;
    @Prop({ reflect: true, mutable: true }) fourthpickudestination: string | number;
    
    

    @Prop({ reflect: true, mutable: true}) phonenum : string | number;
    @Prop({ reflect: true, mutable: true }) whatapp: string | number;
    @Prop({ reflect: true, mutable: true}) estmin : string | number;
    @Prop({ reflect: true, mutable: true }) estmax: string | number;
    @Prop({ reflect: true, mutable: true}) estmax2 : string | number;
    @Prop({ reflect: true, mutable: true}) estmin2 : string | number;
    @Prop({ reflect: true, mutable: true}) estmax3 : string | number;
    @Prop({ reflect: true, mutable: true}) estmin3 : string | number;
    @Prop({ reflect: true, mutable: true}) estmax4 : string | number;
    @Prop({ reflect: true, mutable: true}) estmin4 : string | number;

    render() {
        return (
            <div class=" px-2 sm:px-16 py-7">
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
                                    <small>Pick up Ticket No:</small>
                                    <small>{this.pickupticketnum}</small>
                                </row-element>

                                {/* First */}
                                
                                <row-element>
                                    <small> First Pick up Date:</small>
                                    <small>{convertDate(this.firstpickupdate)}</small>
                                </row-element>
                                <row-element>
                                    <small>First Pick up Time:</small>
                                    <small>{convertTime(this.firstpickuptime)}</small>
                                </row-element>

                                
                                <row-element>
                                    <small class='flex-1'>First Pick up Area:</small>
                                    <div class='flex-1 justify-items-end'>
                                        <small>{this.firstpickuparea}</small>
                                    </div>
                                    
                                </row-element>
                                <row-element>
                                    <small class='flex-1'>First Pick up Destination:</small>
                                    <div class='flex-1 justify-items-end'>
                                        <small>{this.firstpickudestination}</small>
                                    </div>
                                </row-element>

                                {/* Second */}
                                <section class=" mt-4 pt-4 border-t-2 border-b-2 border-dashed">
                                    <row-element>
                                        <small> Second Pick up Date:</small>
                                        <small>{convertDate(this.secondpickupdate)}</small>
                                    </row-element>
                                    <row-element>
                                        <small>Second Pick up Time:</small>
                                        <small>{convertTime(this.secondpickuptime)}</small>
                                    </row-element>

                                    
                                    <row-element>
                                        <small class='flex-1'>Second Pick up Area:</small>
                                        <div class='flex-1 justify-items-end'>
                                            <small>{this.secondpickuparea}</small>
                                        </div>
                                    </row-element>
                                    <row-element>
                                        <small class='flex-1'>Second Pick up Destination:</small>
                                        <div class='flex-1 justify-items-end'>
                                            <small>{this.secondpickudestination}</small>
                                        </div>
                                    </row-element>
                                </section>
                                

                                {/* Third */}
                                <section class="mt-4 border-b-2 border-dashed">
                                    <row-element>
                                        <small> Third Pick up Date:</small>
                                        <small>{convertDate(this.thirdpickupdate)}</small>
                                    </row-element>
                                    <row-element>
                                        <small>Third Pick up Time:</small>
                                        <small>{convertTime(this.thirdpickuptime)}</small>
                                    </row-element>

                                    <row-element>
                                        <small class='flex-1'>Third Pick up Area:</small>
                                        <div class='flex-1 justify-items-end'>
                                            <small>{this.thirdpickuparea}</small>
                                        </div>
                                        
                                    </row-element>
                                    <row-element>
                                        <small class='flex-1'>Third Pick up Destination:</small>
                                        <div class='flex-1 justify-items-end'>
                                            <small>{this.thirdpickudestination}</small>
                                        </div>
                                    </row-element>
                                </section>


                                {/* Fourth */}
                                <section class="mt-4">
                                    <row-element>
                                        <small> Fourth Pick up Date:</small>
                                        <small>{convertDate(this.fourthpickupdate)}</small>
                                    </row-element>
                                    <row-element>
                                        <small>Fourth Pick up Time:</small>
                                        <small>{convertTime(this.fourthpickuptime)}</small>
                                    </row-element>

                                    <row-element>
                                        <small class='flex-1'>Fourth Pick up Area:</small>
                                        <div class='flex-1 justify-items-end'>
                                            <small>{this.fourthpickuparea}</small>
                                        </div>
                                        
                                    </row-element>
                                    <row-element>
                                        <small class='flex-1'>Fourth Pick up Destination:</small>
                                        <div class='flex-1 justify-items-end'>
                                            <small>{this.fourthpickudestination}</small>
                                        </div>
                                    </row-element>
                                </section>
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
                                        <small>First Pick up Trip Total Estimate:</small>
                                        <small class="font-bold">{toCurrency(this.estmin, "NGN")} - {toCurrency(this.estmax, "NGN")}</small>
                                    </row-element>
                                    <row-element>
                                        <small>Second Pick up Trip Total Estimate:</small>
                                        <small class="font-bold">{toCurrency(this.estmin2, "NGN")} - {toCurrency(this.estmax2, "NGN")}</small>
                                    </row-element>
                                    <row-element>
                                        <small>Third Pick up Trip Total Estimate:</small>
                                        <small class="font-bold">{toCurrency(this.estmin3, "NGN")} - {toCurrency(this.estmax3, "NGN")}</small>
                                    </row-element>
                                    <row-element>
                                        <small>Forth Pick up Trip Total Estimate:</small>
                                        <small class="font-bold">{toCurrency(this.estmin4, "NGN")} - {toCurrency(this.estmax4, "NGN")}</small>
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