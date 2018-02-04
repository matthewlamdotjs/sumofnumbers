function sumFor(list){
  let sum = 0;
  for(var i=0; i<list.length;i++){
    sum += list[i];
  }
  return sum;
}

function sumWhile(list){
  let sum = 0;
  var i = 0;
  while(i<list.length){
    sum+=list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list){
  if(list.length>1){
    list[0]+=list.pop();
    return sumRecursion(list);
  }
  else{
    return list[0];
  }
}

function sumTheSimpleWay(list){
  return _.reduce(list, function(memo, num){ return memo + num; }, 0);
}
