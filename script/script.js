const wrapper = document.querySelector('.choice');
const btn = document.querySelector('button');
const select = document.querySelector('span');

//V-1
// (function(){
//     wrapper.addEventListener('click', function(e) {
//     let buttons = document.querySelectorAll('.num');
//     let target = e.target;
//     if(!target.classList.contains('wrapper')) {
//     	  [].forEach.call(buttons, function(elem){ 
//      		 elem.classList.remove('active');
//    		  });
//    		   target.classList.add('active');
//     }
// 	})
// })();

//V-2
(function(){
    wrapper.addEventListener('click', function(e) {
    let buttons = document.querySelectorAll('.num');
    let target = e.target;

    Object.values(buttons).forEach((btn) => {
      btn.classList.remove('active');
    });

    target.classList.add('active');
 })
})();


btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'thank.html';
})

function newValur() {
    select.innerHTML = target
}