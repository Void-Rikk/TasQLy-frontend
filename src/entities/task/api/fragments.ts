import { gql } from "@apollo/client";


export const NEW_TASK_FRAGMENT = gql`
    fragment NewTask on Task {
        id
        title
        description
        status
        priority
        tags {
            id
            name
        }
    }
`;