import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/components/datepicker';

@Component({
    selector: 'popup-datepicker',
    directives: [DATEPICKER_DIRECTIVES],
    template: `       
        <div class="form-group" style="margin-bottom:0px">
            <label>{{popUpDateLabel}}</label>
            <input class="form-control" style="display:inline" type="text" [value]="popUpDate | date: 'MM/dd/yyyy'" disabled />
            <button class="btn btn-default" (click)="togglePopup()"><i class="glyphicon glyphicon-calendar"></i> </button> 
        </div> 
        <div *ngIf="popUpIsVisible" style="display:inline-block;min-height:260px">  
            <datepicker class="pop-ng2-date-picker" [(ngModel)]="popUpDate" (ngModelChange)="hidePopup($event)" ></datepicker>
        </div>
  `,
    styles: [`
    .pop-ng2-date-picker {
      position: absolute;
      background-color: #fff;
      border: 1px solid #ddd;
      max-height: 250px;  
    }
  `],
})
export class PopupDatepickerComponent {

    @Input() popUpIsVisible: boolean;
    @Input() popUpDate: Date;
    @Input() popUpDateLabel: string = "Date";  
    @Output('onChangePopUpDate') dateChangedEmitter: EventEmitter<string> = new EventEmitter<string>(); 

    togglePopup() {
        this.popUpIsVisible = !this.popUpIsVisible;
    }

    hidePopup(event) {
        this.popUpIsVisible = false;
        this.popUpDate = event;
        this.dateChangedEmitter.emit(event);
    }
}