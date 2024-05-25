import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function toSnakeCase(inputStr) {
    // Split the input string into words based on non-alphanumeric characters
    const words = inputStr.split(/[^a-zA-Z0-9]/).filter(Boolean);
    
    // Join the words with underscores and convert to lowercase
    const snakeCaseStr = words.join('_').toLowerCase();
    
    return snakeCaseStr;
}