console.log("hi")


language.innerText = "Location:US 1111 Eighth Street // San Francisco CA 94107"


navigator.geolocation.getCurrentPosition(function(e){
	console.log(e)
});

printButton.addEventListener("click",function(){
	window.print()
})