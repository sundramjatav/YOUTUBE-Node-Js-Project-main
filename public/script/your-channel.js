MenuLeftBtn()
// menu left btn click
function MenuLeftBtn(){

    // left nav bar slider
    flag = 0;
    document.querySelector(".nav-left i").addEventListener("click",()=>{
        if (flag == 0){
            document.querySelector(".menu-left").style.left = "-40vh"
            document.querySelector(".container-right").style.width = "calc(100% - 12vh)"
            document.querySelectorAll("#card").forEach(elem=>{
                elem.style.width = "47vh"
                elem.style.height = "41vh"
                elem.querySelector(".img2").style.width = "2.6vmax"
                elem.querySelector(".img2").style.height = "2.6vmax"
            })

            flag = 1;
        }else{
            document.querySelector(".menu-left").style.left = "0vh"
            document.querySelector(".container-right").style.width = `calc(100% - 40vh)`
            document.querySelectorAll("#card").forEach(elem=>{
                elem.style.width = "54vh"
                elem.style.height = "46vh"
                elem.querySelector(".img2").style.width = "3.1vmax"
                elem.querySelector(".img2").style.height = "3.1vmax"
            })
            flag = 0;
        }
    })

    //img hover effect video play and pause effect
    document.querySelectorAll(".img").forEach(elem=>{
        elem.addEventListener("mouseenter",()=>{
            elem.querySelector(".img video").play()
            elem.querySelector(".img img").style.display = "none"
        })
        elem.addEventListener("mouseleave",()=>{
            elem.querySelector(".img video").pause()
            elem.querySelector(".img video").load()
            elem.querySelector(".img img").style.display = "block"
        })
    })


    document.querySelectorAll(".menu-left-full-item").forEach((elem,index)=>{
        elem.addEventListener("click",()=>{

        })
    })
}

// upload btn click
UploadBtn();
function UploadBtn(){
    flag = 0;
    document.querySelector(".upload-btn").addEventListener("click",()=>{
        if (flag == 0){
            document.querySelector("#upload").style.display = "block"
            // document.querySelector(".container-right").style.width = "calc(100% - 12vh)"
            flag = 1;
        }else{
            document.querySelector("#upload").style.display = "none"
            // document.querySelector(".container-right").style.width = `calc(100% - 40vh)`
            flag = 0;
        }
    })
}


AccountBtn()
//  account btn click
function AccountBtn(){
    flag = 0;
    document.querySelector(".nav-right #account").addEventListener("click",()=>{
        if (flag == 0){
            document.querySelector("#menu-right").style.display = "block"
            // document.querySelector(".container-right").style.width = "calc(100% - 12vh)"
            flag = 1;
        }else{
            document.querySelector("#menu-right").style.display = "none"
            // document.querySelector(".container-right").style.width = `calc(100% - 40vh)`
            flag = 0;
        }
    })
}


tabBtn();
function tabBtn(){
    document.querySelectorAll(".tabs .tabs-item").forEach((elem,index)=>{
        document.querySelectorAll(".account-page-bottom-tab").forEach((pageTab,index1)=>{
            if(index === index1){
                elem.addEventListener("click",()=>{
                    document.querySelectorAll(".tabs .tabs-item").forEach(t=>{
                        t.classList.remove("active")
                    })
                    document.querySelectorAll(".account-page-bottom-tab").forEach(t=>{
                        t.classList.remove("active")
                    })
                    
                    elem.classList.add("active")
                    pageTab.classList.add("active")
                })
            }
            
        })
        
    })
}