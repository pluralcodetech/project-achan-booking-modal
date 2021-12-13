import { createStore } from "@stencil/store";

export const toNextpageState = createStore({
    toNextpage : false
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