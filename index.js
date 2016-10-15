function getFirstSelector(selector){
    return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list')
  for (var x = 0; x < list.length; x++) {
    list[x].innerHTML = parseInt(x+n);
  }
}

function deepestChild() {
  var list = document.getElementById('grand-node').querySelectorAll('div');
  return list[list.length-1];
}
