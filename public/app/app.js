const dark = document.querySelector(".btn_moon");
const light = document.querySelector(".btn_light");
const card = document.querySelector(".card");

dark.addEventListener('click', () => {
    card.classList.add('dark:bg-gray-800');
    card.classList.add('dark:text-gray-100');
});
light.addEventListener('click', () => {
    card.classList.remove('dark:bg-gray-800');
    card.classList.remove('dark:text-gray-100');
});