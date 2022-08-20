import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable, of } from 'rxjs';
import { GET_CATEGORIES} from 'src/app/graphql/query';
import { Category } from 'src/app/models/category';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private apollo: Apollo
  ) { }

  categories$: Observable<Category[]> = of([])
  open: boolean = false

  ngOnInit(): void {
    this.getAllCategories()
  }


  getAllCategories() {
    this.categories$ = this.apollo.watchQuery<{ categories: Category[]}>({query: GET_CATEGORIES}).valueChanges.pipe(
      map((res) => res.data.categories),
    )
  }

  openAdd() {
    this.open = !this.open
  }

}
