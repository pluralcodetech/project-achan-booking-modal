import { createStore } from "@stencil/store";

export const toNextpageState = createStore({
    toNextpage : false
})

export const departureAirPageState = createStore({
    departureAirPage : false
})

export const finalDestinationPageState = createStore({
    finalDestinationPage : false
})

export const airportToDestinationPageState = createStore({
    airportToDestinationPage : false
})

export const roundTripPickupPageState = createStore({
    roundTripPickupPage : false
})

export const branchId = createStore({
    id : ''
})



export const confirmBranchState  = createStore({
    state: ''
});

export const pickupPointAir = createStore({
    firstName: "",
    surname: "",
    phoneNumber: "",
    emailAddress: "",
    pickupAdress: "",
    airport: "",
    pickupDate: "",
    pickupTime: "",
});

