!function(){
  var view = View('#List')


  var model = {
    initAV:function(){
      AV.init({
      appId: "ydWA3xnYqAhAdEDHRrBcbXdQ-gzGzoHsz",
      appKey: "FSpJbRyD0NknTLSt2KQ64B3z",
      serverURL: "https://ydwa3xny.lc-cn-n1-shared.com"
      })
    },
    fetch:function(){
      var query = new AV.Query('Message');
       return query.find()
    },
    save:function(name,content){
      var leancloud = AV.Object.extend('Message')
      var message = new leancloud()
      message.set('name',name)
      message.set('content',content)
      return message.save()
    }
  }


  var controller = {
    view:null,
    model:null,
    form:null,
    init:function(view,model){
      this.view = view
      this.model = model
      this.model.initAV()
      this.form = View('#List')
      this.loadMessages()
      this.bindEvents()

    },
    loadMessages:function(){
      this.model.fetch()
      .then(function (notes) {
        let array = notes.map( (item) => item.attributes )
        array.forEach( item => {
          let li = document.createElement('li')
          li.innerText = `${item.name}:${item.content}`
          messageList.append(li)
        })
      })
    },
    bindEvents:function(){
      this.form.addEventListener('submit',(e) => {
        e.preventDefault()
        this.saveMessages()
      })
    },
    saveMessages:function(){
      let myform = this.form
      let name = myform.querySelector('.name').value
      let content = myform.querySelector('.content').value
      this.model.save(name,content)
        .then(function (object) {
          let li = document.createElement('li')
          li.innerText = `${object.attributes.name}:${object.attributes.content}`
          messageList.append(li)
        })
        .then( () => {
          name = ''
          content = ''
        })
    },


  }

  

  
  
controller.init(view,model) 
}.call()
