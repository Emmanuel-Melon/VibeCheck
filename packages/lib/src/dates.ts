import { parseISO, format, formatDistanceToNow } from "date-fns";

export const formatDateTime = (dateISO: any, formatPattern = "MMMM d, yyyy HH:mm") => {
    const parsedDate = parseISO(dateISO);
    return format(parsedDate, formatPattern);
}

export const getRelativeDate = (dateISO: any) => {
    const parsedDate = parseISO(dateISO);
    const relativeDate = formatDistanceToNow(parsedDate, { addSuffix: true });
}