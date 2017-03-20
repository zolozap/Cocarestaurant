// <![CDATA[
/* No Right Click */
var message="สนใจติดต่อ natapong.sripeung@coca.com";
function clickIE4()
{
	if (event.button==2)
	{
		alert(message);
		return false;
	}
}
function clickNS4(e)
{
	if (document.layers||document.getElementById&&!document.all)
	{
		if (e.which==2||e.which==3)
		{
			alert(message);
			return false;
		}
	}
}
if(document.layers)
{
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown=clickNS4;
}
else if(document.all&&!document.getElementById)
{
	document.onmousedown=clickIE4;
}
document.oncontextmenu=new Function("alert(message);return false");
/* End No Right Click */

/* No Highlighting */
var omitformtags=["input", "textarea", "select"];
omitformtags=omitformtags.join("|");
function disableselect(e)
{
	if (omitformtags.indexOf(e.target.tagName.toLowerCase())==-1)
	return false
}
function reEnable()
{
	return true
}
if(typeof document.onselectstart!="undefined")
{
	document.onselectstart=new Function ("return false")
}
else
{
	document.onmousedown=disableselect;
	document.onmouseup=reEnable;
}
/* End  No Highlighting */
// ]]>
