/*
print the date in format of mm/date/year
*/

var now = new Date(),
//console.log(now.getMonth()+1,"-",now.getDate(),"-",now.getFullYear()," ",now.getHours());

//month,day and year
month = ''+ now.getMonth()+1,
day = ''+ now.getDate(),
year = now.getFullYear();

//for time in hors,min and sec
timeHours = now.getHours();
timeMinutues=now.getMinutes();
timeSeconds = now.getSeconds();

//print the date and time
console.log("Date:"+month+"/"+day+"/"+year);
console.log("time:"+timeHours+":"+timeMinutues+":"+timeSeconds);