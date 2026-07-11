export function stripHtml(value = '') {
  return String(value)
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getBlockText(block) {
  if (typeof block === 'string') {
    return stripHtml(block);
  }

  if (block && typeof block === 'object') {
    return [block.text, block.caption, block.alt]
      .filter(Boolean)
      .join(' ');
  }

  return '';
}

export function getMaterialExcerpt(item) {
  const firstTextBlock = Array.isArray(item?.content)
    ? item.content.find(block => getBlockText(block))
    : null;

  return item?.lead || item?.excerpt || getBlockText(firstTextBlock);
}
