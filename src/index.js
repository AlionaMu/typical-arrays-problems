

function min (array) {
    var x = Math.min.apply(null, array);
    return x;
}

function max (array) {
    var y = Math.max.apply(null, array);
    return y;
}

function avg (array) {
    const sum = array.reduce(add,0); 

    function add(accum, a) {
        return accum + a;
    }
    return sum/array.length; 
}

exports.min = function min (array) {
  var x = Math.min.apply(null, array);
  return x;
}

exports.max = function max (array) {
  var y = Math.max.apply(null, array);
    return y;
}

exports.avg = function avg (array) {
  
  const sum = array.reduce(add,0); 
    function add(accum, a) {
        return accum + a;
    }
    return sum/array.length; }
   
    

/*console.log(min([2,-24,13,-11,16,-12,-16,24,13,-38,19,-16,19,3,2,32,0,-10,-19,-27]));
console.log(max([3,2,1]));
console.log(avg([34,6,11,33,0,-10,10,3,22,-18,6,4,-21,32,23,18,-33,23,0,-1]));*/