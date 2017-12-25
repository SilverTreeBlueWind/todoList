// Mark completed items
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Remove items	
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(600, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// Add new items
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {		// hit Enter key
		var newToDo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + newToDo + "</li>");
	}
});

$(".fa-pencil-square-o").click(function() {
	$("input[type='text']").fadeToggle();
});