import './index.scss'

document.addEventListener('DOMContentLoaded', () => {
  fetchData();
});

async function fetchData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    renderContent(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function renderContent(data) {
  const container = document.getElementById('content-container');
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    renderAccordion(container, data);
  } else {
    renderTabs(container, data);
  }
}

function renderTabs(container, data) {
  const tabList = document.createElement('ul');
  tabList.className = 'flex border-b';

  const tabContent = document.createElement('div');
  tabContent.className = 'p-6';

  data.forEach((item, index) => {
    const tabItem = createTabItem(item, index);
    tabList.appendChild(tabItem);

    const contentItem = createContentItem(item, index);
    tabContent.appendChild(contentItem);
  });

  container.appendChild(tabList);
  container.appendChild(tabContent);

  // Open first tab by default
  openTab(0);
}

function createTabItem(item, index) {
  const li = document.createElement('li');
  li.className = 'mr-2';

  const button = document.createElement('button');
  button.className = 'tab-button';
  button.textContent = item.title;
  button.addEventListener('click', () => openTab(index));

  li.appendChild(button);
  return li;
}

function createContentItem(item, index) {
  const div = document.createElement('div');
  div.className = 'tab-pane hidden';
  div.setAttribute('data-tab-index', index);
  div.innerHTML = item.content;
  return div;
}

function openTab(index) {
  const tabs = document.querySelectorAll('.tab-button');
  const panes = document.querySelectorAll('.tab-pane');

  tabs.forEach((tab, i) => {
    if (i === index) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  panes.forEach((pane, i) => {
    if (i === index) {
      pane.classList.remove('hidden');
    } else {
      pane.classList.add('hidden');
    }
  });
}

function renderAccordion(container, data) {
  const accordion = document.createElement('div');
  accordion.className = 'divide-y divide-gray-200';

  data.forEach((item, index) => {
    const accordionItem = createAccordionItem(item, index);
    accordion.appendChild(accordionItem);
  });

  container.appendChild(accordion);

  // Open first accordion item by default
  toggleAccordionItem(0);
}

function createAccordionItem(item, index) {
  const div = document.createElement('div');
  div.className = 'border-b';

  const button = document.createElement('button');
  button.className = 'accordion-button';
  button.innerHTML = `
        ${item.title}
        <svg class="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
    `;
  button.addEventListener('click', () => toggleAccordionItem(index));

  const content = document.createElement('div');
  content.className = 'accordion-content max-h-0';
  const innerContent = document.createElement('div');
  innerContent.className = 'p-6';
  innerContent.innerHTML = item.content;
  content.appendChild(innerContent);

  div.appendChild(button);
  div.appendChild(content);
  return div;
}

function toggleAccordionItem(index) {
  const items = document.querySelectorAll('.accordion-button');
  const contents = document.querySelectorAll('.accordion-content');

  items.forEach((item, i) => {
    const content = contents[i];
    const svg = item.querySelector('svg');

    if (i === index) {
      item.classList.toggle('active');
      svg.classList.toggle('rotate-180');

      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0px';
      }
    } else {
      item.classList.remove('active');
      svg.classList.remove('rotate-180');
      content.style.maxHeight = '0px';
    }
  });
}

window.addEventListener('resize', () => {
  const container = document.getElementById('content-container');
  container.innerHTML = '';
  fetchData();
});
