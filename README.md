# colome-js
[ColorMeShop API](http://shop-pro.jp/?mode=api) client written in JavaScript for browser and node.js

## Install
```sh
$ npm install colorme
```

## Usage
```javascript
var Colorme = require('colorme');

var colorme = new Colorme({token: 'colorme-api-token'});
colorme.products.get().then(function(data) {
  console.log(data.products);
  console.log(data.meta);
});
colorme.products.get({id: 1}).then(function(data) {
  console.log(data.product);
});
colorme.products.put({id: 1, product:{name: "UpdatedName"}}).then(function(data) {
  console.log(data.product);
});
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
