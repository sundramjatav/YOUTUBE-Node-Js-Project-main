
        //  account btn click
        Loco("#main")
        MenuLeftBtn();
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

        function AccountBtn(){
            flag = 0;
            document.querySelector(".nav-right #account").addEventListener("click",()=>{
                if (flag == 0){
                    document.querySelector("#menu-right").style.display = "block"
                    flag = 1;
                }else{
                    document.querySelector("#menu-right").style.display = "none"
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
                    flag = 1;
                }else{
                    document.querySelector("#upload").style.display = "none"
                    flag = 0;
                }
            })
        }

        AllNoneBtn();
        function AllNoneBtn(){
            flag = 0;
            document.querySelector(".container-right").addEventListener("click",()=>{
                document.querySelector("#menu-right").style.display = "none"
                document.querySelector("#upload").style.display = "none"
                flag = 0;
            })
        }
        
        // menu left btn click
        function MenuLeftBtn(){
        // left nav bar slider
        flag = 0;
        document.querySelector(".nav-left .ri-menu-line").addEventListener("click",()=>{
            // alert("cvb")
            if (flag == 0){
                document.querySelector(".menu-left-full").style.left = "0vh"
                flag = 1;
            }else{
                document.querySelector(".menu-left-full").style.left = "-40vh"
                flag = 0;
            }
        })
        }


