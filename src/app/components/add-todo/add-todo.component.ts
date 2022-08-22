import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Apollo } from 'apollo-angular';
import { map, Observable, of } from 'rxjs';
import { CREATE_TODO } from 'src/app/graphql/query';
import { Category } from 'src/app/models/category';
import { Todo } from 'src/app/models/todo';
import { AddNewCategoryComponent } from '../add-new-category/add-new-category.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(
    private Apollo: Apollo,
    private dialog: MatDialog,
    private host: ElementRef<HTMLElement>
    ) { }
    
  @Input() categories$!: Observable<Category[]>

  newCategory!: string
  
  

  todoForm = new FormGroup({
    category: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.todoForm.value)
    this.Apollo.mutate<{ createTodo: Todo}>(
      {
        mutation: CREATE_TODO,
        variables: {
          text: this.todoForm.value.text,
          categoryName: this.todoForm.value.category
        }
      }
    ).subscribe(({data}) => {
      console.log(data)
      
    })
    
  }

  createNewCategory() {
    const dialogRef = this.dialog.open(AddNewCategoryComponent, {
      width: '500px',
    }).afterClosed().subscribe(
      (data) => {
        console.log(data)
        // this.todoForm.get('category')?.setValue(data)
        
        
      }
    )
  }

  close() {
    this.host.nativeElement.remove()
  }

}
