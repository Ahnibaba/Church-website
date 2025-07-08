
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function getDayName(day: number): string {
    if (day < 0 || day > 6) throw new Error("Invalid");
    return daysOfWeek[day];
}

type monthObj = {
    "name": string,
    "abbrev": string
}

const months = [
    {
        name: "January",
        abbrev: "Jan",
    },
    {
        name: "February",
        abbrev: "Feb",
    },
    {
        name: "March",
        abbrev: "Mar",
    },
    {
        name: "April",
        abbrev: "Apr",
    },
    {
        name: "May",
        abbrev: "May",
    },
    {
        name: "June",
        abbrev: "Jun",
    },
    {
        name: "July",
        abbrev: "Jul",
    },
    {
        name: "August",
        abbrev: "Aug",
    },
    {
        name: "September",
        abbrev: "Sep",
    },
    {
        name: "October",
        abbrev: "Oct",
    },
    {
        name: "November",
        abbrev: "Nov",
    },
    {
        name: "December",
        abbrev: "Dec",
    }
];

export function getMonthName(month: number): monthObj {
    if (month < 0 || month > 11) throw new Error("Invalid");
    return months[month];
}


