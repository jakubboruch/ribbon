const elementsWithTitles = document.querySelectorAll('[data-title]');
const root = document.documentElement;

// click outside listener
window.addEventListener('click', function (e) {
  const clickOutsideNodes = document.querySelectorAll('[data-clickoutside]');
  clickOutsideNodes.forEach((node) => {
    if (!node.contains(e.target) && node.classList.contains('ribbon-modal')) {
      hideModal();
    }
    if (!node.contains(e.target) && node.classList.contains('ribbon-combobox')) {
      hideList();
    }
  })
});


// tooltips
const handleBtnMouseEnter = (e) => {
  const tooltip = document.querySelector('.ribbon-btn-tooltip');
  const btn = e.target.closest('[data-title]');
  if (btn.classList.contains('active-modal')) {
    return;
  }
  const tooltipText = btn.getAttributeNode('data-title').value;
  tooltip.classList.add('ribbon-btn-tooltip--show');
  tooltip.innerHTML = tooltipText;
  root.style.setProperty('--ribbon-btn-tooltip-left', btn.getBoundingClientRect().left + btn.offsetWidth / 2 + window.scrollX + 'px');
  root.style.setProperty('--ribbon-btn-tooltip-top', btn.getBoundingClientRect().top + btn.offsetHeight + window.scrollY + 'px');
};

const handleBtnMouseLeave = (e) => {
  const tooltip = document.querySelector('.ribbon-btn-tooltip');
  const btn = e.target.closest('.ribbon-btn');
  tooltip.classList.remove('ribbon-btn-tooltip--show');
  tooltip.innerHTML = '';
  root.style.setProperty('--ribbon-btn-tooltip-left', 0);
  root.style.setProperty('--ribbon-btn-tooltip-top', 0);
};

elementsWithTitles.forEach((element) => {
  element.addEventListener('click', handleBtnMouseLeave)
});

elementsWithTitles.forEach((element) => {
  element.addEventListener('mouseenter', handleBtnMouseEnter)
  element.addEventListener('mouseleave', handleBtnMouseLeave)
})
