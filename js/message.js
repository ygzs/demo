AV.init({
  appId: "ydWA3xnYqAhAdEDHRrBcbXdQ-gzGzoHsz",
  appKey: "FSpJbRyD0NknTLSt2KQ64B3z",
  serverURL: "https://ydwa3xny.lc-cn-n1-shared.com"
});

let myform = document.querySelector('#List')
myform.addEventListener('submit',function(e){
  e.preventDefault()
  let name = myform.querySelector('.name').value
  let content = myform.querySelector('.content').value
  var leancloud = AV.Object.extend('Message')
  var message = new leancloud()
  message.set('name',name)
  message.set('content',content)
  message.save()
    .then(function (object) {
      let li = document.createElement('li')
      li.innerText = `${object.attributes.name}:${object.attributes.content}`
      messageList.append(li)
    })
    .then( () => {
      name = ''
      content = ''
    })
})



var query = new AV.Query('Message');
query.find().then(function (notes) {
  let array = notes.map( (item) => item.attributes )
  array.forEach( item => {
    let li = document.createElement('li')
    li.innerText = `${item.name}:${item.content}`
    messageList.append(li)
  })
})