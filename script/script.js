const nums = document.querySelectorAll('.num');
const btn = document.querySelector('button');

nums.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('active')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    })
})







btn.addEventListener('click', () => {
    console.log("click")
})