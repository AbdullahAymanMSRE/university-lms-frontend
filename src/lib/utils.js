import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function toCamelCase(str) {
	return str
	  // Split the string into words using a regular expression that looks for spaces
	  .split(' ')
	  // Map each word to a function that will handle the capitalization
	  .map((word, index) =>
		// If it's the first word, convert it to lower case
		index === 0 ? word.toLowerCase() :
		// Otherwise, convert the first letter to upper case and add the rest of the word in lower case
		word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
	  )
	  // Join all the words back into a single string
	  .join('');
  }