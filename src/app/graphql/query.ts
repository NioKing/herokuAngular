import { gql } from "apollo-angular";

export const GET_CATEGORIES = gql`
    query {
  categories {
    id
    title
     todos {
        text
        id
        isCompleted
        categoryId
      }
  }
}
`

export const CREATE_TODO = gql`
  mutation($text: String!, $categoryName:String!) {
    createTodo(
      createTodoInput: { text: $text, categoryName: $categoryName }
    ) {
      text
      categoryId
    }
}
`

export const UPDATE_TODO = gql`
  mutation($id:Int!, $isCompleted:Boolean!) {
    updateTodo(updateTodoInput: {
      isCompleted: $isCompleted
      id: $id
    }){
      text
      isCompleted
      id
    }
}
`

export const CREATE_CATEGORY = gql`
  mutation($title:String!) {
    createCategory(createCategoryInput: { title: $title }) {
      title
      id
    }
  }
`

export const REMOVE_TODO = gql`
  mutation($id:Int!) {
    removeTodo(id: $id) {
      text
    }
}`


export const REMOVE_CATEGORY = gql`
  mutation($id:Int!) {
    removeCategory(id: $id) {
      title
    }
}`