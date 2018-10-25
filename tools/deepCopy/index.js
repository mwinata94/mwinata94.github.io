$(document).ready(function() {

	// Toggle dropdown
	$("#navbar .head_wolist").click(function() {
		var t = $(this).find("span").text();
		if (t == "MW94") {
			window.location.href = "../../index.html";
		}
	});

});
