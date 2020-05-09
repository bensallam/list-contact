import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {Contact} from "../../models/contact";

@Component({
  selector: 'app-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.css']
})
export class ListcontactComponent implements OnInit {
contacts;
mycontact: Contact;
statusContact = false;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
      console.log(this.contacts);
    })
  }
  updateContact(contact) {
    this.contactService.updateContact(contact);
    this.statusContact = false
  }
  editContact(contact) {
    this.statusContact = true;
    this.mycontact = contact;

  }
  deleteContact(contact){
    if(confirm('are you sur to delete this contact')) {
      this.contactService.deleteContact(contact);
    }
    else {
      this.statusContact = false;
    }
  }
}
