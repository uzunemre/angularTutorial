import {Component, OnInit} from '@angular/core';
import {PersonService} from "../services/person.service";
import {Name, Person} from "./person";

@Component({
  selector: 'people',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  title = 'HumanResource';
  peopleList: any = [];
  isNextActive: boolean = true;
  isPreviewActive: boolean = true;
  personModel: Person;
  isEdit: boolean = false;
  name: Name;
  isInsert: boolean = false;
  optionSelect = ['male', 'female']


  constructor(public service: PersonService) {
  }

  ngOnInit(): void {
    this.getPeople();
  }

  public getPeople() {
    return this.service.getPeopleList().subscribe((data: any = []) => {
      this.peopleList = data;
    });
  }


  public clickInsert() {

    this.personModel = new Person();
    this.name = new Name();
    this.personModel.name = this.name;

    this.isInsert = !this.isInsert;
    this.isEdit = false;
  };

  public Edit(data: Person) {
    this.isEdit = (this.personModel == data || this.isInsert == true) ? !this.isEdit : this.isEdit;
    this.personModel = data;
    this.isInsert = false;
  }

  public Save() {
    if (this.isEdit) {
      this.service.updatePerson(this.personModel).subscribe((data: any) => {
      });
      this.personModel = null;
      this.isEdit = false;
    } else if (this.isInsert) {
      this.service.insertPeople(this.personModel).subscribe((data: any) => {
        this.getPeople();
      });
      this.personModel = null;
      this.isInsert = false;
    }
  }

  public Delete(data: Person) {
    if (confirm("Silmek istediğinize emin misiniz ")) {
      this.service.deletePeople(data).subscribe((data: any) => {
        console.log("Sil:" + data.username);
        this.getPeople();
      });
    }
  }

}
