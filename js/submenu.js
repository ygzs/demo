//鼠标移动到li时出现下划线和二级菜单
!function(){
    var view = View('nav.menu')
    var controller = {
        view:null,
        init:function(view){
            this.view = view
            this.liTags = this.view.querySelectorAll('nav.menu > ul > li')
            this.bindEVents()
        },
        bindEVents:function(){
            let liTags = this.liTags
            for (let i = 0; i < liTags.length; i++) {
                liTags[i].onmouseenter = (x) => {
                    this.active(i)
                }
                liTags[i].onmouseleave = (x) => {
                   this.deactive(i)
                }
            }
        },
        active:function(index){
            this.liTags[index].classList.add('active')
        },
        deactive:function(index){
            this.liTags[index].classList.remove('active')
        },
    }
controller.init(view)
}.call()
