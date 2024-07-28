# APC UPS Broker

Used to format data into JSON format from APC UPSs using **apcupsd daemon** via TCP by default port **3551**

## 🧑🏻‍💻 Usage
```js
import APC_Broker from './APC_Broker.js';

(async () => {
    var ups = new APC_Broker();

    ups.on('values', data => console.log(data));

    ups.get('values');
})();
```



## Values fields
| Name| Unit| Description
| -------- | -------- | -------- |
| linev | V | Input voltage
| loadpct | % | Output load
| bcharge | % | Battery charge level
| timeleft | Min. | Time left to shutdown (battery)
| mbattchg | % | ---
| mintimel | Min. | ---
| outputv | V | Output voltage
| dwake | Sec. | ---
| dshutd | Sec. | ---
| lotrans | V | Low transfer (low voltage to start transfer)
| hitrans | V | High transfer (high voltage to start transfer)
| retpct | % | ---
| itemp | °C / °F | UPS temperature
| battv | V | Battery voltage
| linefreq | Hz | Input frequency
| numxfers | Number | ---
| tonbatt | Sec. | ---
| cumonbatt | Sec. | ---
        

## 🛠️ Tech Stack
- [Node.js](https://nodejs.org/)

## 🙇 Acknowledgements      
- [APC Protocol docs](https://networkupstools.org/protocols/apcsmart.html)
- [apcupsd Docs](https://wiki.debian.org/apcupsd)
        
 
## ➤ License
Distributed under the Apache-2.0 License. See [LICENSE](LICENSE) for more information.
        
