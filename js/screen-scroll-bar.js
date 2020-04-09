//判断屏幕是否滚动
window.addEventListener('scroll',function(){
    if(window.scrollY > 0){
        TopNavBar.classList.add('stick')
    }
    else{
        TopNavBar.classList.remove('stick')
    }
})

