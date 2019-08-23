let clickCounter = 0;


$('.cat').click(function() {
  clickCounter++;
  $('.clicked').text(clickCounter);
});


