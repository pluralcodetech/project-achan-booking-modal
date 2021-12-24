import { Component, Prop, h, getAssetPath} from "@stencil/core";
import convertDate from "./useFulSnippets/convertDate";
import convertTime from "./useFulSnippets/convertTime";
import toCurrency from "./useFulSnippets/toCurrency";
// import convertDate from "./useFulSnippets/convertDate";
// import convertTime from "./useFulSnippets/convertTime";
// import toCurrency from "./useFulSnippets/toCurrency";

@Component({
    tag : 'modal-booking-details',
    shadow: true,
    styleUrl: 'my-component.css',
    assetsDirs: ['assets'],
})

export class ModalBookingDetails {
    @Prop() dottedLines = 'dotted-lines.png';
    @Prop({ reflect: true, mutable: true}) returnproperties : boolean = false;
    @Prop({ reflect: true, mutable: true}) date : string | number;
    @Prop({ reflect: true, mutable: true}) time : string | number;
    @Prop({ reflect: true, mutable: true}) airport : string;
  
    @Prop({ reflect: true, mutable: true}) destination : string;
    @Prop({ reflect: true, mutable: true}) destinationAddress : string;
    @Prop({ reflect: true, mutable: true}) estimatedPriceMax : string | number;
    @Prop({ reflect: true, mutable: true}) estimatedPriceMin : string | number;


    render() {
        return (
            <figure class="rounded-xl px-4 py-6 sm:p-10 h-full lg:h-80 2xl:h-80 space-y-2 sm+:space-y-4 md:space-y-8 w-full customBookingDetails-Card">
       
                <figcaption class="flex w-full">
                    <div>
                        <img class="mr-4 h-full sm:h-64" src={getAssetPath(`../assets/${this.dottedLines}`)} alt="previous-icon"/>
                    </div>
                    <div class="text-white w-full">
                        <div class="flex flex-col space-y-2 sm:space-y-1">
                            {
                                !this.returnproperties ? (
                                    <small class="text-sm font-semibold">from</small>
                                ) : (
                                        <small class="text-sm font-semibold">to</small>
                                )
                            }
                            
                            <small class="text-xs">{convertDate(this.date)}</small>
                            <small class="text-lg">{convertTime(this.time)}</small>
                            <small class="text-sm">{ this.airport}</small>
                            
                        </div>
                        <div class='flex justify-between mt-16 sm:mt-14 space-x-4 sm:space-x-0 items-end'>
                            <div class="flex flex-col  space-y-2 sm:space-y-1 ">
                                {
                                    !this.returnproperties ? (
                                        <small class="text-sm font-semibold">to</small>
                                    ) : (
                                        <small class="text-sm font-semibold">from</small>
                                    )
                                }
                                <small class="text-xs">{convertDate(this.date)}</small>
                                <small class="text-lg"> {convertTime(this.time)}</small>
                                <small class="text-lg">{this.destinationAddress} </small>
                            </div>
                            <div class="flex flex-col  space-y-1 ">
                                <label class="text-xs sm:text-sm font-semibold">Estimated Price</label>
                                <small class="text-xs sm:text-sm">{toCurrency(this.estimatedPriceMin, "NGN" )} - {toCurrency(this.estimatedPriceMax, "NGN" )}</small>
                            </div>
                        </div>
                    </div>
                   
                </figcaption>

                
                
            </figure>
        )
        
    }
}