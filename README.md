Names to gender mapping for names you can encounter in Russia and other ex-USSR countries.  
Not necessarily a Russian name, any name which happened to be written in **Russian Cyrillic**.  
___
Names are in lower case; "m" stands for "male" and "f" for "female" (surprise!)
## Usage
```
$ npm install ru-names
```
```javascript
const names = require('ru-names')
console.log(names['александр']) // "m"
console.log(names['александра']) // "f"
```
## Contributing
Feel free to add missing names. Pull requests are welcomed. At least for now it's actively maintained. 
#### Tests 
Please test your changes before submitting a pull request.  
From the project directory:
```
$ npm run test -s
```
or (simpler and faster)
```
$ yarn test
```
(make sure to first run `npm install` or `yarn install`)
