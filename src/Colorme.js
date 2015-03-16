"use strict";
import Resource from "./Resource"
import camelize from "camelize";
import assign from "object.assign";

class Colorme {
  constructor({token}) {
    Resource.baseUrl = 'https://api.shop-pro.jp';
    Resource.token = token;
    Resource.urlSuffix = '.json';
    Resource.responseInterceptor = (response => {
      return camelize(response.data);
    });

    let resources = [
      new Resource({name: 'shop', methods: [Resource.GET]}),
      new Resource({name: 'sales', methods: [Resource.GET], resources: [
        new Resource({name: 'stat', methods: [Resource.GET]})
      ]}),
      new Resource({name: 'customers', methods: [Resource.GET]}),
      new Resource({name: 'products', methods: [Resource.GET, Resource.PUT]}),
      new Resource({name: 'stocks', methods: [Resource.GET]}),
      new Resource({name: 'categories', methods: [Resource.GET]}),
      new Resource({name: 'payments', methods: [Resource.GET]}),
      new Resource({name: 'deliveries', methods: [Resource.GET], resources: [
        new Resource({name: 'date', methods: [Resource.GET]})
      ]}),
      new Resource({name: 'gifts', methods: [Resource.GET]}),
    ];
    let v1 = new Resource({name: 'v1', methods:[], resources: resources});

    assign(this, v1);
  }
}

export default Colorme;
