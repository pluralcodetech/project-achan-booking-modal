import { Component, getAssetPath, h, Prop, State } from "@stencil/core";
import { href } from "stencil-router-v2";
import { branchId, confirmBranchState, toNextpageState } from "../globalState/globalState";
import { handleErrors } from "../useFulSnippets/actions";

// console.log(confirmBranchState.get('state'));
// const sv = JSON.parse(localStorage.getItem("confirmBooking"))
// console.log(sv.firstName)


interface  formStateType { 
  firstName: string,
  surname: string,
  phoneNumber: string,
  emailAddress: string,
  pickupAdress: string,
  airport: string,
  pickupDate: string,
  pickupTime: string,
}
@Component({
    tag: "page-pickup-point",
    styleUrl: 'pages.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class MyComponent { 
    

    componentWillLoad() { 
        toNextpageState.set('toNextpage', true);
        this.airportDataApi(branchId.get('id'));
    }

    @Prop() logoIcon = 'logo.png';

    @State() formState : formStateType = {
        firstName: "",
        surname: "",
        phoneNumber: "",
        emailAddress: "",
        pickupAdress: "",
        airport: "",
        pickupDate: "",
        pickupTime: "",
    };

    @State() firstNameErrMsg;
    @State() surnameErrMsg;
    @State() phoneNumberErrMsg;
    @State() emailAddressErrMsg;
    @State() pickupAdressErrMsg;
    @State() airportErrMsg;
    @State() pickupDateErrMsg;
    @State() pickupTimeErrMsg;

    @State() googleApiLocation;
    @State() storeGoogleApiLocation;
    @State() storeAirportApiData;
    

    handleInputChange(event) {
        const value = event.target.value;
        this.formState[event.target.name] = value;
    };

    handleLocationChange(event) {
        this.googleApiLocation = event.target.value;
        this.formState.pickupAdress = event.target.value;

        this.callgoogleApiData();
    };

    // handleSecondSelect(event) {
    //     // this.formState.airport = event.target.value;

    // }
    
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
        if (this.formState?.pickupAdress?.trim() === '') {
            this.pickupAdressErrMsg = 'Pick up Adress is required';
        }
        if (this.formState?.airport?.trim() === '') {
            this.airportErrMsg = 'Airport is required';
        }
        if (this.formState?.pickupDate?.trim() === '') {
            this.pickupDateErrMsg = 'Pick up Date is required';
        }
        if (this.formState?.pickupTime?.trim() === '') {
            this.pickupTimeErrMsg = 'Pick up Time is required';
        }
        
          
        if (
            this.formState?.firstName?.trim() !== ''
            && this.formState?.surname?.trim() !== ''
            && this.formState?.phoneNumber?.trim() !== ''
            && this.formState?.emailAddress?.trim() !== ''
            && this.formState?.pickupAdress?.trim() !== ''
            && this.formState?.airport?.trim() !== ''
            && this.formState?.pickupDate?.trim() !== ''
            && this.formState?.pickupTime?.trim() !== ''
        ) {
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

                <main class='mt-20'>
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
                                <label class="block text-gray-400 text-sm font-light mb-2">Destination Address</label>
                                <input
                                    name="pickupAdress"
                                    list='datalist1'
                                    onInput={(e) => this.handleLocationChange(e)}
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600" type="text"
                                    required
                                />
                                <datalist id='datalist1'>
                                    {
                                    this.storeGoogleApiLocation?.map((item) => (
                                        <option value={item}>{item}</option>
                                    ))}
                                </datalist>
                                <small>{this.pickupAdressErrMsg}</small>
                            </div>
                            <div class="sm:w-3/6">
                                <label class="block text-gray-400 text-sm font-light mb-2">From</label>
                                <div class="relative w-full">
                                <div class="pointer-events-none text-gray-600 absolute mt-3 ml-56  lg:ml-80  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                    
                                </div>
                                <select
                                    name="airport"
                                    class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600'
                                    onInput={(event) => this.handleInputChange(event)} 
                                    required
                                    >
                                    <option value="" selected disabled hidden>select airport </option>
                                        {this.storeAirportApiData?.map(({userid, branch_location }) => 
                                        <option value={userid} >{branch_location}</option>
                                        )}
                                    </select>
                                    <small>{this.airportErrMsg}</small>
                                </div>
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
               
                        <button 
                            type="button" 
                            onClick={this.onBookChange.bind(this)}  
                            class="text-center mt-16 w-full border-0 p-3 outline-none focus:outline-none custom-book-btn"
                        >
                            {/* <a {...href('/page-comfirm-booking')}>Book Now</a>  */}
                            {
                                confirmBranchState.get('state') !== '' ?
                                    <a {...href('/page-comfirm-booking')}>Book Now</a> 
                                    : <h1>Book Now</h1>
                        }
                            {/* Book Now */}
                            
                        </button>
                    </form>
                </main>
            </div>
        );
    }
}

// ...href('/page-comfirm-booking')