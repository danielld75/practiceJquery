$(function(){
  var spans = $('span');
  spans.each(function(index, element){
    if (index % 2 === 0) {
      $(element).css('color', 'red');
    }
  });
  var paragraphs = $('p');
  paragraphs.each(function(index, element){
    var button = '<button class="btn btn-default" data-tmp="' + index + '">Click me</button>';
    $(element).append(button);
  });
  $('button').click(function(){
    alert($(this).attr("data-tmp"));
  });
});