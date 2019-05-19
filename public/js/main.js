// jQuery is used to display user comments without reloading the page and to implement a sticky navbar

// document onready function
$( () => {

  $(".submit_comment").on("click", (event) => {
    // console.log('moused over');
    let name = $('.name').text();
    let comment = $(event.currentTarget).parent().children().eq(4).val();
    // console.log(comment);
    let newListItem = $('<li>').text(name + ": " + comment);
    // console.log('newListItem=', newListItem);
    $(".list_of_comments").append(newListItem);
  });


  let aboveHeight = $('header').outerHeight();
  console.log('aboveHeight=', aboveHeight);
  let navHeight = $("nav").outerHeight();


  // when scroll
  $('.container').scroll(function(){
      let containerWidth = $(".container").outerWidth();
      console.log('aboveHeight=', aboveHeight);
      console.log('scrollTop=', $('.container').scrollTop());
      // if scrolled down more than the header’s height
      if ($('.container').scrollTop() > aboveHeight){

          // if yes, add “fixed” class to the <nav>
          // add padding top to the #content
          // (value is same as the height of the nav)
          // $('nav').addClass('fixed').css('top','0').next().css('padding-top','60px');
          $("nav").css("position", "fixed").css("width", `${containerWidth}`).css("top", "0").next().css("padding-top", navHeight);

      } else {

          // when scroll up or less than aboveHeight,
          // remove the “fixed” class, and the padding-top
          // $('nav').removeClass('fixed').next().css('padding-top','0');
          $("nav").css("position", "static").css("width", "").next().css("padding-top", "0");
      }
  });

}); // end of document onready
