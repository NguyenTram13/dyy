window.addEventListener("load", function(){
    function renderSweetAlert(){
        const template= `
        <div class="sweet-alert ">
        
        <p class="sweet-text">Gửi đi ạ.Yêu Yêu</p>
         <i class="fa-solid fa-heart sweet-icon"></i>
    </div>
        `;
        document.body.insertAdjacentHTML("beforeend",template);

        }
        const left =document.querySelector(".button-left");
        // const button =document.querySelector(".button")
        left.addEventListener("click", function(){
            
            renderSweetAlert();
            const sweetItem =  document.querySelector(".sweet-alert");
            console.log(sweetItem)
            sweetItem.classList.add("tranlate0")
            // if(sweetItem){
            //     setTimeout(function(){
            //         sweetItem.parentElement.removeChild(sweetItem);

            //     },2000)
            // }
        })

        const no = this.document.querySelector('.button-right');
        no.addEventListener("mouseenter",function(){
                
                let scrollleft  = Math.floor(Math.random() * 200 );
                let scrolltop  = Math.floor(Math.random() * 500 );

                let position  = ["scrolltop",'scrollright','scrollleft','scrollbot']
                console.log(scroll);
                no.style.left = `${scrollleft}px`;
                no.style.top = `${scrolltop}px`;

        })
        no.addEventListener("click",function(){
                
            let scrollleft  = Math.floor(Math.random() * 200 );
            let scrolltop  = Math.floor(Math.random() * 500 );

            let position  = ["scrolltop",'scrollright','scrollleft','scrollbot']
            console.log(scroll);
            no.style.left = `${scrollleft}px`;
            no.style.top = `${scrolltop}px`;

    })
})