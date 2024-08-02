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
| mbattchg | % | Minimal battery charge level
| mintimel | Min. | Minimal battery runtime
| outputv | V | Output voltage
| dwake | Sec. | Time before power on after power restore
| dshutd | Sec. | Delay for shutdown command
| lotrans | V | Low transfer (low voltage to start transfer)
| hitrans | V | High transfer (high voltage to start transfer)
| retpct | % | Battery level required to turn on
| itemp | °C / °F | UPS temperature
| battv | V | Battery voltage
| linefreq | Hz | Input frequency
| numxfers | Number | Count of total transfers
| tonbatt | Sec. | Current time on battery
| cumonbatt | Sec. | Total time on battery
        

## 🛠️ Tech Stack
- [Node.js](https://nodejs.org/)

## 🙇 Acknowledgements      
- [APC Protocol docs](https://networkupstools.org/protocols/apcsmart.html)
- [apcupsd Docs](https://wiki.debian.org/apcupsd)
        
 
## ➤ License
Distributed under the Apache-2.0 License. See [LICENSE](LICENSE) for more information.
        
