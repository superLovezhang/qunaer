export default (week) => {
    if(typeof week !== 'string') {
        week = week.toString();
    }
    switch(week) {
        case '1':
            return "一";
        case '2':
            return "二";
        case '3':
            return "三";
        case '4': 
            return "四";
        case '5':
            return "五";
        case '6':
            return "六";
        case '0':
            return "天";
        default:
            console.log("转译错误！")
    }
}