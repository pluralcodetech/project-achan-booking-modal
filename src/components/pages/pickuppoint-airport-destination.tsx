import { Component, getAssetPath, h, Method, Prop, State } from "@stencil/core";
import { href } from "stencil-router-v2";
import { branchId, toNextpageState } from "../globalState/globalState";
import { handleErrors } from "../useFulSnippets/actions";



interface  formStateType { 
  firstName: string,
  surname: string,
  phoneNumber: string,
  emailAddress: string,
  pickupAddress: string,
  departureAirport: string,
  pickupArea: string,
  arrivalAirport: string,
  destinationAddress: string,
  destinationArea: string,
  pickupDate: string,
  pickupTime: string,
  arrivalTime: string,
  
}

@Component({
    tag: "page-pickuppoint-airport-destination",
    styleUrl: 'pages.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class PagePickuppointAirportDestination { 
    
    componentWillLoad() { 
        toNextpageState.set('toNextpage', true);
        this.airportDataApi(branchId.get('id'));
    };

    @Prop() logoIcon = 'logo.png';

    @State() formState : formStateType = {
        firstName: "",
        surname: "",
        phoneNumber: "",
        emailAddress: "",
        pickupAddress: "",
        departureAirport: "",
        pickupArea: "",
        arrivalAirport: "",
        destinationAddress: "",
        destinationArea: "",
        pickupDate: "",
        pickupTime: "",
        arrivalTime: "",
        
    };

    @State() firstNameErrMsg;
    @State() surnameErrMsg;
    @State() phoneNumberErrMsg;
    @State() emailAddressErrMsg;
    @State() pickupAddressErrMsg;
    @State() departureAirportErrMsg;
    @State() pickupAreaErrMsg;
    @State() arrivalAirportErrMsg;
    @State() destinationAddressErrMsg;
    @State() destinationAreaErrMsg;
    @State() pickupDateErrMsg;
    @State() pickupTimeErrMsg;
    @State() arrivalTimeErrMsg;

    @State() googleApiLocation;
    @State() storeGoogleApiLocation;
    @State() storeAirportApiData;
    @State() destinationState: any;

    @State() valid = false;

    @Method()
    async setValid() {
        
         this.valid = true;
    }

    

    handleInputChange(event) {
        const value = event.target.value;
        this.formState[event.target.name] = value;
        console.log(this.formState)
    };

    // handlefinalDest(event) {
    //     this.googleApiLocation = event.target.value;
    //     this.formState.finalDest = event.target.value;

    //     this.callgoogleApiData();
    // };

    handleDestination(event) {
        const value = event.target.value;
        this.googleApiLocation = value ;

        this.formState[event.target.name] = value;
        // this.formState.pickupAddress = event.target.value;

        this.callgoogleApiData();
    };

    handleSecondSelect(event) {
        const value = event.target.value;
        this.formState[event.target.name] = value;
        console.log(this.formState)

        this.callDestinationDataApi()
    }

    callDestinationDataApi = async () => {
    
        let destiData: FormData = new FormData();
        destiData.append('branchid', this.formState?.departureAirport || this.formState?.arrivalAirport);


        const response = await fetch(`https://watchoutachan.herokuapp.com/api/destinationarea`,
        {
            method: 'post',
            body: destiData
        }
        );
        handleErrors(response);

        let json = await response.json();
        this.destinationState = json;
    };
    
    airportDataApi = async (id: any) => {
    
        const response = await fetch(`https://watchoutachan.herokuapp.com/api/airline_branch/${id}`, {
        method: 'post',
        });
        handleErrors(response);

        let json = await response.json();
        this.storeAirportApiData = json;
    };

    callgoogleApiData = async () => {
    
        let googleData: FormData = new FormData();
        googleData.append('area', this.googleApiLocation);


        const response = await fetch(`https://watchoutachan.herokuapp.com/api/google/locations`,
        {
            method: 'post',
            body: googleData
        }
        );
        handleErrors(response);

        let json = await response.json();
        this.storeGoogleApiLocation = json;
    };
    

    onBookChange() {

      if (this.formState?.firstName?.trim() === '') {
        this.firstNameErrMsg = 'First Name is required';
      }
      if (this.formState?.surname?.trim() === '') {
        this.surnameErrMsg = 'Surname is required';
      }
      if (this.formState?.phoneNumber?.trim() === '') {
        this.phoneNumberErrMsg = 'Phone Number is required';
      }
      if (this.formState?.emailAddress?.trim() === '') {
        this.emailAddressErrMsg = 'Email Address is required';
      }
      if (this.formState?.pickupAddress?.trim() === '') {
        this.pickupAddressErrMsg = 'Pick up Address is required';
      }
      if (this.formState?.departureAirport?.trim() === '') {
        this.pickupAreaErrMsg = 'Pick up Area is required';
      }
      if (this.formState?.pickupArea?.trim() === '') {
        this.departureAirportErrMsg = 'Departure Airport is required';
      }
      if (this.formState?.arrivalAirport?.trim() === '') {
        this.arrivalAirportErrMsg = 'Arrival Airport is required';
      }
      if (this.formState?.destinationArea?.trim() === '') {
        this.destinationAreaErrMsg = 'Destination Area is required';
      }
      if (this.formState?.destinationAddress?.trim() === '') {
        this.destinationAddressErrMsg = 'Destination Address is required';
      }
      if (this.formState?.pickupDate?.trim() === '') {
        this.pickupDateErrMsg = 'Pick up Date is required';
      }
      if (this.formState?.pickupTime?.trim() === '') {
        this.pickupTimeErrMsg = 'Pick up Time is required';
      }
      if (this.formState?.arrivalTime?.trim() === '') {
        this.arrivalTimeErrMsg = 'Arrival Time is required';
      }
      
    
      if (
            this.formState?.firstName?.trim() !== ''
            && this.formState?.surname?.trim() !== ''
            && this.formState?.phoneNumber?.trim() !== ''
            && this.formState?.emailAddress?.trim() !== ''
            && this.formState?.pickupAddress?.trim() !== ''
            && this.formState?.departureAirport?.trim() !== ''
            && this.formState?.pickupArea?.trim() !== ''
            && this.formState?.arrivalAirport?.trim() !== ''
            && this.formState?.destinationArea?.trim() !== ''
            && this.formState?.destinationAddress?.trim() !== ''
            && this.formState?.pickupDate?.trim() !== ''
            && this.formState?.pickupTime?.trim() !== ''
            && this.formState?.arrivalTime?.trim() !== ''
        ) {
            this.setValid()
            console.log(this.formState)
            localStorage.setItem("confirmBooking", JSON.stringify(this.formState));
            // console.log(pickupPointAir)
            // confirmBranchState.set('state', this.formState);
            console.log(localStorage.getItem("confirmBooking"));
        
         

           
            
        }
  }

    
    render() {
        return (
            <div class="pt-14 pb-10">
                <title-component>
                    <img  
                        class="w-20" 
                        src={getAssetPath(`../assets/${this.logoIcon}`)} 
                        alt="logo-icon"
                    /> 
                </title-component>

                <main class='mt-20 space-y-6'>
                    <form class="px-4 pt-4 pb-10">
                        <div class="flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0 ">
                            <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">Firstname</label>
                                <input
                                    name="firstName"
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="text"
                                    onInput={(e) => this.handleInputChange(e)}
                                    required
                                />
                                <small>{this.firstNameErrMsg}</small>
                            </div>
                            <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">Surname</label>
                                <input
                                    name="surname"
                                    onInput={(e) => this.handleInputChange(e)}
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="text"
                                    required
                                />
                                <small>{this.surnameErrMsg}</small>
                            </div>
                        </div>

                        <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0 ">
                            <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">Phone Number</label>
                                <input
                                name='phoneNumber'
                                onInput={(e) => this.handleInputChange(e)}
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="text"
                                required
                                />
                                <small>{this.phoneNumberErrMsg}</small>
                            </div>
                            <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">Email Address</label>
                                <input
                                name="emailAddress"
                                onInput={(e) => this.handleInputChange(e)}
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="email"
                                required
                                />
                            </div>
                        </div>

                        <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0">
                            
                            <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">Departure Airport</label>
                                <div class="relative w-full">
                                <div class="pointer-events-none text-gray-600 absolute mt-3 ml-56  lg:ml-80  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                    
                                </div>
                                    <select
                                        name="departureAirport"
                                        class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600'
                                        onInput={(event) => this.handleSecondSelect(event)} 
                                        required
                                    >
                                    <option value="" selected disabled hidden>select airport </option>
                                        {this.storeAirportApiData?.map(({userid, branch_location }) => 
                                        <option value={userid} >{branch_location}</option>
                                        )}
                                    </select>
                                    <small>{this.departureAirportErrMsg}</small>
                                </div>
                            </div>

                            <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">Pick Up Area</label>
                            <div class="relative w-full">
                                <div class="pointer-events-none text-gray-600 absolute mt-3 ml-56  lg:ml-80  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                    
                                </div>
                                <select
                                    name="pickupArea"
                                    onInput={(e) => this.handleInputChange(e)}
                                    class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600'
                                    required
                                    >
                                    <option value="" selected disabled hidden>select branch </option>
                                    {
                                    this.destinationState?.map(({area }) => 
                                    <option value={area} >{area}</option>
                                    )}
                                </select>
                                <small>{this.pickupAreaErrMsg}</small>
                            </div>
                        
                            </div>
                    
                        </div>

                        <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0">
                            <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">Pick Up Address</label>
                                <input
                                    name="pickupAddress"
                                    list='datalist1'
                                    onInput={(e) => this.handleDestination(e)}
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="text"
                                    required
                                />
                                <datalist id='datalist1'>
                                    {
                                    this.storeGoogleApiLocation?.map((item) => (
                                        <option value={item}>{item}</option>
                                    ))}
                                </datalist>
                                <small>{this.pickupAddressErrMsg}</small>
                            </div>
                            <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">Arrival Airport</label>
                                <div class="relative w-full">
                                    <div class="pointer-events-none text-gray-600 absolute mt-3 ml-56  lg:ml-80  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                        
                                    </div>
                                    <select
                                        name="arrivalAirport"
                                        class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600'
                                        onInput={(event) => this.handleInputChange(event)} 
                                        required
                                        >
                                        <option value="" selected disabled hidden>select airport </option>
                                            {this.storeAirportApiData?.map(({branch_location }) => 
                                            <option value={branch_location} >{branch_location}</option>
                                            )}
                                    </select>
                                    <small>{this.arrivalAirportErrMsg}</small>
                                </div>
                            </div>
                            {/* <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">Destination Address</label>
                                <input
                                    name="finalDest"
                                    list='datalist1'
                                    onInput={(e) => this.handlefinalDest(e)}
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="text"
                                    required
                                />
                                <datalist id='datalist1'>
                                    {
                                    this.storeGoogleApiLocation?.map((item) => (
                                        <option value={item}>{item}</option>
                                    ))}
                                </datalist>
                                <small>{this.finalDestErrMsg}</small>
                            </div> */}
                        </div>

                        <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0">
                            <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">Destination Area</label>
                                <div class="relative w-full">
                                    <div class="pointer-events-none text-gray-600 absolute mt-3 ml-56  lg:ml-80  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                        
                                    </div>
                                    <select
                                        name="destinationArea"
                                        onInput={(e) => this.handleInputChange(e)}
                                        class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600'
                                        required
                                        >
                                        <option value="" selected disabled hidden>select branch </option>
                                        {
                                        this.destinationState?.map(({area }) => 
                                        <option value={area} >{area}</option>
                                        )}
                                    </select>
                                    <small>{this.destinationAreaErrMsg}</small>
                                </div>
                            
                            </div>

                            <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">Destination Address</label>
                                <input
                                    name="destinationAddress"
                                    list='datalist1'
                                    onInput={(e) => this.handleDestination(e)}
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="text"
                                    required
                                />
                                <datalist id='datalist1'>
                                    {
                                    this.storeGoogleApiLocation?.map((item) => (
                                        <option value={item}>{item}</option>
                                    ))}
                                </datalist>
                                <small>{this.destinationAddressErrMsg}</small>
                            </div>
                        </div>

                        <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0">
                            <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">Date</label>
                                <input
                                    name="pickupDate"
                                    onInput={(e) => this.handleInputChange(e)}
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="date"
                                    required
                                />
                                <small>{this.pickupDateErrMsg}</small>
                            </div>
                            <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">Time</label>
                                <input
                                    name="pickupTime"
                                    onInput={(e) => this.handleInputChange(e)}
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="time"
                                    required
                                />
                                <small>{this.pickupTimeErrMsg}</small>
                            </div>
                        </div>
                        <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0 ">
                            <div class="w-full">
                                <label class="block text-gray-400 text-sm font-light mb-2">Arrival Time</label>
                                <input
                                    name="arrivalTime"
                                    onInput={(e) => this.handleInputChange(e)}
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="time"
                                    required
                                />
                                <small>{this.arrivalTimeErrMsg}</small>
                            </div>
                        </div>
                       
               
                        <button 
                            type="button" 
                            onClick={this.onBookChange.bind(this)}  
                            class="text-center mt-10 w-full border-0 p-3 outline-none focus:outline-none custom-book-btn"
                        >
                            <a {...href(this.valid ? '/page-comfirm-booking' : '')}>Book Now</a> 
                        </button>
                    </form>
                </main>
            </div>
        );
    }
}