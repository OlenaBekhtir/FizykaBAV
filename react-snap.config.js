module.exports = {
    // Опції для react-snap
    crawl: true,
    saveAs: 'html', // Зберігати сторінки як HTML-файли
    puppeteerArgs: {
      // Додаткові параметри для Puppeteer, якщо потрібно
      // Наприклад, для зменшення часу очікування перед згенеруванням сторінки
      waitUntil: 'networkidle2',
    },
    // Інші налаштування react-snap
  };