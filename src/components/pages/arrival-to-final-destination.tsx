import { Component, h } from "@stencil/core";

@Component({
    tag: "page-arrival-to-final-destination",
    styleUrl:'pages.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class ArrivalToFinalDestination {
    render() {
        return (
            <div>
                <h2>Arrival to Final Destination</h2>
                <p>
                    This is where the journey ends.
                </p>
            </div>
        );
    }
}
