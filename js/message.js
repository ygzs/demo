!function(){
  var view = View('#List')

  var model = Model({resourceName:'Message'})

  var controller = Controller({
    init:function(){
      this.form = View('#List')
      this.loadMessages()
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
      this.model.save({
          'name':name,
          'content':content,
        })
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
  })

controller.init(view,model) 
}.call()
