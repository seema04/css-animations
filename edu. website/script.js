// change navbar styles on scroll.

window.addEventListener('scroll',() =>{
  document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0);
})

// opening paragraph of faqs

const faqs = document.querySelectorAll('.faq');
const faqP = document.querySelectorAll('.ques-ans p');

faqs.forEach(faq => {
  faq.addEventListener("click", ()=>{
    faq.classList.toggle('open');

    // change plus icon when the ans is open.
    const icon = faq.querySelector('.faq-icon i');
    if(icon.className == 'uil uil-plus'){
      icon.className = 'uil uil-minus';
    }
    else{
      icon.className = 'uil uil-plus';
    }
  });
})


// ================= displaying nav menu on clicking hamburger menu ===================

const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const navMenu = document.querySelector('.nav-menu');

const navLinks = navMenu.querySelectorAll('.nav-menu a');

  openBtn.addEventListener('click',() => {
  navMenu.style.display = 'flex';
  closeBtn.style.display = 'inline-block';
  openBtn.style.display = 'none';


})

// close nav menu btn

const closeNavMenu = () => {
  navMenu.style.display = 'none';
  openBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
}

closeBtn.addEventListener('click',closeNavMenu);
