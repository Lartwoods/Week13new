/*--1-------*/
let cleaner = 40000;
let vocals = 22000;
console.log(cleaner + vocals);

/*--2-------*/
let songName = "Владивосток";
let number = 2000;
console.log(songName + " " + number);

/*--3-------*/
let messg = 128;
let photo = 254;
let VK = 137;
let youtube = 201;
let myHours = (messg + photo + VK + youtube) / 60;
console.log(myHours + " часов");

/*--4-------*/
console.log(2 ** 5);

/*--5-------*/
let text =
  "Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!";
console.log(text);

/*--6-------*/
const greetings = "Привет";
const name = "Кот";
console.log(`${greetings}, ${name}`);

/*--7-------*/
let time;
console.log(time);
time = 34;
console.log("Старт поездки. Осталось минут: " + time);
time -= 15;
console.log("Немного сторис в соцсетях. Осталось минут: " + time);
time -= 10;
console.log("Немного не новостей, но событий. Осталось минут: " + time);
time = 0;
console.log("Вы приехали. Добро пожаловать в Москву");

/*--8-------*/
let fahrenheit = 451;
let celsius = (fahrenheit - 32) / 1.8;
console.log(
  `${fahrenheit} градусов по Фаренгейту - это ${celsius} градусов по Цельсию`
);
