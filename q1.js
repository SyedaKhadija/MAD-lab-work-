var numbers = 65438;
var check= 2;
function kthdigit(numbers,check)
{
	if (k <= 0)
	{
		document.write(-1);
		return;
	}
	var dig = String(numbers);
	if (check > dig.length)
	{
		document.write(-1);
	}
	else
	{
		var nbr = dig.charAt(dig.length - check)
		document.write(Number(nbr));
	}
}
kthdigit(numbers, check);