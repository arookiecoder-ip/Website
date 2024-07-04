const nbt=document.querySelector('.nbt')
const nb=document.querySelector('.nb')

// nbt.addEventListener('mousemove',(e)=>{
//   console.log(e);
//   console.log(e.clientX);
//   // nb.style.scale=1.2
//   nb.style.rotate= "180deg"
//   nb.style.opacity=1
// })
// nbt.addEventListener('mouseleave',(e)=>{
//   console.log(e);
//   console.log(e.clientX);
//   // nb.style.scale=1.2
//   nb.style.rotate= "0deg"
//   nb.style.opacity=0
// })


////======
// const cards=document.querySelectorAll('#cards')
// cards.forEach(card => {
    
//     card.addEventListener('mousemove', (e) => {
//         const rect = card.getBoundingClientRect();
//         const centerX = rect.left + rect.width / 2;
//         const centerY = rect.top + rect.height / 2;
//         const offsetX = e.clientX - centerX;
//         const offsetY = e.clientY - centerY;
        
//         const rotateX = (offsetY / rect.height) * 30; // Adjust 30 to control the card amount
//         const rotateY = -(offsetX / rect.width) * 30; // Adjust 30 to control the card amount
        
//         card.style.transform = perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg);
//     });
    
//     card.addEventListener('mouseleave', () => {
//         card.style.transform = perspective(2000px) rotateX(0) rotateY(0);
//     });
    
// });




gsap.from("#nav",{
  // x:-12,
  opacity:0,
  delay: 0.5,
  duration: 1.8,
})

gsap.from("#hi", {
  scale: 1,
  delay: 0.5,
  duration: 1.8,
  x:12
});
gsap.from("#jeet", {
  scale: 1,
  delay: 0.5,
  duration: 1.8,
  x:-12
});
gsap.from("#para",{
  opacity:0,
  delay: 0.5,
  duration: 1.8,
})
gsap.from('#image',{
  scale:0.8,
  // y:-21,
  delay: 0.5,
  duration: 1.8,
})

gsap.from("#card1",{
  scale:0.8,
  delay: 0.5,
  duration: 1.8,
  scrollTrigger:"#card1"
})
gsap.from("#card2",{
  scale:1.1,
  delay: 0.5,
  duration: 1.8,
  scrollTrigger:"#card2"
})
gsap.from("#card3",{
  scale:1.1,
  delay: 0.5,
  duration: 1.8,
  scrollTrigger:"#card2"
})

gsap.from("#card4",{
  scale:0.8,
  delay: 0.5,
  duration: 1.8,
  scrollTrigger:"#card4"
})
var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 3,
});

gsap.to("#schoolHeadingTop",{
  height:1,
  delay:0.5,
  duration:1.2,
  
})
gsap.from("#schoolHeading",{
  // height:0,
  delay:0.5,
  duration:1.2,
  color:'green'
})
gsap.from("#schoolParaTop",{
  width:'1',
  delay:0.5,
  duration:1.2,
})
const cursor = document.querySelector('#circle');
        
        window.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX - cursor.offsetWidth / 2,
                y: e.clientY - cursor.offsetHeight / 2,
                duration: 0.1,
                ease: 'power2.out'
            });
        });