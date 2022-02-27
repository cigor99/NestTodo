export const isSameDay = (givenDate: Date, dateToCheck: Date): boolean => (
    givenDate.toDateString() === dateToCheck.toDateString()
)