import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.scss']
})
export class AddNewCategoryComponent implements OnInit {

  constructor(
  ) { }


  newCategoryForm = new FormGroup({
    category: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {

  }


  onSubmit() {

  }
}
