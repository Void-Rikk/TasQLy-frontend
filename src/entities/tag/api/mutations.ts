import { gql, type TypedDocumentNode } from "@apollo/client";
import type { Tag } from "../model/types.ts";


type CreateTagMutation = {
    createTag: Tag,
}

type CreateTagMutationVariables = {
    input: {
        name: string,
    }
}

export const CREATE_TAG: TypedDocumentNode<
    CreateTagMutation,
    CreateTagMutationVariables
> = gql`
    mutation CreateTag($input: CreateTagInput!) {
        createTag(input: $input) {
            id
            name
        }
    }
`;

type DeleteTagMutation = {
    deleteTag: boolean,
}

type DeleteTagMutationVariables = {
    id: string,
}

export const DELETE_TAG: TypedDocumentNode<
    DeleteTagMutation,
    DeleteTagMutationVariables
> = gql`
    mutation DeleteTag($id: ID!) {
        deleteTag(id: $id)
    }
`;