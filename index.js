$(document).ready(function() {

	// Toggle dropdown
	$("#navbar .head_wlist").click(function(event) {
		if (!$(event.target).parent().hasClass("show")) {
			$(this).find(".list").toggleClass("show");
		} else {
			var t = $(this).find("span")[0].innerHTML + "/" + $(event.target).text();
			if (t == "Tools/comment") {
				window.location.href = "././tools/commentConversion/index.html";
			}
			if (t == "Tools/color") {
				window.location.href = "././tools/colorTransform/index.html";
			}
		}
	});

	$("#navbar .head_wolist").click(function() {
		var t = $(this).find("span").text();
		if (t == "MW94") {
			window.location.href = "././index.html";
		}
	});

});