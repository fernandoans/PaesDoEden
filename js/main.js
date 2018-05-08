Vue.component('pao-header',  {
  template: '<div><div class="brand">Pães do Éden</div>' +
      '<div class="address-bar">Entrega Delivery</div>' +
      '<nav class="navbar navbar-default" role="navigation">' +
          '<div class="container">' +
              '<div class="navbar-header">' +
                  '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">' +
                      '<span class="sr-only">Toggle navigation</span>' +
                      '<span class="icon-bar"></span>' +
                      '<span class="icon-bar"></span>' +
                      '<span class="icon-bar"></span>' +
                  '</button>' +
                  '<a class="navbar-brand" href="index.html">Pães do Éden</a>' +
              '</div>' +
              '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
                  '<ul class="nav navbar-nav">' +
                      '<li><a href="index.html">Home</a></li>' +
                      '<li><a href="foto.html">Fotos</a></li>' +
                      '<li><a href="blog.html">Blog</a></li>' +
                      '<li><a href="contact.html">Contato</a></li>' +
                  '</ul>' +
              '</div>' +
          '</div>' +
      '</nav></div>'
})

Vue.component('pao-footer',  {
  template: '<footer>' +
          '<div class="container">' +
              '<div class="row">' +
                  '<div class="col-lg-12 text-center">' +
                      '<p>Copyright &copy; Pães do Éden - Todos os direitos reservados</p>' +
                  '</div>' +
              '</div>' +
          '</div>' +
      '</footer>'
})

Vue.component('pao-titulo', {
  props: [ 'titulo'],
  template: '<div class="col-lg-12">' +
      '<hr>' +
      '<h2 class="intro-text text-center">Pães do Éden ' +
          '<strong>{{titulo}}</strong>' +
      '</h2>' +
      '<hr>' +
  '</div>'
})

Vue.component('img-slider', {
  template: '#img-slider-template',
  replace: true
})
