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
      new Resource({name: 'products', methods: [Resource.GET]}),
      new Resource({name: 'categories', methods: [Resource.GET]}),
    ];
    let v1 = new Resource({name: 'v1', methods:[], resources: resources});
    Object.assign(this, v1);
  }
}

export default ColormeApi;
