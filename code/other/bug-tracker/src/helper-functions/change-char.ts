export default function lowerCaseFirstLetter(string: string) {
   if (string) return string.charAt(0).toLowerCase() + string.slice(1);
}
