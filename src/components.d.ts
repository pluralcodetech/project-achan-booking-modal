/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AdComfirmBooking {
    }
    interface AirdestinationCbtd {
    }
    interface BookingConfirmed {
    }
    interface ComfirmBooking {
    }
    interface ConfirmedAirportdestBooking {
    }
    interface ConfirmedDepartureAirport {
    }
    interface ConfirmedFinaldestBooking {
    }
    interface DepartureAirportCbtd {
    }
    interface FdComfirmBooking {
    }
    interface FinaldestCbtd {
    }
    interface GetCabticket {
        "airdestination"?: boolean;
        "arrivalairport"?: string | number;
        "arrivaldestination"?: string | number;
        "arrivalticketnum"?: string | number;
        "callIcon": string;
        "carIcon": string;
        "date": string | number;
        "departureairport"?: string | number;
        "destination"?: string | number;
        "estmax"?: string | number;
        "estmax2"?: string | number;
        "estmin"?: string | number;
        "estmin2"?: string | number;
        "from"?: string | number;
        "passengername": string | number;
        "phonenum"?: string | number;
        "phonenumber": string | number;
        "pickuparea"?: string | number;
        "pickupticketnum"?: string | number;
        "ticketnum"?: string | number;
        "time": string | number;
        "totalestimate"?: any;
        "whatapp"?: string | number;
        "whatappIcon": string;
    }
    interface HomePage {
    }
    interface MainScreen {
    }
    interface ModalBookingDetails {
        "airport": string;
        "date": string | number;
        "destination": string;
        "destinationAddress": string;
        "dottedLines": string;
        "estimatedPriceMax": string | number;
        "estimatedPriceMin": string | number;
        "returnproperties": boolean;
        "time": string | number;
    }
    interface ModalButton {
        "class": string;
        "externalbtn": string;
    }
    interface ModalComponent {
        "logoIcon": string;
        "opened": boolean;
        "previousBtn": string;
        "requiredid": string;
    }
    interface PageArrivalToFinalDestination {
        "logoIcon": string;
        "setValid": () => Promise<void>;
    }
    interface PagePickupPoint {
        "logoIcon": string;
    }
    interface PagePickuppointAirportDestination {
        "logoIcon": string;
        "setValid": () => Promise<void>;
    }
    interface PageRoundtripPickup {
        "logoIcon": string;
        "setValid": () => Promise<void>;
    }
    interface PickupComfirmBooking {
    }
    interface RouteCard {
        "faqIcon": string;
        "pathname": string;
        "places": string;
    }
    interface RowElement {
    }
    interface TitleComponent {
    }
}
declare global {
    interface HTMLAdComfirmBookingElement extends Components.AdComfirmBooking, HTMLStencilElement {
    }
    var HTMLAdComfirmBookingElement: {
        prototype: HTMLAdComfirmBookingElement;
        new (): HTMLAdComfirmBookingElement;
    };
    interface HTMLAirdestinationCbtdElement extends Components.AirdestinationCbtd, HTMLStencilElement {
    }
    var HTMLAirdestinationCbtdElement: {
        prototype: HTMLAirdestinationCbtdElement;
        new (): HTMLAirdestinationCbtdElement;
    };
    interface HTMLBookingConfirmedElement extends Components.BookingConfirmed, HTMLStencilElement {
    }
    var HTMLBookingConfirmedElement: {
        prototype: HTMLBookingConfirmedElement;
        new (): HTMLBookingConfirmedElement;
    };
    interface HTMLComfirmBookingElement extends Components.ComfirmBooking, HTMLStencilElement {
    }
    var HTMLComfirmBookingElement: {
        prototype: HTMLComfirmBookingElement;
        new (): HTMLComfirmBookingElement;
    };
    interface HTMLConfirmedAirportdestBookingElement extends Components.ConfirmedAirportdestBooking, HTMLStencilElement {
    }
    var HTMLConfirmedAirportdestBookingElement: {
        prototype: HTMLConfirmedAirportdestBookingElement;
        new (): HTMLConfirmedAirportdestBookingElement;
    };
    interface HTMLConfirmedDepartureAirportElement extends Components.ConfirmedDepartureAirport, HTMLStencilElement {
    }
    var HTMLConfirmedDepartureAirportElement: {
        prototype: HTMLConfirmedDepartureAirportElement;
        new (): HTMLConfirmedDepartureAirportElement;
    };
    interface HTMLConfirmedFinaldestBookingElement extends Components.ConfirmedFinaldestBooking, HTMLStencilElement {
    }
    var HTMLConfirmedFinaldestBookingElement: {
        prototype: HTMLConfirmedFinaldestBookingElement;
        new (): HTMLConfirmedFinaldestBookingElement;
    };
    interface HTMLDepartureAirportCbtdElement extends Components.DepartureAirportCbtd, HTMLStencilElement {
    }
    var HTMLDepartureAirportCbtdElement: {
        prototype: HTMLDepartureAirportCbtdElement;
        new (): HTMLDepartureAirportCbtdElement;
    };
    interface HTMLFdComfirmBookingElement extends Components.FdComfirmBooking, HTMLStencilElement {
    }
    var HTMLFdComfirmBookingElement: {
        prototype: HTMLFdComfirmBookingElement;
        new (): HTMLFdComfirmBookingElement;
    };
    interface HTMLFinaldestCbtdElement extends Components.FinaldestCbtd, HTMLStencilElement {
    }
    var HTMLFinaldestCbtdElement: {
        prototype: HTMLFinaldestCbtdElement;
        new (): HTMLFinaldestCbtdElement;
    };
    interface HTMLGetCabticketElement extends Components.GetCabticket, HTMLStencilElement {
    }
    var HTMLGetCabticketElement: {
        prototype: HTMLGetCabticketElement;
        new (): HTMLGetCabticketElement;
    };
    interface HTMLHomePageElement extends Components.HomePage, HTMLStencilElement {
    }
    var HTMLHomePageElement: {
        prototype: HTMLHomePageElement;
        new (): HTMLHomePageElement;
    };
    interface HTMLMainScreenElement extends Components.MainScreen, HTMLStencilElement {
    }
    var HTMLMainScreenElement: {
        prototype: HTMLMainScreenElement;
        new (): HTMLMainScreenElement;
    };
    interface HTMLModalBookingDetailsElement extends Components.ModalBookingDetails, HTMLStencilElement {
    }
    var HTMLModalBookingDetailsElement: {
        prototype: HTMLModalBookingDetailsElement;
        new (): HTMLModalBookingDetailsElement;
    };
    interface HTMLModalButtonElement extends Components.ModalButton, HTMLStencilElement {
    }
    var HTMLModalButtonElement: {
        prototype: HTMLModalButtonElement;
        new (): HTMLModalButtonElement;
    };
    interface HTMLModalComponentElement extends Components.ModalComponent, HTMLStencilElement {
    }
    var HTMLModalComponentElement: {
        prototype: HTMLModalComponentElement;
        new (): HTMLModalComponentElement;
    };
    interface HTMLPageArrivalToFinalDestinationElement extends Components.PageArrivalToFinalDestination, HTMLStencilElement {
    }
    var HTMLPageArrivalToFinalDestinationElement: {
        prototype: HTMLPageArrivalToFinalDestinationElement;
        new (): HTMLPageArrivalToFinalDestinationElement;
    };
    interface HTMLPagePickupPointElement extends Components.PagePickupPoint, HTMLStencilElement {
    }
    var HTMLPagePickupPointElement: {
        prototype: HTMLPagePickupPointElement;
        new (): HTMLPagePickupPointElement;
    };
    interface HTMLPagePickuppointAirportDestinationElement extends Components.PagePickuppointAirportDestination, HTMLStencilElement {
    }
    var HTMLPagePickuppointAirportDestinationElement: {
        prototype: HTMLPagePickuppointAirportDestinationElement;
        new (): HTMLPagePickuppointAirportDestinationElement;
    };
    interface HTMLPageRoundtripPickupElement extends Components.PageRoundtripPickup, HTMLStencilElement {
    }
    var HTMLPageRoundtripPickupElement: {
        prototype: HTMLPageRoundtripPickupElement;
        new (): HTMLPageRoundtripPickupElement;
    };
    interface HTMLPickupComfirmBookingElement extends Components.PickupComfirmBooking, HTMLStencilElement {
    }
    var HTMLPickupComfirmBookingElement: {
        prototype: HTMLPickupComfirmBookingElement;
        new (): HTMLPickupComfirmBookingElement;
    };
    interface HTMLRouteCardElement extends Components.RouteCard, HTMLStencilElement {
    }
    var HTMLRouteCardElement: {
        prototype: HTMLRouteCardElement;
        new (): HTMLRouteCardElement;
    };
    interface HTMLRowElementElement extends Components.RowElement, HTMLStencilElement {
    }
    var HTMLRowElementElement: {
        prototype: HTMLRowElementElement;
        new (): HTMLRowElementElement;
    };
    interface HTMLTitleComponentElement extends Components.TitleComponent, HTMLStencilElement {
    }
    var HTMLTitleComponentElement: {
        prototype: HTMLTitleComponentElement;
        new (): HTMLTitleComponentElement;
    };
    interface HTMLElementTagNameMap {
        "ad-comfirm-booking": HTMLAdComfirmBookingElement;
        "airdestination-cbtd": HTMLAirdestinationCbtdElement;
        "booking-confirmed": HTMLBookingConfirmedElement;
        "comfirm-booking": HTMLComfirmBookingElement;
        "confirmed-airportdest-booking": HTMLConfirmedAirportdestBookingElement;
        "confirmed-departure-airport": HTMLConfirmedDepartureAirportElement;
        "confirmed-finaldest-booking": HTMLConfirmedFinaldestBookingElement;
        "departure-airport-cbtd": HTMLDepartureAirportCbtdElement;
        "fd-comfirm-booking": HTMLFdComfirmBookingElement;
        "finaldest-cbtd": HTMLFinaldestCbtdElement;
        "get-cabticket": HTMLGetCabticketElement;
        "home-page": HTMLHomePageElement;
        "main-screen": HTMLMainScreenElement;
        "modal-booking-details": HTMLModalBookingDetailsElement;
        "modal-button": HTMLModalButtonElement;
        "modal-component": HTMLModalComponentElement;
        "page-arrival-to-final-destination": HTMLPageArrivalToFinalDestinationElement;
        "page-pickup-point": HTMLPagePickupPointElement;
        "page-pickuppoint-airport-destination": HTMLPagePickuppointAirportDestinationElement;
        "page-roundtrip-pickup": HTMLPageRoundtripPickupElement;
        "pickup-comfirm-booking": HTMLPickupComfirmBookingElement;
        "route-card": HTMLRouteCardElement;
        "row-element": HTMLRowElementElement;
        "title-component": HTMLTitleComponentElement;
    }
}
declare namespace LocalJSX {
    interface AdComfirmBooking {
    }
    interface AirdestinationCbtd {
    }
    interface BookingConfirmed {
    }
    interface ComfirmBooking {
    }
    interface ConfirmedAirportdestBooking {
    }
    interface ConfirmedDepartureAirport {
    }
    interface ConfirmedFinaldestBooking {
    }
    interface DepartureAirportCbtd {
    }
    interface FdComfirmBooking {
    }
    interface FinaldestCbtd {
    }
    interface GetCabticket {
        "airdestination"?: boolean;
        "arrivalairport"?: string | number;
        "arrivaldestination"?: string | number;
        "arrivalticketnum"?: string | number;
        "callIcon"?: string;
        "carIcon"?: string;
        "date"?: string | number;
        "departureairport"?: string | number;
        "destination"?: string | number;
        "estmax"?: string | number;
        "estmax2"?: string | number;
        "estmin"?: string | number;
        "estmin2"?: string | number;
        "from"?: string | number;
        "passengername"?: string | number;
        "phonenum"?: string | number;
        "phonenumber"?: string | number;
        "pickuparea"?: string | number;
        "pickupticketnum"?: string | number;
        "ticketnum"?: string | number;
        "time"?: string | number;
        "totalestimate"?: any;
        "whatapp"?: string | number;
        "whatappIcon"?: string;
    }
    interface HomePage {
    }
    interface MainScreen {
    }
    interface ModalBookingDetails {
        "airport"?: string;
        "date"?: string | number;
        "destination"?: string;
        "destinationAddress"?: string;
        "dottedLines"?: string;
        "estimatedPriceMax"?: string | number;
        "estimatedPriceMin"?: string | number;
        "returnproperties"?: boolean;
        "time"?: string | number;
    }
    interface ModalButton {
        "class"?: string;
        "externalbtn"?: string;
    }
    interface ModalComponent {
        "logoIcon"?: string;
        "opened"?: boolean;
        "previousBtn"?: string;
        "requiredid"?: string;
    }
    interface PageArrivalToFinalDestination {
        "logoIcon"?: string;
    }
    interface PagePickupPoint {
        "logoIcon"?: string;
    }
    interface PagePickuppointAirportDestination {
        "logoIcon"?: string;
    }
    interface PageRoundtripPickup {
        "logoIcon"?: string;
    }
    interface PickupComfirmBooking {
    }
    interface RouteCard {
        "faqIcon"?: string;
        "pathname"?: string;
        "places"?: string;
    }
    interface RowElement {
    }
    interface TitleComponent {
    }
    interface IntrinsicElements {
        "ad-comfirm-booking": AdComfirmBooking;
        "airdestination-cbtd": AirdestinationCbtd;
        "booking-confirmed": BookingConfirmed;
        "comfirm-booking": ComfirmBooking;
        "confirmed-airportdest-booking": ConfirmedAirportdestBooking;
        "confirmed-departure-airport": ConfirmedDepartureAirport;
        "confirmed-finaldest-booking": ConfirmedFinaldestBooking;
        "departure-airport-cbtd": DepartureAirportCbtd;
        "fd-comfirm-booking": FdComfirmBooking;
        "finaldest-cbtd": FinaldestCbtd;
        "get-cabticket": GetCabticket;
        "home-page": HomePage;
        "main-screen": MainScreen;
        "modal-booking-details": ModalBookingDetails;
        "modal-button": ModalButton;
        "modal-component": ModalComponent;
        "page-arrival-to-final-destination": PageArrivalToFinalDestination;
        "page-pickup-point": PagePickupPoint;
        "page-pickuppoint-airport-destination": PagePickuppointAirportDestination;
        "page-roundtrip-pickup": PageRoundtripPickup;
        "pickup-comfirm-booking": PickupComfirmBooking;
        "route-card": RouteCard;
        "row-element": RowElement;
        "title-component": TitleComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ad-comfirm-booking": LocalJSX.AdComfirmBooking & JSXBase.HTMLAttributes<HTMLAdComfirmBookingElement>;
            "airdestination-cbtd": LocalJSX.AirdestinationCbtd & JSXBase.HTMLAttributes<HTMLAirdestinationCbtdElement>;
            "booking-confirmed": LocalJSX.BookingConfirmed & JSXBase.HTMLAttributes<HTMLBookingConfirmedElement>;
            "comfirm-booking": LocalJSX.ComfirmBooking & JSXBase.HTMLAttributes<HTMLComfirmBookingElement>;
            "confirmed-airportdest-booking": LocalJSX.ConfirmedAirportdestBooking & JSXBase.HTMLAttributes<HTMLConfirmedAirportdestBookingElement>;
            "confirmed-departure-airport": LocalJSX.ConfirmedDepartureAirport & JSXBase.HTMLAttributes<HTMLConfirmedDepartureAirportElement>;
            "confirmed-finaldest-booking": LocalJSX.ConfirmedFinaldestBooking & JSXBase.HTMLAttributes<HTMLConfirmedFinaldestBookingElement>;
            "departure-airport-cbtd": LocalJSX.DepartureAirportCbtd & JSXBase.HTMLAttributes<HTMLDepartureAirportCbtdElement>;
            "fd-comfirm-booking": LocalJSX.FdComfirmBooking & JSXBase.HTMLAttributes<HTMLFdComfirmBookingElement>;
            "finaldest-cbtd": LocalJSX.FinaldestCbtd & JSXBase.HTMLAttributes<HTMLFinaldestCbtdElement>;
            "get-cabticket": LocalJSX.GetCabticket & JSXBase.HTMLAttributes<HTMLGetCabticketElement>;
            "home-page": LocalJSX.HomePage & JSXBase.HTMLAttributes<HTMLHomePageElement>;
            "main-screen": LocalJSX.MainScreen & JSXBase.HTMLAttributes<HTMLMainScreenElement>;
            "modal-booking-details": LocalJSX.ModalBookingDetails & JSXBase.HTMLAttributes<HTMLModalBookingDetailsElement>;
            "modal-button": LocalJSX.ModalButton & JSXBase.HTMLAttributes<HTMLModalButtonElement>;
            "modal-component": LocalJSX.ModalComponent & JSXBase.HTMLAttributes<HTMLModalComponentElement>;
            "page-arrival-to-final-destination": LocalJSX.PageArrivalToFinalDestination & JSXBase.HTMLAttributes<HTMLPageArrivalToFinalDestinationElement>;
            "page-pickup-point": LocalJSX.PagePickupPoint & JSXBase.HTMLAttributes<HTMLPagePickupPointElement>;
            "page-pickuppoint-airport-destination": LocalJSX.PagePickuppointAirportDestination & JSXBase.HTMLAttributes<HTMLPagePickuppointAirportDestinationElement>;
            "page-roundtrip-pickup": LocalJSX.PageRoundtripPickup & JSXBase.HTMLAttributes<HTMLPageRoundtripPickupElement>;
            "pickup-comfirm-booking": LocalJSX.PickupComfirmBooking & JSXBase.HTMLAttributes<HTMLPickupComfirmBookingElement>;
            "route-card": LocalJSX.RouteCard & JSXBase.HTMLAttributes<HTMLRouteCardElement>;
            "row-element": LocalJSX.RowElement & JSXBase.HTMLAttributes<HTMLRowElementElement>;
            "title-component": LocalJSX.TitleComponent & JSXBase.HTMLAttributes<HTMLTitleComponentElement>;
        }
    }
}
