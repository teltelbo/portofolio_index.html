'use strict';
{
  const targetElement = document.querySelectorAll(".animationTarget");
  console.log("画面の高さ",window.innerHeight)
  document.addEventListener("scroll",function(){
    for (let i = 0; i < targetElement.length; i++) {
      const getElementDistance = targetElement[i].
      getBoundingClientRect().top + targetElement[i].clientHeight * .6
      if(window.innerHeight > getElementDistance) {
        targetElement[i].classList.add("show");
      }
    }
  });

  
  var app = new Vue({
    el: '#app',
    data: {
      image: './img/dummy.jpg', // 一番目の画像
      variants: [
        {
          variantId: 1,
          variantColor: "work1",
          variantImage: './img/dummy.jpg'// 一番目の画像
        },
        {
          variantId: 2,
          variantColor: "work2",
          variantImage: './img/dummy.jpg'// 二番目の画像
        },
        {
          variantId: 3,
          variantColor: "work3",
          variantImage: './img/dummy.jpg'// 三番目の画像
        },
        {
          variantId: 4,
          variantColor: "work4",
          variantImage: './img/dummy.jpg'//四番目の画像 
        }
      ],
      updateWork(variantImage) {
        this.image = variantImage
      }
    }
  });



}
