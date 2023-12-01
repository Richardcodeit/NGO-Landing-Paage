const nav  = document.querySelector(".nav")
            const show =  document.getElementById("open")
            const hide = document.getElementById("close")
            const open = ()=>{
                nav.classList.add("active")
                show.style.display = "none"
            }
            const close = ()=>{
                nav.classList.remove("active")
                show.style.display = "block"
            }
            show.addEventListener("click" , open)
            hide.addEventListener("click", close)

        const container = document.querySelector(".container")
        const cards =  document.querySelector(".card").offsetWidth
        console.log(cards)
        let currentWidth =  0

        const Slide =  (index)=>{
            currentWidth = index;
            if(index > 0 && index < 5){
                let translateX = (-currentWidth * cards) - 60

                  console.log(translateX)
                container.style.transform = `translateX(${translateX}px)`
            }
        }
        function next(){
            Slide(currentWidth + 1)
        }
        function prev(){
            Slide(currentWidth - 1)
        }
        document.querySelector(".next").addEventListener("click" , next)
        document.querySelector(".prev").addEventListener("click" ,  prev)
      