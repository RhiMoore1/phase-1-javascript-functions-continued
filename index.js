// code your solution here

function saturdayFun(eventFun = "roller-skate") {
    return (`This Saturday, I want to ${eventFun}!`);
}
saturdayFun();

const mondayWork = function (event = "go to the office") {
    return (`This Monday, I will ${event}.`);
}
mondayWork();


function wrapAdjective(stringName = "*") {
    return function (value = 'special') {
        return `You are ${stringName}${value}${stringName}!`;
    }
}
wrapAdjective("@")("Happy!");    


/*
function wrapAdjective(stringName = "*") {
    const innerFunction = function (value = 'special') {
        return `You are ${stringName}${value}${stringName}!`;
    }
    return innerFunction;
}
wrapAdjective("@")("Happy!");
*/