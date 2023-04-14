setInterval(function() {
  $.ajax({
      url: 'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT',
      method: 'get', 
      dataType: 'json',
      data: {},
      success: function(data){ 
          console.log(data.symbol);
          console.log(data.price);
          $(".block1").text(data.symbol)
          $(".block2").text(data.price)
      }
  });
}, 50);
