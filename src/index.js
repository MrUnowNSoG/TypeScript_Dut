"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
// Модальне вікно
const modalTriggers = document.querySelectorAll('.special');
modalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Модальне вікно: тут може бути додаткова інформація!');
    });
});
// Подія скролу: зміна класу для header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header === null || header === void 0 ? void 0 : header.classList.remove('alt'); // Видаляємо клас 'alt' при прокрутці вниз
    }
    else {
        header === null || header === void 0 ? void 0 : header.classList.add('alt'); // Додаємо клас 'alt', якщо на початку сторінки
    }
});
// Відкрити меню при натисканні на <a href="#menu">
const menuLink = document.querySelector('a[href="#menu"]');
const menu = document.getElementById('menu');
if (menuLink && menu) {
    menuLink.addEventListener('click', (event) => {
        event.preventDefault();
        // Додаємо клас для body
        document.body.classList.add('is-menu-visible');
        // Застосовуємо стилі для меню
        menu.style.pointerEvents = 'auto';
        menu.style.opacity = '1';
        menu.style.visibility = 'visible';
    });
    // Закрити меню при натисканні поза межами меню
    window.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && event.target !== menuLink) {
            // Видаляємо клас з body
            document.body.classList.remove('is-menu-visible');
            // Повертаємо меню до початкових властивостей
            menu.style.pointerEvents = 'none';
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
        }
    });
    // Додатково, закриваємо меню, якщо натиснуто кнопку всередині меню
    (_a = menu.querySelector('.close')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        document.body.classList.remove('is-menu-visible');
        menu.style.pointerEvents = 'none';
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
    });
}
// Fetch API дані
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
        const data = yield response.json();
        displayPosts(data);
    }
    catch (error) {
        console.error('Помилка отримання даних:', error);
    }
});
const displayPosts = (posts) => {
    const postSection = document.createElement('section');
    postSection.classList.add('wrapper', 'spotlight', 'style1');
    postSection.innerHTML = '<h2 class="major">API Posts</h2>';
    posts.slice(0, 5).forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('content');
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        postSection.appendChild(postDiv);
    });
    document.body.appendChild(postSection);
};
// Викликати fetch для отримання даних
fetchData();
// Видалення класу "is-preload" через 1 секунду після завантаження сторінки
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.remove('is-preload');
    }, 1000); // 1000 мс = 1 секунда
});
