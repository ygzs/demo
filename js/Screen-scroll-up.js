//先给所有data-x元素加上offset
let specialTags = document.querySelectorAll('[data-x]')
	for (let index = 1; index < specialTags.length; index++) {
		specialTags[index].classList.add('offset')
    }

FindClosestAndRemoveOffset()

window.addEventListener('scroll',function(){
    FindClosestAndRemoveOffset()
})

//查找离视口顶部最近的元素
function FindClosestAndRemoveOffset(){	
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let index = 1; index < specialTags.length; index++) {
        if(Math.abs(specialTags[index].offsetTop -window.scrollY) <
        Math.abs(specialTags[minIndex].offsetTop - window.scrollY) ){
            minIndex = index
        }
    }
    //去除offset
    specialTags[minIndex].classList.remove('offset')
    //高亮当前的元素
    let id = specialTags[minIndex].id	//最近的元素的id
    let a = document.querySelector(' a[href="#' + id + '"] ')	//id对应的a标签
    let li = a.parentNode	//父节点li
    let brothersAndMe = li.parentNode.children	//包括自己的所有li
    for(let i = 0; i < brothersAndMe.length; i++){
        brothersAndMe[i].classList.remove('highlight')	
    }
    li.classList.add('highlight')	//先去除在添加，防止多个高亮
}

