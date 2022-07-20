///////// Loading page gif
let loading = document.querySelector(".loading");
let body = document.querySelector(".body");
setTimeout(function amr() {
    loading.style.display = "none";
    body.classList.remove("body");  
}, 3500)
///////// scroll TO TOP
let go_top = document.querySelector(".top");
window.onscroll = function(){
    if(this.scrollY >= 1000){
        go_top.classList.add('top1')
    }else{
        go_top.classList.remove('top1')
    } 
}
go_top.onclick = function(){
    window.scrollTo({
        top : 0,
        behavior:"smooth" 
    })
};

$('.reeqests .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
$('.Expert .owl-theme').owlCarousel({
        
    loop:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
           
        }
    }
});
$('.person .owl-theme').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    smartSpeed:500,
    autoplayTimeout:8000,
    responsive:{
        0:{
            items:1,
            nav:true
        }
    }
});
$('.brand .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});
// navbar
$(window).scroll(function(){
   $(".navbar").toggleClass("scrolled" ,$(this).scrollTop() > 50);
 });
 /////
 let navbar_links = document.querySelector(".fa-bars")

 navbar_links.addEventListener("click",()=>{
    document.querySelector(".links").classList.toggle("links_min")
    document.querySelector(".links").classList.toggle("sowh")

    console.log("kj");

 })