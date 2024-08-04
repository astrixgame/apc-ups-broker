var APCBroker = require('APCBroker');

(async () => {
    var test = new APCBroker();

    test.on('values', data => console.log(data));

    setInterval(() => test.get('values'), 5000);
})();
