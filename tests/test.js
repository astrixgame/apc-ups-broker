import APCBroker from '../index.js';

(async () => {
    var test = new APCBroker();

    test.on('values', data => console.log(data));

    setInterval(() => test.get('values'), 5000);
})();
