const returnFirstTwoDrivers = (arr)=>{
    return arr.slice(0,2)
}

const returnLastTwoDrivers = (arr)=>{
    return arr.slice(-2)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier=(num)=>{
    return function(){
        return num * num
    }
}

function fareDoubler(fare){
    return fare * 2
}

function fareTripler(fare){
    return fare * 3
};

function selectDifferentDrivers(arr,func){
    return func(arr)
}