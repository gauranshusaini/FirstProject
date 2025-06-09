import { LightningElement ,wire } from 'lwc';
import getAccounts from '@salesforce/apex/DisplayAccCtrlClass.firstMethod' ;

export default class DispalyAccCtrl extends LightningElement {

    acclistProp ;

   @wire(getAccounts)
   
        dataFunc({data,error}){

        if(data){
            this.acclistProp = data;
            console.log(this.acclistProp);
    } else {
        alert('Some error occured'+JSON.stringify(error));
    console.log(error,'error occured');
    }
    } 
}