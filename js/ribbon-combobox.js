const showFontSizeList = (e) => {
  const values = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const listItems = buildListItems(values);
  const list = e.target.closest('.ribbon-combobox').querySelector('.ribbon-combobox__list');
  list.innerHTML = '';
  listItems.forEach((listItem) => {
    list.appendChild(listItem);
  });
  toggleList(e);
};

const buildListItems = (values) => values.map((value) => {
  const li = document.createElement('li');
  li.addEventListener('click', selectValue);
  li.dataset.value = value;
  li.classList.add('ribbon-combobox__item');
  li.innerHTML = value;
  return li;
});

const toggleList = (e) => {
  const list = e.target.closest('.ribbon-combobox').querySelector('.ribbon-combobox__list');
  if (list.classList.contains('ribbon-combobox__list--show')) {
    hideList();
  } else {
    showList(e);
  }
};

const showList = (e) => {
  const list = e.target.closest('.ribbon-combobox').querySelector('.ribbon-combobox__list');
  list.classList.add('ribbon-combobox__list--show');
};

const hideList = () => {
  const lists = document.querySelectorAll('.ribbon-combobox__list');
  lists.forEach((list) => {
    list.innerHTML = '';
    list.classList.remove('ribbon-combobox__list--show')
  })
};

const selectValue = (e) => {
  const value = e.target.closest('[data-value]').dataset.value;
  const input = e.target.closest('.ribbon-combobox');
  input.querySelector('.ribbon-combobox__textfield').value = value;
  hideList();
};
