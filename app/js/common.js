$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо! Ваша заявка будет рассмотрена в ближайшее время!");
		//	location.replace("http://localhost/portfolios/app/index.html");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 10000);
			location.replace("http://localhost/portfolios/app/index.html");
		});
		return false;
	});

});
//setTimeout('location.replace("http://kalyuzhny.ru.xsph.ru/index.html")', 5000);
