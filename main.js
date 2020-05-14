console.log('siema');
const name = 'Kuba';
const age = 38;
console.log(`Witam Ogarze na mojej stronie, nazywam się ${name} i mam ${age} lat, wspaniale, ze tutaj jestes 🤪`);

console.log('*************************************');


const diary = document.querySelector('.diary__paragraph--js');
console.log(diary.innerHTML);
diary.innerHTML = '<b>Pozdro</b> JS!!!'

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[1])

console.log('*************************************');

if (age < 20) {
    console.log('masz mniej niz 20 lat');
}
else if ((age >= 20) && (age <= 30)) {
    console.log('masz więcej niz 20 ale mniej niz 30');
}
else {
    console.log('jesteś 31+');
}

console.log('*************************************');

switch (age) {

    case 20:
        console.log('masz równo 20 lat');
        break;

    case 30:
        console.log('masz równo 30 lat')
        break;

    default:
        console.log(`masz ${age} lat`);
        break;
}


const amIold = (age > 70) ? 'yes' : 'no';
console.log(amIold);
console.log('*************************************');




const navigationSwitcher = document.querySelector('.navigation__switcher--js')


navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
    const navigationSwitcher = document.querySelector('.navigation__switcher--js')
    if (navigationList.classList.contains('navigation__list--visible')) {
        navigationSwitcher.innerHTML = 'X';
    } else {
        navigationSwitcher.innerHTML = '&#9776;';
    }

});
console.log('*************************************');

// Objekty


const deathStar = {
    diameter: 120000,
    fire: (target) => {
        return console.log(`${target} destroyed 💩`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000,
    crew: {
        role: 'capitan',
        name: 'deathstar capitan',
        doc: {
            gr: 'wszystkie',
            name: 'paszport polsatu',
        }
    }
}

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');


for (let propertyName in deathStar) {
    console.log(`${propertyName}: ${deathStar[propertyName]}`);
}
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

console.log(deathStar)
console.log(deathStar.population)
console.log(deathStar.crew.name)
console.log(deathStar.crew.doc.name)

deathStar.fire('dupa');

const news = [
    {
        title: 'wtf',
        content: 'lorem ipsum...'
    },
    {
        title: 'co ten frontend',
        content: 'lorem ipsum...',
        link: 'https://cotenfrontend.pl'
    }
]
console.log('*************************************');
console.log(news);
console.log(news[0]);
console.log(news[1]);

console.log(news.length);

console.log('*************************************');

for (let i = 0; i < 10; i++) {
    console.log(`${i} wykonanie pętli`);
}

console.log('*************************************');

let a = 10;

while (a > 0) {
    a--;
    console.log(a, 'czegoś tam')

}

console.log('*************************************');