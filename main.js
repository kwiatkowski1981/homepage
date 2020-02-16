console.log('siema');
const name = 'Kuba';
const age = 38;
console.log(`Witam Ogarze na mojej stronie, nazywam się ${name} i mam ${age} lat, wspaniale, ze tutaj jestes 🤪`);

const diary = document.querySelector ('.diary__paragraph--js');
console.log(diary.innerHTML);
diary.innerHTML = '<b>Pozdro</b> JS!!!'

const paragraphs = document.querySelectorAll ('p');
console.log(paragraphs);
console.log(paragraphs[2])