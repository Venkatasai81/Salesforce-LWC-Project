import { LightningElement, wire } from 'lwc';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import { reduceErrors } from 'c/ldsUtils';
const COLUMNS = [
    { label: 'FIRST NAME', fieldName: FIRST_NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'LAST NAME', fieldName: LAST_NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'EMAIL', fieldName: EMAIL_FIELD.fieldApiName, type: 'text' }
];
export default class ContactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    contacts;

    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }
}