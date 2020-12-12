import moment from 'moment';

export function calDays(){
  var today = moment()
  let diffDay = today.diff('2020-11-09','days')+1
  let printDay = diffDay;
  if(diffDay%7==0) printDay = diffDay - Math.floor(diffDay/7)
  else  printDay = diffDay - Math.floor(diffDay/7)  
  return printDay
}

export function checkOverDDays(){
    let calDay = calDays()
    return (calDay>=30) ? true : false;
}
