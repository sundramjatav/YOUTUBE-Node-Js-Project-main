Loco("#main");
// ContainerItem();
MenuLeftBtn()
AccountBtn()
UploadBtn()


function Loco(main){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(main),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the main element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(main, {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(main).style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

function ContainerItem(){
    var arrData = [
        {
            thumbnail_url:"https://i.ytimg.com/vi/Y1tsJD28ocU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtw3oyHobHZX67h4nfvOF8tj30DA",
            video_url:"videos/1.mp4",
            title:"🎮 Bubble Game Tutorial: Create Fun with JS | Harsh Sharma",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        {
            thumbnail_url:"https://i.ytimg.com/vi/2IPEp_4obGw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhlz4KSwpmmxxLHUyW94UGr3k-9Q",
            video_url:"videos/1.mp4",
            title:"JavaScript DOM Manipulation: How to DOMinate the DOM with JavaScript",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        {
            thumbnail_url:"https://i.ytimg.com/vi/6kE8lrqfwHo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdetkOzc9lxHf30vITyInvhCPeWQ",
            video_url:"videos/1.mp4",
            title:"Master Async JavaScript: What it is and How to Use it",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        {
            thumbnail_url:"https://i.ytimg.com/vi/HG10yrq1pbk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDu6fYf3M6fUWGPQeB48_Bk4ByXmA",
            video_url:"videos/1.mp4",
            title:"🌐 Responsive Web Development: Building Websites for All Devices! 📱💻🖥️",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        {
            thumbnail_url:"https://i.ytimg.com/vi/ks4MFTHLfyg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbETjtTc00t1AetKLTrHikRlZOqA",
            video_url:"videos/1.mp4",
            title:"Master Advanced JavaScript Concepts and Become a JavaScript Ninja",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        {
            thumbnail_url:"https://i.ytimg.com/vi/0crJvCB4qB8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOAkR0FwfZB5HvEA6pDIA2aZcWZA",
            video_url:"videos/1.mp4",
            title:"Exposed: Part-Time Job Scams | Don't Waste Your Time",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        {
            thumbnail_url:"https://i.ytimg.com/vi/yjzX0CM7mCA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9fyp2FvDZ0mOUs5WSUx0GRFL_cg",
            video_url:"videos/1.mp4",
            title:"[EXTREME FOCUS 🔥] Development or Competitive Coding with JS ? | Sheryians Coding School",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        {
            thumbnail_url:"https://i.ytimg.com/vi/uud2HqN6pTA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcpRjJ0JzlgPLoWI8XzBuPgoaYZg",
            video_url:"videos/1.mp4",
            title:"🔥 Master Advanced JavaScript: Join, Share & Level Up! 🚀✨",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        {
            thumbnail_url:"https://i.ytimg.com/vi/ywGXds2w-MY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCq19qlBOc18fC47BqYgkWlL39sVw",
            video_url:"videos/1.mp4",
            title:"Seniors vs Juniors! 🔥 | The Ultimate Coding Showdown | SHERYIANS CODING SCHOOL",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        {
            thumbnail_url:"https://i.ytimg.com/vi/Y1tsJD28ocU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtw3oyHobHZX67h4nfvOF8tj30DA",
            video_url:"videos/1.mp4",
            title:"🎮 Bubble Game Tutorial: Create Fun with JS | Harsh Sharma",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        {
            thumbnail_url:"https://i.ytimg.com/vi/2IPEp_4obGw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhlz4KSwpmmxxLHUyW94UGr3k-9Q",
            video_url:"videos/1.mp4",
            title:"JavaScript DOM Manipulation: How to DOMinate the DOM with JavaScript",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        {
            thumbnail_url:"https://i.ytimg.com/vi/6kE8lrqfwHo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdetkOzc9lxHf30vITyInvhCPeWQ",
            video_url:"videos/1.mp4",
            title:"Master Async JavaScript: What it is and How to Use it",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        {
            thumbnail_url:"https://i.ytimg.com/vi/HG10yrq1pbk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDu6fYf3M6fUWGPQeB48_Bk4ByXmA",
            video_url:"videos/1.mp4",
            title:"🌐 Responsive Web Development: Building Websites for All Devices! 📱💻🖥️",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        {
            thumbnail_url:"https://i.ytimg.com/vi/ks4MFTHLfyg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbETjtTc00t1AetKLTrHikRlZOqA",
            video_url:"videos/1.mp4",
            title:"Master Advanced JavaScript Concepts and Become a JavaScript Ninja",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        {
            thumbnail_url:"https://i.ytimg.com/vi/0crJvCB4qB8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOAkR0FwfZB5HvEA6pDIA2aZcWZA",
            video_url:"videos/1.mp4",
            title:"Exposed: Part-Time Job Scams | Don't Waste Your Time",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        {
            thumbnail_url:"https://i.ytimg.com/vi/yjzX0CM7mCA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9fyp2FvDZ0mOUs5WSUx0GRFL_cg",
            video_url:"videos/1.mp4",
            title:"[EXTREME FOCUS 🔥] Development or Competitive Coding with JS ? | Sheryians Coding School",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        {
            thumbnail_url:"https://i.ytimg.com/vi/uud2HqN6pTA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcpRjJ0JzlgPLoWI8XzBuPgoaYZg",
            video_url:"videos/1.mp4",
            title:"🔥 Master Advanced JavaScript: Join, Share & Level Up! 🚀✨",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        {
            thumbnail_url:"https://i.ytimg.com/vi/ywGXds2w-MY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCq19qlBOc18fC47BqYgkWlL39sVw",
            video_url:"videos/1.mp4",
            title:"Seniors vs Juniors! 🔥 | The Ultimate Coding Showdown | SHERYIANS CODING SCHOOL",
            channel_name:"Sheryians Coding School",
            channel_logo_url:"https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj",
            views:"30M",
            date:"1 month"
        },
        
    ];
    arrData.forEach((elem)=>{
        document.querySelector(".container-right").innerHTML += `<div id="card">
                                                                    <div class="img">
                                                                        <video src="${elem.video_url}" loop muted></video>
                                                                        <img src="${elem.thumbnail_url}" alt="">
                                                                    </div>
                                                                    <div class="card-bottom">
                                                                        <div class="card-bottom-top">
                                                                            <div class="card-bottom-top-left">
                                                                                <div class="img2">
                                                                                    <img src="${elem.channel_logo_url}" alt="">
                                                                                </div>
                                                                            </div>
                                                                            <div class="card-bottom-top-right">
                                                                                <h4 class="title">${elem.title}</h4>
                                                                                <p><span class="channel_name">${elem.channel_name}</span> <span class="verify-tick"><img class="tick" src="assets/tick_embossed_icon_149855.svg" alt=""></span></p>
                                                                                <p><span class="views">${elem.views} views</span>· <span class="date">${elem.date}</span> ago</p>
                                                                            </div>
                                                                            <div class="card-menu">
                                                                                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#1C274C"/>
                                                                                    <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#1C274C"/>
                                                                                    <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#1C274C"/>
                                                                                    </svg>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>`
    })
}

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

// upload btn click
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









AllNoneBtn();
function AllNoneBtn(){
    document.querySelector(".container-right").addEventListener("click",()=>{
        document.querySelector("#menu-right").style.display = "none"
        document.querySelector("#upload").style.display = "none"
        flag = 0;
    })
}





