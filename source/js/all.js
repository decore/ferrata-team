$(document).ready(function(){

  $('.dropdown-menu label').click(function(){
    $(this).parents('.dropdown-menu').css('display', 'block')
  })

  //Open and close optional part of search
  $('.table-one .open-optional .icon-down').click(function(){
    $('.table-one .optional').removeClass('hidden')
  });
  $('.table-one .open-optional .icon-up').click(function(){
    $('.table-one .optional').addClass('hidden')
  })

  // Footable
  $('.footable').footable({
    breakpoints: {
      tablet: 600
    }
  });

  //Paralax
  $('#parallax').parallax({
    calibrateX: true,
    calibrateY: true,
    invertX: true,
    invertY: true,
    limitX: false,
    limitY: 5,
    scalarX: 50,
    scalarY: 10,
    frictionX: 0.1,
    frictionY: 0.2,
    originX: 0.5,
    originY: 0.4
  });

  //BootstrapInputFile
  $('input[type=file]').bootstrapFileInput();

  //Bootstrap Wysihtml5
  $('[data-textarea="wysiwyg"]').wysihtml5({
      "stylesheets": true,
      "font-styles": false, //Font styling, e.g. h1, h2, etc. Default true
      "emphasis": true, //Italics, bold, etc. Default true
      "lists": false, //(Un)ordered lists, e.g. Bullets, Numbers. Default true
      "html": true, //Button which allows you to edit the generated HTML. Default false
      "link": false, //Button to insert a link. Default true
      "image": false, //Button to insert an image. Default true,
      "color": false, //Button to change color of font
      "blockquote": true,
      "locale": 'ru-RU'
    });

});