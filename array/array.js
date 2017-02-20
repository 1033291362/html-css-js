var acity=new array();
acity[0]=new Array();
acity[1]=new Array();
acity[2]=new Array();
acity[3]=new Array();
acity[0][0]="xuanze";
acity[1][0]="xuanze";
acity[1][1]="1";
acity[1][2]="2";
acity[1][3]="3";
acity[2][0]="xuanze";
acity[2][1]="1";
acity[2][2]="2";
acity[2][3]="3";
acity[3][0]="xuanze";
acity[3][1]="1";
acity[3][2]="2";
acity[3][3]="3";
function changecity()
{
	var i,iprovinceindex;
	iprovinceindex=document.frm.optprovince.selectedindex;
	icitycount=0;
	while(acity[iprovinceindex][icitycount]!=null)
	icitycount++;
	document.frm.optcity.length=icitycount;
	for(i=0;i<=icitycount-1;i++)
	document.frm.optcity[i]=new option(acity[iprovinceindex][i]);
	document.frm.optcity.focus;
}
// JavaScript Document