import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'modal-component',
    styleUrl: 'my-component.css',
    shadow: true
})
    


export class ModalComponent {
    @Prop({ reflect: true, mutable: true }) opened: boolean;

    closeModal() {
        this.opened = false;
        console.log("closing Modal...")
    }

    render() {
        return (
            // <div class=' justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none modal-container'>
            //             <div class="relative w-72  sm:w-9/12  my-6 mx-auto max-w-3xl">
            //                 {/*content*/}
            //                 <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            //                     {/*header*/}
            //                     <div class="flex items-center  justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
            //                         <div></div>
            //                         <button class="text-gray-400 p-1 ml-auto bg-transparent border-0 outline-none focus:outline-none">x</button>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            <div>
                {this.opened ? (
                    <div class=' justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none modal-container'>
                        <div class="relative w-72  sm:w-9/12  my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div class="flex items-center  justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                                    <div></div>
                                    <button
                                        onClick={this.closeModal.bind(this)}
                                        class="text-gray-400 p-1 ml-auto bg-transparent border-0 outline-none focus:outline-none"
                                    >x</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
                    
                
            </div>
            
        );
    }
}