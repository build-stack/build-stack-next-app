import { gql } from '@apollo/client'

export const GET_POSTS = gql`
    query GetPosts($page: Int, $pageSize: Int) {
        posts(sort: "createdAt:asc", pagination: { page: $page, pageSize: $pageSize }) {
            documentId
            title
            slug
        }
    }
`

export const GET_POST_BY_SLUG = gql`
    query GetPostBySlug($slug: String!) {
        posts(filters: { slug: { eq: $slug } }) {
            documentId
            title,
            blocks {
                ... on ComponentSharedText {
                    id
                    Markdown
                }
            }
        }
    }
`