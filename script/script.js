const nums = document.querySelectorAll('.num');
const numsParent = document.querySelector('.choice')
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

// function addActive() {
//     nums.forEach(item => {
//         item.classList.add('active')
//     })
// }

// function removeActive() {
//     nums.forEach(item => {
//         item.classList.remove('active')
//     })
// }

// nums.addEventListener('click', (event) => {

//     if (item.classList.contains('active')) {
//         nums.forEach((item, i) => {
//             if (target === item) {
//                 removeActive();
//                 addActive(i);
//             }
//         });
//     }
// })



btn.addEventListener('click', () => {
    console.log("click")
})