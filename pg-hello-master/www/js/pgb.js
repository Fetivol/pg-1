function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}
function personalInfo() {

	info =  'Hi, I am ' + '\n' +
			'Name    :  A'  + '\n' + 
			'Surname : B'  + '\n' + 
			'Age: 22'  + '\n' + 
			'Email  : asdfasf@gmail.com '+ '\n';

	navigator.notification.alert(info);
	
}