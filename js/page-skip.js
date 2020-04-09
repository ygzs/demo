//缓动跳转
let aTags = document.querySelectorAll('nav.menu > ul >li >a')
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function(xx){
        xx.preventDefault()
        let a = xx.currentTarget
        let href = a.getAttribute('href')	//用户输入的href
        let element = document.querySelector(href)
        let top = element.offsetTop		//距离整个页面顶部的高度
        let currentTop = window.scrollY		//当前视口距离页面顶部高度
        let targetTop = top-70
        let s = targetTop - currentTop
        let t = Math.abs(s/100*300)
        if(t>500){
            t = 500
        }
        var coords = { y: currentTop }
        var tween = new TWEEN.Tween(coords)		//起始位置
            .to({ y: targetTop }, t)		//结束位置和时间
            .easing(TWEEN.Easing.Quadratic.InOut)		//缓动类型 
            .onUpdate( function() {
                window.scrollTo(0,coords.y)		//更新界面
            })
            .start();		//开始
    }	
}