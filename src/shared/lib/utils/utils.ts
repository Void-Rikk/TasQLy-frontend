

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