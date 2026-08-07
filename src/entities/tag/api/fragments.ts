import { gql } from "@apollo/client";


export const NEW_TAG_FRAGMENT = gql`
    fragment NewTag on Tag {
        id
        name
    }
`;