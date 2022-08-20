import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Apollo } from 'apollo-angular';
import { map, Observable, of } from 'rxjs';
import { Category } from 'src/app/models/category';
import { AddNewCategoryComponent } from '../add-new-category/add-new-category.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(
    private Apollo: Apollo,
    private dialog: MatDialog
    ) { }
    
   @Input() categories$!: Observable<Category[]>


  todoForm = new FormGroup({
    category: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.todoForm.value)
    
  }

  createNewCategory() {
    const dialogRef = this.dialog.open(AddNewCategoryComponent, {
      width: '500px',
    }).afterClosed().subscribe(
      (data) => {
        console.log(data)
        
      }
    )
  }

}
