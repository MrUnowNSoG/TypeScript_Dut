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
        header?.classList.remove('alt');
    } else {
        header?.classList.add('alt');
    }
});

// Відкрити меню
const menuLink = document.querySelector('a[href="#menu"]');
const menu = document.getElementById('menu');

if (menuLink && menu) {
    menuLink.addEventListener('click', (event) => {
        event.preventDefault();
 
        document.body.classList.add('is-menu-visible');

        menu.style.pointerEvents = 'auto';
        menu.style.opacity = '1';
        menu.style.visibility = 'visible';
    });

    // Закрити меню при натисканні 
    window.addEventListener('click', (event) => {
        if (!menu.contains(event.target as Node) && event.target !== menuLink) {

            document.body.classList.remove('is-menu-visible');

            menu.style.pointerEvents = 'none';
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
        }
    });

    //закриваємо меню
    menu.querySelector('.close')?.addEventListener('click', () => {
        document.body.classList.remove('is-menu-visible');
        menu.style.pointerEvents = 'none';
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
    });
}

// Fetch
const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        displayPosts(data);
    } catch (error) {
        console.error('Помилка отримання даних:', error);
    }
};

const displayPosts = (posts: any[]) => {
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
fetchData();

window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.remove('is-preload');
    }, 1000);
});
