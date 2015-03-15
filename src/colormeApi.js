"use strict";
import Resource from "./resource"
import camelize from "camelize";

class ColormeApi {
  constructor({token}) {
    Resource.baseUrl = 'https://api.shop-pro.jp';
    Resource.token = token;
    Resource.urlSuffix = '.json';
    Resource.responseInterceptor = (response => {
      return camelize(JSON.parse(response.data));
    });

    let resources = [
      new Resource({name: 'shop', methods: [Resource.GET]}),
      new Resource({name: 'sales', methods: [Resource.GET], resources: [
        new Resource({name: 'stat', methods: [Resource.GET]})
      ]}),
      new Resource({name: 'customers', methods: [Resource.GET]}),
      new Resource({name: 'products', methods: [Resource.GET]}),
      new Resource({name: 'stocks', methods: [Resource.GET]}),
      new Resource({name: 'categories', methods: [Resource.GET]}),
      new Resource({name: 'payments', methods: [Resource.GET]}),
      new Resource({name: 'deliveries', methods: [Resource.GET], resources: [
        new Resource({name: 'date', methods: [Resource.GET]})
      ]}),
      new Resource({name: 'gifts', methods: [Resource.GET]}),
    ];
    let v1 = new Resource({name: 'v1', methods:[], resources: resources});

    Object.assign(this, v1);
  }
}

export default ColormeApi;
