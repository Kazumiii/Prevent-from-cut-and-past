<script>

function ds()
{
	return !1;
}
function ra()
{
	return !0;
}

var d=document.getElementById("protected_div");
c=d.contentWindow.document;
c.open();

c.oncontextmenu=new Function("return false");

c.onmousedown=ds;

c.onclick=ra;

c.onselectstart=new Function("return false");

c.onselect=new Function("return false");



</script>