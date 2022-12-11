<script type="text/javascript">
function slide1(){
document.getElementById('id').src="1.bmp";
setTimeout("slide2()", 3000)
document.getElementById('aId').href="link1.html"
}

function slide2(){
document.getElementById('id').src="2.bmp";
setTimeout("slide3()", 3000)
document.getElementById('aId').href="link2.html"
}

function slide3(){
document.getElementById('id').src="3.bmp";
setTimeout("slide1()", 3000)
document.getElementById('aId').href="link3.html"
}
</script>
<body onLoad="slide1()">
<a id="aId"><img id="id"></a>
</body>
</html>
