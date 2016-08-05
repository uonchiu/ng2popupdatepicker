# ng2popupdatepicker
A popup date picker using the ng2-bootstrap datepicker

An Angular 2 component that shows a field to popup a datapicker from ng-bootstrap https://github.com/valor-software/ng2-bootstrap

Tested on Angular RC4.

### Usage  

```<popup-datepicker [popUpDate]="yourDate" [popUpIsVisible]="false" [popUpDateLabel]="'Label'" (onChangePopUpDate)="handleDateChange($event)"></popup-datepicker>```

popUpIsVisible, popUpDateLabel, and onChangePopUpDate are optional.

#### Closed 

![Alt text](https://raw.githubusercontent.com/uonchiu/ng2popupdatepicker/master/closed_popup.PNG "Closed Date Picker")

#### Opened

![Alt text](https://raw.githubusercontent.com/uonchiu/ng2popupdatepicker/master/opened_popup.PNG "Opened Date Picker")
