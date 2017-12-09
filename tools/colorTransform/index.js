$(document).ready(function() {

	// Toggle dropdown
	$("#navbar .head_wolist").click(function() {
		var t = $(this).find("span").text();
		if (t == "MW94") {
			window.location.href = "../../index.html";
		}
	});

	$("#ct_getJS").click(function() {
		window.location.href = "././colorTransform.js";
	});

	colorTransform(document.getElementById("ct_rect"), "backgroundColor", "#7CFC00", "#FF0000", 16);

});