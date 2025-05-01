async function main() {
  const response = await fetch('./data.json');
  const data = await response.json();

  const container = document.querySelector('.menu-wrapper');

  data.forEach((item) => {
    const menu = document.createElement('div');
    menu.classList = 'menu';
    menu.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="menu-info">
        <div class="menu-name">${item.name}</div>
        <div class="menu-price">₩ ${item.price.toLocaleString()}</div>
        <div class="menu-describe">${item.description}</div>
      </div>
    `;
    container.appendChild(menu);
  });

  const buttons = document.querySelectorAll('nav button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const beforeButton = document.getElementById('selected');
      if (beforeButton) {
        beforeButton.removeAttribute('id');
      }
      button.id = 'selected';
      container.innerHTML = '';

      const type = button.textContent.toLowerCase();
      let filterData;
      if (type == 'all') filterData = data;
      else filterData = data.filter((d) => d.type == type);

      filterData.forEach((item) => {
        const menu = document.createElement('div');
        menu.classList = 'menu';
        menu.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="menu-info">
            <div class="menu-name">${item.name}</div>
            <div class="menu-price">\\ ${item.price.toLocaleString()}</div>
            <div class="menu-describe">${item.description}</div>
          </div>
        `;
        container.appendChild(menu);
      });
    });
  });
}

main();
