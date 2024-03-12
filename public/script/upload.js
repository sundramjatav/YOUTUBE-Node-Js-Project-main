
// image uploading
document.querySelector(".upload-input-image").addEventListener("click",()=>{
    document.querySelector(".upload-inp-img").click();
})
document.querySelector(".upload-inp-img").addEventListener("change",()=>{
    document.querySelector(".poster-img").src = URL.createObjectURL(document.querySelector(".upload-inp-img").files[0])
    document.querySelector(".upload-container-show-box-right .img").style.display = "block"
})



// video uploading
document.querySelectorAll(".upload-container-box button").forEach((btn,item1)=>{
    btn.addEventListener("click",()=>{
        document.querySelectorAll(".upload-inp-video").forEach((video,item2)=>{
            if(item1 == item2){
                video.click();
            }
        })
    })
})
document.querySelectorAll(".upload-inp-video").forEach((video,item1)=>{
    video.addEventListener("change",(elem)=>{
        // console.log(elem.srcElement.files[0].name)
        document.querySelectorAll(".video-src").forEach((videoSrc,item2)=>{
            document.querySelectorAll(".upload-container-show").forEach((show,item3)=>{
                document.querySelectorAll(".upload-title").forEach((title,item4)=>{
                    if(item1 == item2 == item3 == item4){
                        title.value = elem.srcElement.files[0].name
                        show.style.display = "block"
                        videoSrc.src = URL.createObjectURL(video.files[0])
                    }
                })
            })
        })
    })
})


// close btn 
document.querySelectorAll(".close-btn").forEach((btn,item1)=>{
    btn.addEventListener("click",()=>{
        document.querySelectorAll(".upload-container-show").forEach((show,item2)=>{
            if(item1 == item2){
                show.style.display = "none"
            }
        })
    })
})

document.querySelectorAll(".upload-video-btn").forEach((btn,item1)=>{
    btn.addEventListener("click",()=>{
        document.querySelectorAll("#cover").forEach((cover,item2)=>{
            if(item1 == item2){
                cover.style.display = "flex"
                document.querySelectorAll("#upload").forEach(upload=>{
                    upload.style.display = "none"
                })
            }
        })
    })
})

document.querySelectorAll(".close-botton").forEach((botton,item1)=>{
    botton.addEventListener("click",()=>{
        document.querySelectorAll("#cover").forEach((cover,item2)=>{
            if(item1 == item2){
                cover.style.display = "none"
            }
        })
    })
})