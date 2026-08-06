import { useQuery } from "@apollo/client/react";
import { GET_TAGS } from "./queries.ts";


export function useTags() {
    return useQuery(GET_TAGS);
}