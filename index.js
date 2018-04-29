var katzDeliLine= [];
function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);
  var inLine= katzDeliLine.length;
  return `Welcome, ${newName}. You are number ${inLine} in line.`
}

function nowServing(){
  if(katzDeli.length > 0) {
    return `Now Serving katzDeli.shift()`;
  } else{ return `There is nobody waiting to be served!`;
 }
}

function currentLine(katzDeliLine) {
  return `The line is currently: ${katzDeliLine}`
}