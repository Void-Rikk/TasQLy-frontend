import { gql, type TypedDocumentNode } from "@apollo/client";
import type { Tag } from "../model/types.ts";


type GetTagsQuery = {
    tags: Tag[],
}

type GetTagsQueryVariables = Record<string, never>;

export const GET_TAGS: TypedDocumentNode<
    GetTagsQuery,
    GetTagsQueryVariables
> = gql`
    query GetTags {
        tags {
            id
            name
        }
    }
`;