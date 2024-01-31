

  let month = document.querySelector('.select-package .month');
  let year = document.querySelector('.select-package .year');
  let monthAmount = document.querySelector('.container .pricing-card .month') 
  let yearAmount = document.querySelector('.container .pricing-card .year') 

  year.onclick = () => {
       year.classList.add('active')
       month.classList.remove('active')

       
       monthAmount.forEach( mo => {mo.style.display = 'none'});
       yearAmount.forEach( yr => {yr.style.display = 'block'});
  }

  month.onclick = () => {
     year.classList.remove('active')
     month.classList.add('active')

     
     monthAmount.forEach( mo => {mo.style.display = 'block'});
     yearAmount.forEach( yr => {yr.style.display = 'none'});
}