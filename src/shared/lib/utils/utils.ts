import { useEffect, useState } from 'react'

type FormattedDate = {
    year: number,
    month: number,
    day: number,
    date: number
}

export function getCurrentDate(): FormattedDate {
    const date = new Date();

    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDay(),
        date: date.getDate()
    } as const;
}

export const useMedia = (query: string) => {
    const [matches, setMatches] = useState<boolean>(true);
    query = `(${query})`;

    const handleChange = () =>
        setMatches(window.matchMedia(query).matches);

    useEffect(() => {
        handleChange();;

        const matchMedia = window.matchMedia(query);

        matchMedia.addEventListener('change', handleChange);

        return () =>
            matchMedia.removeEventListener('change', handleChange);
    }, [query]);

    return matches;
}