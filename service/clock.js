const moment = require('moment');
var ConfigParser = require('configparser');
const configZone = new ConfigParser();

/*時區設定*/
configZone.read('./service/setService.cfg');
configZone.sections();
var locaLang=configZone.get('timezone','locaLang');
var localZone=configZone.get('timezone','localZone');;

/*outpuut console Time*/
function consoleTime(){
    var clock = new Date();
    var nowTime = clock.toLocaleString(locaLang, {timeZone: localZone}); //時區
    return nowTime;
}

function lunaDate(){
    function toLunaTime(date) {
        return date.toLocaleString('zh-u-ca-chinese', { dateStyle: 'full' }) + ' ' + date.toLocaleTimeString(0, { hour12: false });
    }
    return toLunaTime(new Date);
}

/*format date&time*/
function formatDate(){
    var clock = new moment();
    var dateFormat=configZone.get('formatStyle','dateFormat');
    var Date=clock.format(dateFormat);
    return Date;
};
function formatTime(){
    var clock = new moment();
    var timeFormat=configZone.get('formatStyle','timeFormat');
    var Time=clock.format(timeFormat);
    return Time;
}

module.exports={
    consoleTime:consoleTime,
    lunaDate:lunaDate,
    formatDate:formatDate,
    formatTime:formatTime
}