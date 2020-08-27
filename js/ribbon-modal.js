const showEmojiOptions = (event) => {
  event.stopPropagation();
  const emojiContainer = document.createElement('div');
  const emojiList = [
    {
      value: '😀',
      title: 'Smile 1'
    },
    {
      value: '😁',
      title: 'Smile 2'
    },
    {
      value: '😂',
      title: 'Smile 3'
    },
    {
      value: '🤣',
      title: 'Smile 4'
    },
    {
      value: '😀',
      title: 'Smile 5'
    },
    {
      value: '😄',
      title: 'Smile 6'
    },
    {
      value: '😅',
      title: 'Smile 7'
    },
    {
      value: '😆',
      title: 'Smile 8'
    },
    {
      value: '😉',
      title: 'Smile 9'
    },
    {
      value: '😊',
      title: 'Smile 11'
    },
    {
      value: '😋',
      title: 'Smile 12'
    },
    {
      value: '😎',
      title: 'Smile 13'
    },
    {
      value: '😍',
      title: 'Smile 14'
    },
    {
      value: '😘',
      title: 'Smile 15'
    },
    {
      value: '😗',
      title: 'Smile 16'
    },
    {
      value: '😙',
      title: 'Smile 17'
    },
    {
      value: '😚',
      title: 'Smile 18'
    },
    {
      value: '🙂',
      title: 'Smile 19'
    },
    {
      value: '🤗',
      title: 'Smile 20'
    },
    {
      value: '🤔',
      title: 'Smile 21'
    },
    {
      value: '😐',
      title: 'Smile 22'
    },
    {
      value: '😑',
      title: 'Smile 23'
    },
    {
      value: '😶',
      title: 'Smile 24'
    },
    {
      value: '🙄',
      title: 'Smile 25'
    },
    {
      value: '😏',
      title: 'Smile 26'
    },
  ];
  emojiContainer.innerHTML = '';
  emojiContainer.classList.add('ribbon-modal__content');
  emojiList.forEach((emoji) => {
    const emojiIcon = document.createElement('button');
    emojiIcon.classList.add('emoji-icon');
    emojiIcon.innerHTML = emoji.value;
    emojiIcon.dataset.value = emoji.value;
    emojiIcon.dataset.title = emoji.title;
    emojiIcon.addEventListener('click', selectEmoji);
    emojiIcon.addEventListener('click', handleBtnMouseLeave);
    emojiIcon.addEventListener('mouseenter', handleBtnMouseEnter);
    emojiIcon.addEventListener('mouseleave', handleBtnMouseLeave);
    emojiContainer.appendChild(emojiIcon);
  });
  toggleModal(event, emojiContainer);
};

const selectEmoji = (e) => {
  const emojiIcon = e.target.closest('.emoji-icon');
  console.log(`Selected emoji: ${emojiIcon.dataset.value}`);
  hideModal();
};

const toggleModal = (event, content) => {
  const modal = document.querySelector('.ribbon-modal');
  if (modal.classList.contains('ribbon-modal--show')) {
    hideModal();
  } else {
    showModal(event, content);
  }
};

const showModal = (event, content) => {
  const modal = document.querySelector('.ribbon-modal');
  const element = event.target.closest('[onclick]');
  const positionLeft = element.getBoundingClientRect().left;
  const positionTop = element.getBoundingClientRect().top + element.getBoundingClientRect().height;
  element.classList.add('active-modal');
  root.style.setProperty('--ribbon-modal-left', positionLeft + 'px');
  root.style.setProperty('--ribbon-modal-top', positionTop + 'px');
  modal.classList.add('ribbon-modal--show');
  modal.innerHTML = '';
  modal.appendChild(content);
};

const hideModal = () => {
  const modal = document.querySelector('.ribbon-modal');
  const activeBtns = document.querySelectorAll('.active-modal');
  activeBtns.forEach((btn) => {
    btn.classList.remove('active-modal');
  });

  modal.innerHTML = '';
  modal.classList.remove('ribbon-modal--show');
};
