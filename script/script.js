const wrapper = document.querySelector('.choice')
const btn = document.querySelector('button');

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


btn.addEventListener('click', () => {
    window.location.href = 'thank.html';
})