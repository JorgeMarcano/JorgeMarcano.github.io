imaging();

function imaging() {
	var i;
	
	var imgs = document.getElementsByClassName("myTabs");
	
	//var percentage = "" + (100.0 / imgs.length) + "%";
	var percentage = "" + 100 + "%";
	
	for (i = 0; i < imgs.length; i++) {
		imgs[i].style.width = percentage;
	}
}