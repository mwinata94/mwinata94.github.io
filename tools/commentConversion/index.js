$(document).ready(function() {

	// Toggle dropdown
	$("#navbar .head_wolist").click(function() {
		var t = $(this).find("span").text();
		if (t == "MW94") {
			window.location.href = "../../index.html";
		}
	});

	$("#cc_copy").click(function() {
		$("#cc_output").focus();
		$("#cc_output").select();
		document.execCommand("copy");
	});

	/* Input TextArea Default Value */
	$("#cc_input").val("add text here");

	/* Output TextArea Default Value */
	$("#cc_output").val("/*add text here */");

	/* Trigger output change on input change */
	$('#cc_input').bind('input propertychange', function() {
		var result = "";
		var maxLength = 0;
		
		/* Paragraph is separated by lines */
		var t_array = $("#cc_input").val().split("\n");
		
		/* Get Largest Line Length */
		for (var i = 0; i < t_array.length; i++)
			maxLength = maxLength < t_array[i].length ? t_array[i].length : maxLength;

		/* Begin Conversion */
		if (t_array.length == 1) {
			
			/* Comment Is A One-Liner */
			result = result.concat("/* ");
			result = result.concat(t_array[0]);
			result = result.concat(" */");

		} else {
			/* First Line */
			result = result.concat("/**");
			for (var i = 0; i < maxLength; i++) result = result.concat("*");
			result = result.concat("**\n");
			/* Body */
			for (var i = 0; i < t_array.length; i++) {
				result = result.concat(" * ").concat(t_array[i]);
				for (var j = t_array[i].length; j < maxLength; j++) result = result.concat(" ");
				result = result.concat(" *\n");
			}
			/* Last Line */
			result = result.concat(" **");
			for (var i = 0; i < maxLength; i++) result = result.concat("*");
			result = result.concat("**/");
		}
		/* End Conversion */

		/* Display Result */
		$("#cc_output").val(result);
	});

});