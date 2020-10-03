import {Component, Input} from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export enum ModalContentEnum {
    Nestea,
    Toyota,
    Optus,
    Works,
    Sonos,
    SaPol,
    Disaronno,
    Virgin
}

@Component({
    selector: 'app-modal-content',
    templateUrl: './template.component.html'
    // template: `
    // `
})
export class NgbdModalContent {
    @Input()
    public name: string;
    
    @Input()
    public modalContent: ModalContentEnum;
    
    public modalContentEnum = ModalContentEnum;
    
    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
    public modalContent = ModalContentEnum;

    constructor(private modalService: NgbModal) { }
    
    open(modalContent: ModalContentEnum) {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
        modalRef.componentInstance.modalContent = modalContent;
    }
}
