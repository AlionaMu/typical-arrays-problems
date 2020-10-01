

function min (array) {
    var x = Math.min.apply(null, array);
    return array && array.length? x : 0;
}

function max (array) {
    var y = Math.max.apply(null, array);
    return array && array.length? y : 0;
}

function avg (array) {
    if (array && array.length) {
    const sum = array.reduce(add,0); 
    
    function add(accum, a) {
        return accum + a;
    }
    return sum/array.length}
    else return 0; 
}

exports.min = function min (array) {
  var x = Math.min.apply(null, array);
  return array && array.length? x : 0;
}

exports.max = function max (array) {
  var y = Math.max.apply(null, array);
    return array && array.length? y : 0;
}

exports.avg = function avg (array) {
  
  if (array && array.length) {
    const sum = array.reduce(add,0); 
    
    function add(accum, a) {
        return accum + a;
    }
    return sum/array.length}
    else return 0; }
   
    
