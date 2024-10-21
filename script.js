// Функция для генерации и анимации цифр "52"
const generateRandomNumbers = () => {
    const numbersContainer = document.querySelector('.numbers-container');
    const numberOfNumbers = 20; // Количество цифр "52"
    const colors = ['blue', 'green','yellow']; // Возможные цвета
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 0; i < numberOfNumbers; i++) {
        const numberElement = document.createElement('div');
        numberElement.textContent = '52';
        numberElement.classList.add('number-52');
        numberElement.style.left = Math.floor(Math.random() * (width - 50)) + 'px';
        numberElement.style.top = Math.floor(Math.random() * (height - 20)) + 'px';
        numberElement.style.color = colors[Math.floor(Math.random() * colors.length)];
        numberElement.style.animationDelay = `${Math.random() * 5}s`; // Случайная задержка перед началом анимации
        numbersContainer.appendChild(numberElement);
    }
}

// Запуск функции после загрузки страницы
window.onload = generateRandomNumbers;

// Функция для генерации случайного числа "5" или "2"
const getRandomNumber = () => {
    const symbols = ['5', '2'];
    return symbols[Math.floor(Math.random() * symbols.length)];
};

// Функция для запуска слотов
const spinSlots = () => {
    const slot1 = getRandomNumber();
    const slot2 = getRandomNumber();

    document.getElementById('slot1').textContent = slot1;
    document.getElementById('slot2').textContent = slot2;

    if (slot1 === '5' && slot2 === '2') {
        triggerCelebration();
    }
};

// Функция для создания салюта
const triggerCelebration = () => {
    const numbersContainer = document.querySelector('.numbers-container');
    const numberOfElements = 200; // Количество цифр "52"
    const colors = ['#e74c3c', '#f1c40f', '#2ecc71', '#9b59b6', '#3498db'];

    for (let i = 0; i < numberOfElements; i++) {
        const numberElement = document.createElement('div');
        numberElement.textContent = '52';
        numberElement.classList.add('number-52');
        numberElement.style.left = Math.random() * 100 + 'vw';
        numberElement.style.top = Math.random() * 100 + 'vh';
        numberElement.style.color = colors[Math.floor(Math.random() * colors.length)];
        numberElement.style.fontSize = Math.floor(Math.random() * 30 + 30) + 'px';
        numberElement.style.animationDelay = `${Math.random() * 3}s`;
        numbersContainer.appendChild(numberElement);
    }

    // Удалить салют после завершения анимации
        setTimeout(() => {
        numbersContainer.innerHTML = '';
    }, 3000); // Должно совпадать с длительностью анимации
};

// Назначаем обработчик на кнопку "Играть"
document.getElementById('spin-button').addEventListener('click', spinSlots);

// Дополнительно: Предзагрузка некоторых элементов салюта при загрузке страницы
window.onload = () => {
    // Можно добавить любые дополнительные инициализации здесь
};