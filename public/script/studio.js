SettingPage();
Studio();

// menu click handler
function Studio(){
    var flag = 0;
    var menuLeft = document.querySelector("#menu-left");
    document.querySelector(".menu-btn").addEventListener("click",()=>{
        if(flag == 0){
            menuLeft.style.width = "8vh"
            document.querySelector(".menu-left-top .img").style.width = "3vmax"
            document.querySelector(".menu-left-top .img").style.height = "3vmax"
            document.querySelector(".menu-left-top h4").style.display = "none"
            document.querySelector("#menu-right").style.width = "calc(100% - 8vh)"
            document.querySelector("#main-bottom-top-container").style.padding = "0 8%"
            document.querySelector(".menu-left-top").style.height = "10vh"
            document.querySelector(".menu-left-center").style.height = "calc(100% - 10vh  - 25vh)"
            document.querySelectorAll("#menu-left a").forEach(elem=>{
                elem.style.display = "none"
            })
            document.querySelector(".content-page-bottom-top-item1").style.width = "70vh"
            document.querySelectorAll(".content-page-bottom-top-second .content-page-bottom-top-item1").forEach(elem=>{
                elem.style.width = "70vh"

            })
            flag = 1
        }else{
            menuLeft.style.width = "35vh"
            document.querySelector(".menu-left-top .img").style.width = "7vmax"
            document.querySelector(".menu-left-top .img").style.height = "7vmax"
            document.querySelector(".menu-left-top h4").style.display = "block"
            document.querySelector(".menu-left-top").style.height = "30vh"
            document.querySelector("#menu-right").style.width = "calc(100% - 35vh)"
            document.querySelector("#main-bottom-top-container").style.padding = "10px 10px"
            document.querySelector(".menu-left-center").style.height = "calc(100% - 30vh  - 25vh)"
            document.querySelectorAll("#menu-left a").forEach(elem=>{
                elem.style.display = "block"
            })
            flag = 0
        }
    })
    
}

// content page tab select
SelectMenu();
function SelectMenu(){
    document.querySelectorAll(".content-page-menu a").forEach((elem1,index1)=>{
        elem1.addEventListener("click",()=>{
            document.querySelectorAll(".select-line").forEach((elem2,index2)=>{
                elem2.classList.remove("active")
                if(index1 == index2){
                    elem2.classList.add("active")
                    document.querySelectorAll(".content-page-menu a").forEach(e=>{
                        e.classList.remove("active")
                    })
                    elem1.classList.add("active")
                }
            })
        })
    })
}

// setting page open
function SettingPage(){
    let flag = 0;
    document.querySelector(".setting-a").addEventListener("click",()=>{
        if(flag == 0){
            document.querySelector(".setting-page").style.display = "flex"
            flag = 1
        }else{
            document.querySelector(".setting-page").style.display = "none"
            flag = 0
        }
    })
    document.querySelector(".close-a").addEventListener("click",()=>{
        document.querySelector(".setting-page").style.display = "none"
        flag = 0
    })


    // menu click handler
    document.querySelectorAll(".setting-page-container-center-left a").forEach(elem=>{
        elem.addEventListener("click",()=>{
            document.querySelectorAll(".setting-page-container-center-left a").forEach(e=>{
                e.classList.remove("active");
            })
            elem.classList.add("active");
        })
    })

}


ContentPage()
function ContentPage(){
    document.querySelectorAll(".content-page-menu a").forEach((select,item1)=>{
        select.addEventListener("click",()=>{
            document.querySelectorAll(".video-page1").forEach((pages,item2)=>{
                if(item1 === item2){
                    document.querySelectorAll(".video-page1").forEach(video=>{
                        video.classList.remove("active")
                    })
                    pages.classList.add("active")
                }
            })
        })
    })
}

EditBtn();
function EditBtn(){
    document.querySelectorAll(".ri-pencil-line").forEach(edit=>{
        edit.addEventListener("click",(data)=>{
            // console.log(data.target.dataset)
            document.querySelectorAll("#cover").forEach(cover=>{
                cover.style.display = "flex"
                document.querySelector(".upload-title").value = data.target.dataset.title
                document.querySelector(".upload-des").value = data.target.dataset.des
                document.querySelector(".upload-id").value = data.target.dataset.id
                document.querySelector(".video-src").src = `../videos/${data.target.dataset.url}`
            })

        })
    })
    document.querySelectorAll(".ri-close-fill").forEach(close=>{
        close.addEventListener("click",()=>{
            document.querySelectorAll("#cover").forEach(cover=>{
                cover.style.display = "none"
                document.querySelector(".upload-poster-img").style.display = "none"

            })
        })
    })
    document.querySelector(".upload-input-image").addEventListener("click",()=>{
        document.querySelector(".upload-inp-img").click()
    })
    document.querySelector(".upload-inp-img").addEventListener("change",()=>{
        document.querySelector(".poster-img").src = URL.createObjectURL(document.querySelector(".upload-inp-img").files[0])
        document.querySelector(".upload-poster-img").style.display = "block"
    })

}

CustomizeBtn()
function CustomizeBtn(){
    document.querySelectorAll(".change-btn").forEach((change,item1)=>{
        change.addEventListener("click",()=>{
            document.querySelectorAll(".cos-frm input").forEach((inp,item2)=>{
                if(item1 == item2){
                    inp.click()
                }
            })
        })
    })
    
    document.querySelectorAll(".cos-frm input").forEach((inp,item1)=>{
        inp.addEventListener("change",()=>{
            document.querySelectorAll(".img-src").forEach((img,item2)=>{
                document.querySelectorAll(".cos-frm").forEach((frm,item3)=>{
                    if(item1 == item2 == item3){
                        img.src = URL.createObjectURL(inp.files[0])
                        frm.submit();
                    }

                })
            })
        })
    })
}

// left menu page open
MenuPageOpen();
function MenuPageOpen(){
    document.querySelectorAll(".menu-left-bottom-item").forEach((menu,item1)=>{
        menu.addEventListener("click",()=>{
            document.querySelectorAll(".studio-pages").forEach((pages,item2)=>{
                if(item1 === item2){
                    document.querySelectorAll(".studio-pages").forEach(elem=>{
                        elem.classList.remove("active");
                    })
                    pages.classList.add("active");
                }
            })
        })
    })
}