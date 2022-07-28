function search_movie() {
	let input = document.getElementById('search-item').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('box-movies');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}
function load_home (e) {
	(e || window.event).preventDefault();
	var con = document.getElementById('content')
	,   xhr = new XMLHttpRequest();
  
	xhr.onreadystatechange = function (e) { 
	  if (xhr.readyState == 4 && xhr.status == 200) {
		con.innerHTML = xhr.responseText;
	  }
	}
  
	xhr.open("GET", "http://www.yoursite.com/home.html", true);
	xhr.setRequestHeader('Content-type', 'text/html');
	xhr.send();
  }