export const extractText = (node) => {
  let text = '';
  if (node.text) {
    text += node.text + ' ';
  }
  if (node.children) {
    node.children.forEach(child => {
      text += extractText(child);
    });
  }
  return text;
}
