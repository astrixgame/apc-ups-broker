import APC_Broker from './APC_Broker.js';

(async () => {
    var test = new APC_Broker();

    test.on('values', data => console.log(data));

    setInterval(() => test.get('values'), 5000);
})();
