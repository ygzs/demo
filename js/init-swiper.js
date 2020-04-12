!function(){
      var view = View('#myslide')
      var controller = {
            view:null,
            Swiper:null,
            init:function(view){
                  this.view = view
                  this.initSwiper()
            },
            initSwiper:function(){
                  this.Swiper = new Swiper (view.querySelector('.swiper-container'), {
                        direction: 'horizontal',
                        loop: true,
                        pagination: {
                              el: '.swiper-pagination',
                        },
                        navigation: {
                              nextEl: '.swiper-button-next',
                              prevEl: '.swiper-button-prev',
                        },
                  })
            }
      }
controller.init(view)
}.call()

  