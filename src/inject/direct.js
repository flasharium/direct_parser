
function addButton () {
	var button = $('<button style="position: fixed;  top: 10px;  left: 10px;">Экспорт</button>')

	$(document.body).append(button );

  button.click(function(){

		parseRows ()
  })
}


function parseRows () {
  var sheet = window.document.styleSheets[0]
  sheet.insertRule('#jfwejfjewbfjew td { border: 1px solid black; border-collapse: collapse; padding: 5px; }', sheet.cssRules.length);

  var table = $('<table id="jfwejfjewbfjew" style="position:fixed;right:0px;bottom:0px;height: 1px;width: 300px;  background: #fff; border: 1px solid #000; border-collapse: collapse;"></table>')
  
  var addRow = function(key, freq, cpc, cpcR){
  	table.append($('<tr><td>' + key 
  		+ '</td><td>'+freq+'</td>'
  		+ '</td><td>'+cpc+'</td>'
  		+ '</td><td>'+cpcR.toFixed(2)+'</td>'
  		+'</tr>'))
  }

  $(document.body).append(table);




	var rows = $('.js-phrase-row-template.odd')
	rows.each(function(){
		var key = $(this).find('.js-phrase-cell').eq(0)	.text()
		var cpc = $(this).find('.js-value.sort-bid_price').last().text()
		var cpcR = parseFloat(cpc)*10
		var freq = $(this).find('.js-shows-value.sort-shows').text().replace(' ', '')
		addRow(key, freq, cpc, cpcR)
	})
}

function parseDirect() {

addButton()


}


if (window.location.href == "https://direct.yandex.ru/registered/main.pl?cmd=advancedForecast") {
	parseDirect()
	console.log("parseDirect()")
}
