const t=document.querySelector(".header-burger"),c=document.querySelector(".header-nav"),e=document.querySelectorAll(".header-menu__link"),r=document.querySelector("body");t.addEventListener("click",e=>{e.target.classList.toggle("active"),c.classList.toggle("active"),r.classList.toggle("lock")}),e.forEach(e=>{e.addEventListener("click",e=>{t.classList.remove("active"),c.classList.remove("active"),r.classList.remove("active")})});for(let t of document.querySelectorAll('a[href*="#"]'))t.addEventListener("click",function(e){e.preventDefault();e=t.getAttribute("href").substr(1);document.getElementById(e).scrollIntoView({behavior:"smooth",block:"start"})});