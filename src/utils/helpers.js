export function removeHyphensAndCapitalize(string) {
    return string.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase())
}
  