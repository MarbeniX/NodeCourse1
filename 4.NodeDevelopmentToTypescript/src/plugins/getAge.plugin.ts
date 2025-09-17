import { AgeFromDate } from "age-calculator";

export const getAge = (birthdate: Date) => {
    if (!birthdate) throw new Error("Birthdate is required");
    return new AgeFromDate(birthdate).age;
};
