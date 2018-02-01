
export function epicURLCreator(epic) {
  const URL = 'https://epic.gsfc.nasa.gov/archive/natural',
        epicDate = epic.date.split(' ').slice(0, 1)[0].replace(/\-/gm, '/'),
        image = epic.image;
  return `${URL}/${epicDate}/jpg/${image}.jpg`;
}
