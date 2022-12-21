var special = ['zeroth','first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
var deca = ['twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];

function stringifyNumber(n) {
  if (n < 20) return special[n];
  if (n%10 === 0) return deca[Math.floor(n/10)-2] + 'ieth';
  return deca[Math.floor(n/10)-2] + 'y-' + special[n%10];
}

var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + '-' + a[n[5][1]]): '';
    return str.endsWith('-') ? str.slice(0, -1) : str;
}

today =  new Date();
y = today.getFullYear();
m = today.getMonth() + 1;
d = today.getDate();
document.getElementById("date").innerHTML = 'And lo, on this day, being the ' + stringifyNumber(d) + " day of the " + stringifyNumber(m) + " month<br></br>of the " + stringifyNumber(y - 2000) + " year since the dawning of the new millennium,<br></br>'tis a mere";

countDownDate = new Date("Mar 1, 2023 00:00:01").getTime();

// Find the distance between now and the count down date
var distance = countDownDate - today.getTime();

// Time calculations for days, hours, minutes and seconds
var days = Math.ceil(distance / (1000 * 60 * 60 * 24));

document.getElementById("timeToWait").innerHTML = inWords(days)

document.getElementById("moonrises").innerHTML = "moonrise" + (days == 1 ? "" : "s") + " more 'til the blessed morn of that most hallowed of days...<br></br>"

window.onload = onPageLoad.bind(null, (today.getDay() + 1) % 7 + 1);

function onPageLoad(fairyIndex) {
    document.querySelector('.fairy').classList.add('fairy' + fairyIndex);
    document.querySelector('.fairy').classList.remove('hidden-on-load');
}