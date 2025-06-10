import { LightningElement ,wire } from 'lwc';
import getAccounts from '@salesforce/apex/DisplayAccCtrlClass.firstMethod' ;
import getContacts from '@salesforce/apex/DisplayAccCtrlClass.secondMethod' ;

export default class DispalyAccCtrl extends LightningElement {

    acclistProp ;
    conlistProp ; 

    @wire(getContacts) contactFunc({data,error}){
        if(data){
            this.conlistProp = data ;
        } else if(error) {
            alert(JSON.stringify(error));
        }
    }

   
}