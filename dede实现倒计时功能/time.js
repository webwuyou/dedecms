<script language="javascript" type="text/javascript"> 
var interval = 1000; 
function ShowCountDown(year,month,day,divname) 
{ 
var now = new Date(); 
var endDate = new Date(year, month-1, day); 
var leftTime=endDate.getTime()-now.getTime(); 
var leftsecond = parseInt(leftTime/1000); 
//var day1=parseInt(leftsecond/(24*60*60*6)); 
var day1=Math.floor(leftsecond/(60*60*24)); 
var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
$("#qdds_day_num").text(day1);
$("#qdds_hour_num").text(hour);
$("#qdds_minu_num").text(minute);
$("#qdds_sec_num").text(second);
var cc = document.getElementById("divname"); 

cc.innerHTML = "惠房网提示您，活动结束还剩"+day1+"天"+hour+"小时"+minute+"分"+second+"秒"; 
} 
// window.setInterval(function(){
// 	ShowCountDown({dede:field.endtime function="MyDate('Y-m-d H:i',@me)"/},'divname');
// }); 

window.setInterval(function(){ShowCountDown({dede:field.endtime function=MyDate('Y,m,d',@me)/},'divname');}, interval); 

//2010,4,20  可以这么来{dede：field.riqi function=MyDate('Y,m,d',@me)/}

</script>