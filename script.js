
const video1 = document.querySelectorAll(".img-col video").forEach((e)=>{
      e.addEventListener("mouseenter",() =>{
                        e.play();
      }
    )
      e.addEventListener("mouseleave",() =>{
                        e.pause();
      }
    )
})

const signBtn = document.querySelector('.login')

signBtn.addEventListener('click',()=>{
   alert('Your Email Address is Successfully Add')
})

document.querySelector('.main-img').src = 'https://pin.it/qMfsOhIr0';





