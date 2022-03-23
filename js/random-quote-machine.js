/* 

Random quote machine
by Ricardojrhc
*/

$(function(){
	
	//clear Dummy data
	$('#text').html('');
	$('#author').html('');
	$('#current-quote-cat').html('');
	
	var currentQuoteIndex = 0;

	//get quotes
	var today = new Date();
	var todayTimeStamp = Math.floor(today.getTime() / 1000) + 3600;
	var quotesInfoURL = "../json/quotes.json";
	var jsonQuotesInfo;
	var canIGO = true;
	var timeSwitch;
	
	$.getJSON(quotesInfoURL + "?ver=" + todayTimeStamp, function(jsonQuotes) {
		jsonQuotesInfo = jsonQuotes;
	})
	.done(function() {
	  console.log("second success");
	})
	.fail(function() {
	  console.log("error getting json quotes");
	})
	.always(function() {
	  	console.log("complete get quotes process!");
	  	console.log('jsonQuotesInfo: ', jsonQuotesInfo);
		
		function getNewQuote(){
			
			var getCurrentQuoteIndex = 0;
			
			//avoid consecutive repeated quotes
			do {
				getCurrentQuoteIndex = parseInt(Math.floor(Math.random() * jsonQuotesInfo.length));
				//console.log("getCurrentQuoteIndex:", getCurrentQuoteIndex);
			} while(getCurrentQuoteIndex == currentQuoteIndex);
			
			
			if(jsonQuotesInfo[getCurrentQuoteIndex].QUOTE.length > 100){
				$('#text').parent().addClass('small');
			} else {
				$('#text').parent().removeClass('small');
			}
			
			$('#text').html(jsonQuotesInfo[getCurrentQuoteIndex].QUOTE);
			$('#author').html(jsonQuotesInfo[getCurrentQuoteIndex].AUTHOR);
			$('#current-quote-cat').html(jsonQuotesInfo[getCurrentQuoteIndex].QUOTE_CAT);
			
			//socials
			$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURI('"'+jsonQuotesInfo[getCurrentQuoteIndex].QUOTE+'"') + '%20by%20' + encodeURI(jsonQuotesInfo[getCurrentQuoteIndex].AUTHOR));
			$('#fb-share').attr('href', 'http://www.facebook.com/sharer.php?u=' + encodeURI('https://rykardocardoso.github.io/fwc-projetc/'));
			
			return getCurrentQuoteIndex;
		}
		
		//Generate first quote
		currentQuoteIndex = getNewQuote();
		
		$('#new-quote').on('click', function(){
			if(canIGO){
				canIGO = false;
				$('.quote-machine-main-text').addClass('fade-out');
				timeSwitch = setTimeout(function(){
					currentQuoteIndex = getNewQuote();
					$('.quote-machine-main-text').removeClass('fade-out');
					clearTimeout(timeSwitch);
					setTimeout(function(){
						canIGO = true;
					}, 1000);
				}, 1000);
				
			}
		});
	});
	
});