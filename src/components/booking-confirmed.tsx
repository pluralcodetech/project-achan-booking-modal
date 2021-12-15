import { Component, h } from "@stencil/core";

@Component({
    tag: 'booking-confirmed',
    styleUrl: 'my-component.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class BookingConfirmed {
    render() {
        return (
            <div class='text-center space-y-2'>
                <h3 class="font-bold text-2xl confirmBooking-h3">Booking Confirmed</h3>
                <div class="w-52 mx-auto">
                    <small class="text-gray-400 text-sm">We’ve sent a copy of your ticket to your email</small>
                </div>
                
            </div>
        );
    }
}