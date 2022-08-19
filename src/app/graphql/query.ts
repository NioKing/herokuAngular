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