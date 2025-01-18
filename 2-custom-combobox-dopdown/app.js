const comboboxContainer = document.querySelector('.combobox-container');

const comboboxTitle = document.createElement('p');
comboboxTitle.innerHTML = 'Your Favorite Holiday Movie';

const arrowSpan = document.createElement('span');
const dropArrow = document.createElement('img');
dropArrow.src = 'dropdown-arrow.svg';

let movieLibrary = [
    {
        title: 'Christmas Carol',
        year: 1951,
        img: 'christmas-carol.png',
    },
    {
        title: `National Lampoon's Christmas Vacation`,
        year: 1989,
        img: `christmas-vacation.png`,
    },
    {
        title: `Die Hard`,
        year: 1988,
        img: `die-hard.png`,
    },
    {
        title: `Home Alone`,
        year: 1990,
        img: `home-alone.png`,
    },
    {
        title: `It's a Wonderful Life`,
        year: 1946,
        img: `its-a-wonderful-life.png`,
    },
    {
        title: `Rudolph the Red-Nosed Reindeer`,
        year: 1964,
        img: `rudolph-the-red-nosed-reindeer.png`,
    },
]

window.addEventListener('load', () => {
    comboboxContainer.appendChild(comboboxTitle);
    comboboxContainer.appendChild(dropArrow);
})