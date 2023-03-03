import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcv-form',
  templateUrl: './addcv-form.component.html',
  styleUrls: ['./addcv-form.component.css']
})
export class AddcvFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
  }

}
