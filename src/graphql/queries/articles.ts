import { gql } from '@apollo/client'

// export const GET_ARTICLES = gql`
//     query GetPosts { 
//         posts {
//             documentId,
//             title,
//             description,
//             blocks {
//                 ... on ComponentSharedRichText {
//                     id,
//                     body
//                 }
//                 ... on ComponentSharedMedia {
//                     id
//                     file {
//                         documentId
//                         name
//                         url
//                     }
//                 }
//             }
//         }
//     }
// `

export const GET_POSTS = gql`
    query GetPosts {
        posts {
            documentId
            title
            blocks {
            ... on ComponentSharedText {
                id
                Markdown
            }
            ... on ComponentSharedShared {
                id
                Media {
                documentId
                previewUrl
                name
                size
                url
                formats
                }
            }
            ... on Error {
                code
                message
            }
            }
        }
    }

`
