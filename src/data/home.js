const modules = import.meta.glob('../content/home/*.json', { eager: true, import: 'default' });
export function getHomeCopy(lang) {
  return modules['../content/home/' + lang + '.json'] || modules['../content/home/en.json'];
}
