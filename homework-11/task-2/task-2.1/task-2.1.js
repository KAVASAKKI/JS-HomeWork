const delay = ms => {
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;

    setTimeout(() => {
      if (passed) {
        resolve(ms);
      }

      reject('Error promise');
    }, ms);
  });
};

const onSuccess = time => console.log(`Resolved after ${time}ms`);
const onError = console.log;

// Вызовы функции для проверки
delay(2000).then(onSuccess).catch(onError); // Resolved after 2000ms
delay(1000).then(onSuccess).catch(onError); // Resolved after 1000ms
delay(1500).then(onSuccess).catch(onError); // Resolved after 1500ms
