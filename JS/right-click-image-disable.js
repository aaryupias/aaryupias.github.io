<!-- Disable right click on image https://host.ruapk.info.np -->
//<![CDATA[
function nocontext(e) {
var clickedTag = (e==null) ? event.srcElement.tagName : e.target.tagName;
if (clickedTag == "IMG") {
alert(alertMsg);
return false;}}
var alertMsg = "No Right Click on Image. Thank You.";
document.oncontextmenu = nocontext;
//]]>
