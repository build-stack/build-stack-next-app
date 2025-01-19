import { gql } from "@apollo/client";

export const GET_IMAGES = gql`
  query GetImages {
    uploadFiles {
        url
        documentId
        name
        formats
    }
  }
`;

export const GET_IMAGE_BY_ID = gql`
    query GetImageById($id: ID!) {
        uploadFiles(filters: { documentId: { eq: $id } }) {
            url
            documentId
            name
            formats
        }
    }
`
