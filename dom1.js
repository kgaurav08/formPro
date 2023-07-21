var items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'green';
items[2].style.fontWeight = 'green';
items[0].style.fontWeight = 'bold';
items[1].style.fontWeight = 'bold';
items[2].style.fontWeight = 'bold';

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';
li[4].textContent = 'Hello 5';
for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor = '#f4f4f4';
}
