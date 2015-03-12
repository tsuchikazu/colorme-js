"use strict";

import assert from "power-assert";
import ColormeApi from "../src/colormeApi";
import nock from "nock";

describe("ColormeApi", () => {
  var nockBack, colormeApi;

  beforeEach(() => {
    nockBack = nock.back;
    nockBack.fixtures = 'test/fixtures/';
    nockBack.setMode('record');

    colormeApi = new ColormeApi({token: "token"})

  });

  describe("shop.get()", () => {
    it("should return shop", done => {
      nockBack('shop.json', nockDone => {
        colormeApi.shop.get().then(shop => {
          assert(shop.id == "PA01131974");
          assert(shop.loginId == "tsuchikazu");
          nockDone();
          done();
        })
      })
    })
  })

  describe("products.get()", () => {
    it("should return products", done => {
      nockBack('products.json', nockDone => {
        colormeApi.products.get().then(({products, meta}) => {
          assert(products[0].id == 86927961);
          assert(products[0].name == "TEST");

          assert(meta.total = 1842)
          assert(meta.offset = 0)
          nockDone();
          done();
        })
      })
    })
  })

  describe("products.get({id: id})", () => {
    it("should return product", done => {
      nockBack('product.json', nockDone => {
        var productId = 66768641;
        colormeApi.products.get({id: productId}).then(product => {
          asset(product.id == productId);
          asset(product.name == "デスラビット刺繍　ボアネックウォーマー【通常版】");
          nockDone();
          done();
        })
      })
    })
  })

  describe("categories.get()", () => {
    it("should return categories", done => {
      nockBack('categories.json', nockDone => {
        colormeApi.categories.get().then(categories => {
          assert(products[0].idBig == 988193);
          assert(products[0].idSmall == 0);
          assert(products[0].name == "レディースアパレル");
          nockDone();
          done();
        })
      })
    })
  })

})
