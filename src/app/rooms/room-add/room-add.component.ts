import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { room } from '../../shared/interface/room';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent implements OnInit {

  roomDetailsForm!: FormGroup;
  submitted: boolean = false;
  isLoading: boolean = false;

  get f() {
    return this.roomDetailsForm.controls;
  }

  roomModel: room = {};

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.roomDetailsForm = this.formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z]{4,15}$')]
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z]{4,15}$')]
      ],
      email: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]
      ],
      nic: [
        '',
        [Validators.required, Validators.pattern('[0-9]{9}[V|v]$')]
      ],
      numOfDays: [
        '',
        [Validators.required, Validators.pattern('[0-9]{1,2}$')]
      ]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.roomDetailsForm.valid) {

      this.isLoading = true;

      //avoiding redudancy data insertion
      setTimeout(() => {
        console.log('Response');
        this.isLoading = false;
        this.clearForm();
      }, 3000)

    }
  }

  clearForm(): void {
    this.submitted = false;
    this.roomDetailsForm.reset();
  }

}
