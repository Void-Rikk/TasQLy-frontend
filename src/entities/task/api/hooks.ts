import { useQuery } from "@apollo/client/react";
import { GET_USERS } from "./queries.ts";

export function useTasks() {
    return useQuery(GET_USERS);
}