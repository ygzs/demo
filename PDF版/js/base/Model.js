window.Model = function(options){
    let resourceName = options.resourceName
    return {
      initAV:function(){
        AV.init({
        appId: "ydWA3xnYqAhAdEDHRrBcbXdQ-gzGzoHsz",
        appKey: "FSpJbRyD0NknTLSt2KQ64B3z",
        serverURL: "https://ydwa3xny.lc-cn-n1-shared.com"
        })
      },
      fetch: function(){
        var query = new AV.Query(resourceName)
        query.limit(4)
        query.descending('createdAt');
        return query.find()
      },
      save: function(object){
        var X = AV.Object.extend(resourceName)
        var x = new X()
        return x.save(object)
      }
    }
  }