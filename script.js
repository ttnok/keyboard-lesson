/**
 * 目次自動生成
 */

const contents = document.querySelector('#contents');
const h2all = document.querySelectorAll('main > h2');

const ul = document.createElement('ol');

[...h2all].forEach((h2, i) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    i++;

    h2.id = `section${i}`;
    a.href = `#section${i}`;
    a.textContent = h2.textContent;

    li.appendChild(a);
    ul.appendChild(li);
});

contents.appendChild(ul);


