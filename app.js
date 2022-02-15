"use strict"; //режим современного кода

let number1 = 5; //обьявление переменной и ее значения (изменяемая)
const leftBorderWidth = 1; //обьявление переменной и ее значения (НЕ изменяемое)
console.log(number1); //вывод результата команды в консоль терминала
//_____________________________________________________________________________типы данных_______________________
let number = 4.6; //числовой тип данных
console.log(4 / 0); //'Infinity' бесконечность
console.log("string" * 9); //'NaN' нет числа

let persone = "Andrew"; //строчный тип данных
persone = "777"; //тоже строка

let bool = false; //булиновый тип данных ('да'или'нет')
bool = true;
//console.log(something); //'NaN' ссылка на не существующий объект
let und;
console.log(und); //'undefined' пустой объект

const obj = {
  //объект, объединяет в себе разные типы данных
  name: "Andrew", //двоеточие и запятые в конце
  age: 24,
  isMarried: false,
};
//console.log(obj.name); // обратились к свойсту объекта 'name'

let arr = ["plum.png", "orange.jpg", 6, "apple.bmb"];
//массив, все элементы имеют порядковый номер и идут через запятую, помещает любые типы данны
console.log(arr[1]); //обращение к 1му элементу 'oranhe.jpg'

//_________________________________________________________________________общение с пользователем____________________

alert("Hello"); //всплывающее окно с подтверждением действия, булиновое

const result = confirm("Are you here"); //всплывающее окно с вопросом к пользователю, булиновое
console.log(result); //обращение в консоль к переменной 'result'. Ответ булиновый

const answer = prompt("Вам есть 18?", ""); //вопрос к пользователю с полем для ответа " "
console.log(answer); //вывод ответа пользователя в консоль. Все ответы от пользователя приходят в виде строк!(+ число)

const answers = []; //массив, с вопросами по порядку
answers[0] = prompt("Как ваше имя?", "");
answers[1] = prompt("Как ваша фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");

console.log(typeof answers); //вывод в консоль значения

//______________________________________________________________________интерполяция______________________________

const category = "toys"; //Динамическая интерполяция значения переменной в неограниченном количестве
console.log(`https://someurl.com/${category}`);

const user = "Andrewlev";
alert(`Привет, ${user}`);

//____________________________________________________________________логические операторы________________________

console.log("arr" + "- object"); //строка из двух слов
console.log(444 + "- object"); //тоже строка из числа и слова
//console.log(40 + +"50"); //числовое значение с унарным плюсом перед '5'

let incr = 10,
  decr = 10;

incr++; //оператор инкромента, увеличение на еденицу  (постфиксный)
decr--; //оператор декремента, уменьшение на еденицу (постфиксный)
//префиксный оператор используется в консоли, плюс перед значением
console.log(incr);
console.log(decr);

//console.log( 2 * 4 = 8 ); //присвоение значения
console.log(2 * 4 == 8); //сравнение значений, действительно ли равно
console.log(2 * 4 === "8"); //cтрогое сравнение значений, вместе с типами данных

//&& //оба варианта правда
//|| //один из вариантов правда

const isChecked = true,
  isClose = true;
console.log(isChecked && isClose); //если добавить оператор восклицания "!", он поменяет значение на противоположное

// '!=' не равно,  '!==' строго не равно вместе с типами данных

//__________________________________________________________________система контроля версий 'GIT'______________________
//git init - инициировать репозиторий
//git config --global user.name 'Andrew'   -  имя
//git config --global user.email 'Andrew'  - емеил
//git status   - проврека контрольных точек объекта (commits)
//git add -A  -все файлы репозитория добавляются в локальный GIT
//git add main.css -добавить новый css файл в локальный репозиторий
//git commit -a -m'first commit' -cохранение в локальный репозиторий, имя файла в каждом менять
//git log  -вывод всех созданных коммитов в терминал с датами и названиями
// далее закидываем репозиторий в хранилище GitHub копируя ссылку 'git remote add...'
// далее сохраняем файл в хранилище с помощью команды 'git push -u origin main'

//Добавление нового 'js' файла в существующий репозиторий
//git add -A   cохранение на локальный репозиторий GIT
//git commit -a -m'add script file'  -добавить новый файл в локальный и удаленный репозиторий
//git push  -сохранение на удаленный репозиторий в GitHub

//______________________________________________________________cинхронизация между пользователями в 'GIT'_____________
//на GitHub скопировать ссылку на репозиторий 'Clone or download'
//cкопировать в терминале VSCode данную ссылку и написать название папки для копирования
//git pull  -обновление содержания репозитория открыв его с другого ПК !!!
//git push  -загрузить измененный файл на удаленный репозиторий в GitHub
