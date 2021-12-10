import { Component, getAssetPath, h, Prop, State } from "@stencil/core";
import { branchId, toNextpageState } from "../globalState/globalState";
import { handleErrors } from "../useFulSnippets/actions";

interface  formStateType { 
  firstName: string,
  surname: string,
  phoneNumber: string,
  emailAddress: string,
  homeAddress: string,
  departureAirport: string,
  arrivalAirport: string,
  finalDest: string,
  pickupDate: string,
  pickupTime: string,
  returnpickupDate: string,
  returnpickupTime: string,
  
}

@Component({
    tag: "page-roundtrip-pickup",
    styleUrl: 'pages.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class PageRoundtripPickusp { 
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
        homeAddress: "",
        departureAirport: "",
        arrivalAirport: "",
        finalDest: "",
        pickupDate: "",
        pickupTime: "",
        returnpickupDate: "",
        returnpickupTime: "",
        
    };

    @State() firstNameErrMsg;
    @State() surnameErrMsg;
    @State() phoneNumberErrMsg;
    @State() emailAddressErrMsg;
    @State() homeAddressErrMsg;
    @State() departureAirportErrMsg;
    @State() arrivalAirportErrMsg;
    @State() finalDestErrMsg;
    @State() pickupDateErrMsg;
    @State() pickupTimeErrMsg;
    @State() returnpickupDateErrMsg;
    @State() returnpickupTimeErrMsg;

    @State() googleApiLocation;
    @State() storeGoogleApiLocation;
    @State() storeAirportApiData;
    

    handleInputChange(event) {
        const value = event.target.value;
        this.formState[event.target.name] = value;
        console.log(this.formState)
    };

    handlefinalDest(event) {
        this.googleApiLocation = event.target.value;
        this.formState.finalDest = event.target.value;

        this.callgoogleApiData();
    };

    handleHomeAddress(event) {
        this.googleApiLocation = event.target.value;
        this.formState.homeAddress = event.target.value;

        this.callgoogleApiData();
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
      if (this.formState?.homeAddress?.trim() === '') {
        this.homeAddressErrMsg = 'Home Address is required';
      }
      if (this.formState?.departureAirport?.trim() === '') {
        this.departureAirportErrMsg = 'Departure Airport is required';
      }
      if (this.formState?.arrivalAirport?.trim() === '') {
        this.arrivalAirportErrMsg = 'Arrival Airport is required';
      }
      if (this.formState?.finalDest?.trim() === '') {
        this.finalDestErrMsg = 'Final Destination is required';
      }
      if (this.formState?.pickupDate?.trim() === '') {
        this.pickupDateErrMsg = 'Pick up Date is required';
      }
      if (this.formState?.pickupTime?.trim() === '') {
        this.pickupTimeErrMsg = 'Pick up Time is required';
      }
      if (this.formState?.returnpickupDate?.trim() === '') {
        this.returnpickupDateErrMsg = 'Return Pick up Date is required';
      }
      if (this.formState?.returnpickupTime?.trim() === '') {
        this.returnpickupTimeErrMsg = 'Return Pick up Time is required';
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
                                <label class="block text-gray-400 text-sm font-light mb-2">Home Address</label>
                                <input
                                    name="homeAddress"
                                    list='datalist1'
                                    onInput={(e) => this.handleHomeAddress(e)}
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="text"
                                    required
                                />
                                <datalist id='datalist1'>
                                    {
                                    this.storeGoogleApiLocation?.map((item) => (
                                        <option value={item}>{item}</option>
                                    ))}
                                </datalist>
                                <small>{this.homeAddressErrMsg}</small>
                            </div>
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
                                        onInput={(event) => this.handleInputChange(event)} 
                                        required
                                    >
                                    <option value="" selected disabled hidden>select airport </option>
                                        {this.storeAirportApiData?.map(({ branch_location }) => 
                                        <option value={branch_location} >{branch_location}</option>
                                        )}
                                    </select>
                                    <small>{this.departureAirportErrMsg}</small>
                                </div>
                            </div>
                    
                        </div>

                        <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0">
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
                            <div class="sm:w-3/6">
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
                            </div>
                        </div>

                        <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0">
                            <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">Pickup Date</label>
                                <input
                                    name="pickupDate"
                                    onInput={(e) => this.handleInputChange(e)}
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="date"
                                    required
                                />
                                <small>{this.pickupDateErrMsg}</small>
                            </div>
                            <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">Pickup Time</label>
                                <input
                                    name="pickupTime"
                                    onInput={(e) => this.handleInputChange(e)}
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="time"
                                    required
                                />
                                <small>{this.pickupTimeErrMsg}</small>
                            </div>
                        </div>

                        <div class="mt-4 flex flex-col sm:flex-row sm:justify-between sm:space-x-7 space-y-6 sm:space-y-0">
                            <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">Return Pickup Date</label>
                                <input
                                    name="returnpickupDate"
                                    onInput={(e) => this.handleInputChange(e)}
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="date"
                                    required
                                />
                                <small>{this.returnpickupDateErrMsg}</small>
                            </div>
                            <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">Return Pickup Time</label>
                                <input
                                    name="returnpickupTime"
                                    onInput={(e) => this.handleInputChange(e)}
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="time"
                                    required
                                />
                                <small>{this.returnpickupTimeErrMsg}</small>
                            </div>
                        </div>
                       
               
                        <button 
                            type="button" 
                            onClick={this.onBookChange.bind(this)}  
                            class="text-center mt-10 w-full border-0 p-3 outline-none focus:outline-none custom-book-btn"
                        >Book Now</button>
                    </form>
                </main>
            </div>
        )
    }
}