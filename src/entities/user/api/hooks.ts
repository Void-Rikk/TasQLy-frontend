import { useQuery } from "@apollo/client/react";
import { GET_ME } from "./queries.ts";

export function useMe() {
    return useQuery(GET_ME);
}