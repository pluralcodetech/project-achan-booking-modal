/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ModalButton {
        "class": string;
        "externalbtn": string;
    }
    interface ModalComponent {
        "opened": boolean;
    }
}
declare global {
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
    interface HTMLElementTagNameMap {
        "modal-button": HTMLModalButtonElement;
        "modal-component": HTMLModalComponentElement;
    }
}
declare namespace LocalJSX {
    interface ModalButton {
        "class"?: string;
        "externalbtn"?: string;
    }
    interface ModalComponent {
        "opened"?: boolean;
    }
    interface IntrinsicElements {
        "modal-button": ModalButton;
        "modal-component": ModalComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "modal-button": LocalJSX.ModalButton & JSXBase.HTMLAttributes<HTMLModalButtonElement>;
            "modal-component": LocalJSX.ModalComponent & JSXBase.HTMLAttributes<HTMLModalComponentElement>;
        }
    }
}
