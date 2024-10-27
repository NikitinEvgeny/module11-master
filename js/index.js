// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления


// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind":"Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);
const display = () => {
  console.log(fruits);
fruitsList.innerHTML = "";

  for (let i = 0; i < fruits.length; i++) {
let newLi = document.createElement('li');
newLi.classList.add('fruit__item');
fruitsList.appendChild(newLi);
let newDiv = document.createElement('div');
newDiv.classList.add('fruit__info');
newLi.appendChild(newDiv);
let indexDiv = document.createElement('div');
indexDiv.innerHTML = `index: ${i}`;
newDiv.appendChild(indexDiv);


 for (let prop in fruits[i]) {
let FruitsInfo = document.createElement('div');
newDiv.appendChild(FruitsInfo);
let fruitInfo;
if (prop == "weight")
{ fruitInfo =  "weight (кг)" }
else 
{fruitInfo =  prop } 

FruitsInfo.innerHTML = `${fruitInfo} : ${fruits[i][prop]}`

}

if ( fruits[i].color == "фиолетовый")
{
   newLi.classList.add('fruit_violet')
  }    
else if (fruits[i].color == "зеленый")
{
  newLi.classList.add('fruit_green')
}
else if (fruits[i].color == "розово-красный")
  {
    newLi.classList.add('fruit_carmazin')
  }
  else if (fruits[i].color == "желтый")
    {
      newLi.classList.add('fruit_yellow')
    }
    else if (fruits[i].color == "светло-коричневый")
      {
        newLi.classList.add('fruit_lightbrown')
      }

}
};

display();

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


const shuffleFruits = () => {
  let result = [];
  let RandomEruits =[...fruits]

  while (fruits.length > 0) {
   let Random = getRandomInt(0, fruits.length-1)
   result.push(fruits[Random]);
   fruits.splice(Random,1);
  }
   
  fruits = result;
  
  if (JSON.stringify(fruits) === JSON.stringify(RandomEruits))
    
 {
   alert('Расположение элементов осталось прежним')
 }


};
 




shuffleButton.addEventListener('click', () => {
  shuffleFruits();
  
  display();
});

const filterFruits = () => {
const min = document.querySelector('.minweight__input').value;
const max = document.querySelector('.maxweight__input').value;
let fruct = fruits.filter((item) => {
    console.log(item.weight);
    if (item.weight >= min && item.weight <= max)
    { 
      return item    }
  });

  fruits = fruct;
};

filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});


/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки


 const comparationColor = (a, b) => {
    for (let i = 0; i < fruits.length; i++) {
      if (a[i].color === b[i].color) {
        return alert('одинаковые цвета')
      }
    }
  };
  
  const sortAPI = {
    
    bubbleSort(arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j].color > arr[j + 1].color) {
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
          }
        }
      }
    },
  

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки

  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
   display();
    this.sortTime;
    sortTimeLabel.textContent = sortTime; 
    

  // TODO: вывести в sortTimeLabel значение sortTime
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  display();
});
