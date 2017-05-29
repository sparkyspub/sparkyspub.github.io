// same-origin policy solution
(function() {
  var quoteAPI = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=3&callback=";
  $.getJSON( quoteAPI, {
    format: "json"
  })
  .done(function( quotes ) {
    $.each( quotes, function( i, quote ) {
      console.log(quote);
      $("#quotes").append("<div class='quoteContainer'" + quote.content +  "<div class ='quoteID'>(id:<a href=" + '"' + quote.link + '"' + ">" + quote.ID + "</a>)</div>" + "<div class='author'>" + " -" + quote.title + "</div></div>");
    });
  });
})();
