var getCountryInfo = function(countryName) {
	var url = `https://restcountries.eu/rest/v2/name/${countryName}`
	$.ajax(url)
        .done(function( data ) {

            var text = `country name: ${data[0].name}<br>
                        Domain: ${data[0].topLevelDomain}<br>
                        call code: ${data[0].callingCodes}<br>
                        region: ${data[0].region}<br>
                        subregion: ${data[0].subregion}<br>
                        time zone: ${data[0].timezones}<br>
                        currency symbol: ${data[0].currencies[0].symbol}`                                 
            $("#data").html(text);
        
            console.log('data: ', data);
        })
        .fail(function(errorMsg) {
        console.log('error: ', errorMsg);
	})
}

var predictGender = function(getGender) {
	var url = `https://api.genderize.io?name=${getGender}`

	$.ajax(url)
        .done(function( data ) {

            var predict = `Name: ${data.name}<br>
                        Gender: ${data.gender}<br>
                        Probability: ${data.probability}<br>
                        Count: ${data.count}<br>`                                    
            $("#predict").html(predict);        
            console.log('data: ', data);
        })
        .fail(function(errorMsg) {
        console.log('error: ', errorMsg);
	})
}

$("#search").click(function(){
    var countryName = $("#countryName").val();
    var getGender = $("#inputName").val();
    console.log(countryName);
    console.log(getGender);
    getCountryInfo(countryName);
    predictGender(getGender);
});