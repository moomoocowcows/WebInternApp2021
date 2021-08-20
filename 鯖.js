//document.write('Hello');

const d = new Date();
const mmm = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
document.getElementById('date').innerHTML = ('<b>' + mmm[d.getMonth()] + '</b><br>' + d.getDate());

document.onkeydown = function(t) {
	if (t.which == 32) {
	$("#hid-c").slideToggle(100);
	}
};

function clock(){
	var d = new Date();
	document.getElementById('bar').style.width = ((d.getHours()*60 + d.getMinutes()) / 1440 * 100) + '%';
	//document.getElementById('bar').innerHTML = d.getHours() + 'h' + d.getMinutes() + 'm' + d.getSeconds() + 's';
}
clock();
setInterval(clock, 60000);

$('a.fin-lnk').click(function(e) {
    e.preventDefault();
    window.open('https://www.tangerine.ca/app/#/accounts');
    window.open('https://online.simplii.com/ebm-resources/public/client/web/index.html#/accounts');
    window.open('https://rbaccess.rogersbank.com/app/accountSummary');
    window.open('https://brimfinancial.com/webportal/Home');
});