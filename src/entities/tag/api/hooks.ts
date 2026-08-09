import { useMutation, useQuery } from "@apollo/client/react";
import { GET_TAGS } from "./queries.ts";
import { CREATE_TAG, DELETE_TAG } from "./mutations.ts";
import { NEW_TAG_FRAGMENT } from "./fragments.ts";


export function useTags() {
    return useQuery(GET_TAGS);
}

export function useCreateTag() {
    return useMutation(CREATE_TAG, {
        update(cache, { data }) {
            if (!data) return;

            const newTag = data.createTag;

            cache.modify({
               fields: {
                   tags(existingTags = []) {
                       const newTagRef = cache.writeFragment({
                           data: newTag,
                           fragment: NEW_TAG_FRAGMENT
                       });
                       return [...existingTags, newTagRef];
                   }
               }
            });
        }
    });
}

export function useDeleteTag() {
    return useMutation(DELETE_TAG, {
        update(cache, { data }, { variables }) {
            if (!data || !variables) return;

            if (data?.deleteTag) {
                cache.evict({ id: cache.identify({ __typename: "Tag", id: variables.id }) });
                cache.gc();
            }
        }
    });
}