import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { map, Observable, of } from 'rxjs';
import { CATEGORIES } from 'src/app/graphql/query';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(
    private Apollo: Apollo
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

  // getCategories() {
  //   this.categories$ = this.Apollo.watchQuery<{categories: any[]}>({query: CATEGORIES}).valueChanges.pipe(
  //     map((response) => response.data.categories)
  //   )
  // }

}
