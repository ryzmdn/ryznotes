export function decodeHtmlEntities(text: string): string {
  if (typeof text !== "string") {
    return text;
  }

  const htmlEntities: Record<string, string> = {
    "&nbsp;": " ",
    "&#8217;": "'",
    "&#8220;": '"',
    "&#8221;": '"',
    "&quot;": '"',
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
  };

  let decodedText = text;

  Object.entries(htmlEntities).forEach(([entity, char]) => {
    decodedText = decodedText.replace(new RegExp(entity, "g"), char);
  });

  return decodedText;
}
