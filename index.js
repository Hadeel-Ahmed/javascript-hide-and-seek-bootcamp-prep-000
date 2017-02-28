function getFirstSelector(selector)
{
  return document.querySelector(selector)
}

function nestedTarget()
{
  return document.getElementById('nested').querySelector('div.target')

}

function increaseRankBy(n)
{
  const lis=document.getElementById('app').querySelectorAll('ul.ranked-list li')
  var j=0;
  for (let i = 0, l = lis.length; i < l; i++)
  {
    j=parseInt(lis[i].innerHTML)
    lis[i].innerHTML=(j+n).toString()
   }

}

function deepestChild()
{
const lis=document.getElementById('grand-node');
var parent=lis;
var child=lis;
for(let i=0,l=lis.length;i<l;i++)
{
  child=document.querySelector(parent[0]);
  parent=child;
}
return child;
}
