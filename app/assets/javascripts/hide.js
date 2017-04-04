function hideWhenClicked (e) {
  
  	e.preventDefault();
  	$('#hide_this').hide();
}
$("#hide_this").click(hideWhenClicked)