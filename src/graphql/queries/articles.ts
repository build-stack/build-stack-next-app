import { gql } from '@apollo/client'

export const GET_ARTICLES = gql`
    query GetArticles { 
        articles {
            documentId,
            title,
            description,
            blocks {
                ... on ComponentSharedRichText {
                    id,
                    body
                }
                ... on ComponentSharedMedia {
                    id
                    file {
                        documentId
                        name
                        url
                    }
                }
            }
        }
    }
`