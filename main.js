console.log('siema');
const name = 'Kuba';
const age = 38;
console.log(`Witam Ogarze na mojej stronie, nazywam się ${name} i mam ${age} lat, wspaniale, ze tutaj jestes 🤪`);

const diary = document.querySelector('.diary__paragraph--js');
console.log(diary.innerHTML);
diary.innerHTML = '<b>Pozdro</b> JS!!!'

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[2])



if (age < 20) {
    console.log('masz mniej niz 20 lat');
}
else if ((age >= 20) && (age <= 30)) {
    console.log('masz więcej niz 20 ale mniej niz 30');
}
else {
    console.log('jesteś 31+');
}



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