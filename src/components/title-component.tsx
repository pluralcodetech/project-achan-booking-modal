import { Component, h} from "@stencil/core";

@Component({
    tag: 'title-component',
    styleUrl: 'my-component.css',
    shadow: true,
    assetsDirs: ['assets'],
})

export class MyComponent { 

    render() {
        return (
            <div class="flex flex-row justify-center">
                <slot/>
            </div>
        )
    }
}