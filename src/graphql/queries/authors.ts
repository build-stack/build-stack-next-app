import { gql } from '@apollo/client'

export const GET_AUTHORS = gql`
    query GetAuthors { authors { documentId, name, email, createdAt, publishedAt } }
`