import { Component, OnInit } from '@angular/core';
import {Contact} from "../../models/contact";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
contact: Contact= {
  name: null,
  phone: null
}
  statusContcat = false;
  constructor(private  contactService: ContactService) {
  }

  ngOnInit() {
  }

  createContact() {
    this.contactService.createContact(this.contact);
    this.contact.name=null;
    this.contact.phone=null;
    this.statusContcat = false;
  }
}
