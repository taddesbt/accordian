
const panels = document.querySelectorAll('.panel');
//console.log(accordion);

panels.forEach(function (ele) {
    //   console.log(ele);
      ele.addEventListener('click', toggleEle);
    })
    

function toggleEle(e) {
        //   console.log(e.target.parentElement);
         
          panels.forEach(function (elem) {
            if (e.target.parentElement === elem) {
              elem.classList.toggle('active');
            }
            else {
              elem.classList.remove('active');
            }
          })
        }