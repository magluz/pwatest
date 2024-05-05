import store from './stores/index';

window.addEventListener('online', () => {
  console.log('Ando online compa');
  store.dispatch('IndexedDB/prueba');
});

window.addEventListener('offline', () => {
  console.log('Ando offline compa');
  store.dispatch('IndexedDB/prueba');
});

window.addEventListener('push', (event) => {
  const title = 'Get Started With Workbox';
  const options = {
    body: event.data.text(),
  };
  event.waitUntil(window.registration.showNotification(title, options));
});