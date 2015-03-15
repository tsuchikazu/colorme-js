"use strict";

import assert from "power-assert";
import Colorme from "../src/colorme";
import nock from "nock";

describe("Colorme", () => {
  var nockBack, colorme;

  beforeEach(() => {
    nockBack = nock.back;
    nockBack.fixtures = 'test/fixtures/';
    nockBack.setMode('record');

    colorme = new Colorme({token: "token"})
  });

  describe("#shop.get()", () => {
    it("should request 'GET /v1/shop.json'", done => {
      nockBack('shop.json', nockDone => {
        colorme.shop.get().then(({shop}) => {
          assert(shop != null);
        }).then(() => {
          nockDone();
          done();
        }, done);
      })
    })
  })

  describe("#sales.stat.get()", () => {
    it("should request 'GET /v1/sales/stat.json'", done => {
      nockBack('salesStat.json', nockDone => {
        colorme.sales.stat.get().then(({salesStat}) => {
          assert(salesStat != null);
        }).then(() => {
          nockDone();
          done();
        }, done);
      })
    })
  })

  describe("#sales.get()", () => {
    it("should request 'GET /v1/sales.json'", done => {
      nockBack('sales.json', nockDone => {
        colorme.sales.get().then(({sales, meta}) => {
          assert(sales != null);
          assert(meta != null);
        }).then(() => {
          nockDone();
          done();
        }, done);
      })
    })
  })

  describe("#sales.get({id: id})", () => {
    it("should request 'GET /v1/sales/#{id}.json'", done => {
      nockBack('sale.json', nockDone => {
        colorme.sales.get({id: 52367020}).then(({sale}) => {
          assert(sale != null);
        }).then(() => {
          nockDone();
          done();
        }, done);
      })
    })
  })

  describe("#customers.get()", () => {
    it("should request 'GET /v1/customers.json'", done => {
      nockBack('customers.json', nockDone => {
        colorme.customers.get().then(({customers, meta}) => {
          assert(customers != null);
          assert(meta != null);
        }).then(() => {
          nockDone();
          done();
        }, done);
      })
    })
  })

  describe("#customers.get({id: id})", () => {
    it("should request 'GET /v1/customers/#{id}.json'", done => {
      nockBack('customer.json', nockDone => {
        colorme.customers.get({id: 35934095}).then(({customer}) => {
          assert(customer != null);
        }).then(() => {
          nockDone();
          done();
        }, done);
      })
    })
  })

  describe("#products.get()", () => {
    it("should request 'GET /v1/products.json'", done => {
      nockBack('products.json', nockDone => {
        colorme.products.get().then(({products, meta}) => {
          assert(products != null);
          assert(meta != null);
        }).then(() => {
          nockDone();
          done();
        }, done);
      })
    })
  })

  describe("#products.get({id: id})", () => {
    it("should request 'GET /v1/products/#{id}.json'", done => {
      nockBack('product.json', nockDone => {
        var productId = 67981978;
        colorme.products.get({id: productId}).then(({product}) => {
          assert(product != null);
        }).then(() => {
          nockDone();
          done();
        }, done);
      })
    })
  })

  describe("#stocks.get()", () => {
    it("should request 'GET /v1/stocks.json'", done => {
      nockBack('stocks.json', nockDone => {
        colorme.stocks.get().then(({stocks}) => {
          assert(stocks != null);
        }).then(() => {
          nockDone();
          done();
        }, done);
      })
    })
  })

  describe("#categories.get()", () => {
    it("should request 'GET /v1/categories.json'", done => {
      nockBack('categories.json', nockDone => {
        colorme.categories.get().then(({categories}) => {
          assert(categories != null);
        }).then(() => {
          nockDone();
          done();
        }, done);
      })
    })
  })

  describe("#payments.get()", () => {
    it("should request 'GET /v1/payments.json'", done => {
      nockBack('payments.json', nockDone => {
        colorme.payments.get().then(({payments}) => {
          assert(payments != null);
        }).then(() => {
          nockDone();
          done();
        }, done);
      })
    })
  })

  describe("#deliveries.get()", () => {
    it("should request 'GET /v1/deliveries.json'", done => {
      nockBack('deliveries.json', nockDone => {
        colorme.deliveries.get().then(({deliveries}) => {
          assert(deliveries != null);
        }).then(() => {
          nockDone();
          done();
        }, done);
      })
    })
  })

  describe("#deliveries.date.get()", () => {
    it("should request 'GET /v1/deliveries/date.json'", done => {
      nockBack('deliveriesDate.json', nockDone => {
        colorme.deliveries.date.get().then(({deliveryDate}) => {
          assert(deliveryDate != null);
        }).then(() => {
          nockDone();
          done();
        }, done);
      })
    })
  })

  xdescribe("#gifts.get()", () => {
    it("should request 'GET /v1/gifts.json'", done => {
      nockBack('gifts.json', nockDone => {
        colorme.gifts.get().then(({gifts}) => {
          assert(categories != null);
        }).then(() => {
          nockDone();
          done();
        }, done);
      })
    })
  })

})
