'use strict';

import assert from 'power-assert';
import nock from 'nock';
import axios from 'axios';
import Resource from '../src/resource';

describe('Resource', () => {
  let baseUrl = 'http://example.com';

  beforeEach(() => {
    Resource.baseUrl = baseUrl;
  })

  describe('#get, #put, #post, and #delete', () => {
    it('should send request to resource path', (done) => {
      let request = nock(baseUrl).get('/resource').reply(200);

      new Resource({
        name: 'resource',
        methods: [Resource.GET]
      }).get().then(() => {
        request.done();
        done();
      });
    })

    it('should send request to resource/id path', (done) => {
      let request = nock(baseUrl).get('/resource/1').reply(200);

      new Resource({
        baseUrl: baseUrl,
        name: 'resource',
        methods: [Resource.GET]
      }).get({id: 1}).then(() => {
        request.done();
        done();
      });
    })

    it('should send request with authorization header', (done) => {
      let token = "token";
      let request = nock(baseUrl).matchHeader('Authorization', `Bearer ${token}`).get('/resource').reply(200);

      Resource.token = token;
      new Resource({
        baseUrl: baseUrl,
        name: 'resource',
        methods: [Resource.GET]
      }).get().then(() => {
        request.done();
        done();
      });
    })

    it('should send request to url + urlSuffix', (done) => {
      let urlSuffix = ".json";
      let request = nock(baseUrl).get(`/resource${urlSuffix}`).reply(200);

      Resource.urlSuffix = urlSuffix;
      new Resource({
        baseUrl: baseUrl,
        name: 'resource',
        methods: [Resource.GET]
      }).get().then(() => {
        request.done();
        done();
      });
    })
  })

  describe('#get', () => {
    it('should send get request with uri query', (done) => {
      let request = nock(baseUrl).get('/resource?param=hoge').reply(200);

      new Resource({
        baseUrl: baseUrl,
        name: 'resource',
        methods: [Resource.GET]
      }).get({param: "hoge"}).then(() => {
        request.done();
        done();
      });
    })
  })

  describe('#put', () => {
    it('should send put request with request body', (done) => {
      let params = {data: 'data'}
      let request = nock(baseUrl).put('/resource', params).reply(200);

      new Resource({
        baseUrl: baseUrl,
        name: 'resource',
        methods: [Resource.PUT]
      }).put(params).then((response) => {
        request.done();
        done();
      });
    })

    it('should send put request to resource/id path with request body', (done) => {
      let params = {data: 'data'}
      let request = nock(baseUrl).put('/resource/1', params).reply(200);

      new Resource({
        baseUrl: baseUrl,
        name: 'resource',
        methods: [Resource.PUT]
      }).put(Object.assign(params, {id: 1})).then(() => {
        request.done();
        done();
      });
    })
  })

  describe('#post', () => {
    it('should send post request with request body', (done) => {
      let params = {data: 'data'}
      let request = nock(baseUrl).post('/resource', params).reply(200);

      new Resource({
        baseUrl: baseUrl,
        name: 'resource',
        methods: [Resource.POST]
      }).post(params).then((response) => {
        request.done();
        done();
      });
    })

    it('should send post request to resource/id path with request body', (done) => {
      let params = {data: 'data'}
      let request = nock(baseUrl).post('/resource/1', params).reply(200);

      new Resource({
        baseUrl: baseUrl,
        name: 'resource',
        methods: [Resource.POST]
      }).post(Object.assign(params, {id: 1})).then(() => {
        request.done();
        done();
      });
    })
  })

  describe('#delete', () => {
    it('should send delete request with request body', (done) => {
      let params = {data: 'data'}
      let request = nock(baseUrl).delete('/resource', params).reply(200);

      new Resource({
        baseUrl: baseUrl,
        name: 'resource',
        methods: [Resource.DELETE]
      }).delete(params).then((response) => {
        request.done();
        done();
      });
    })

    it('should send delete request to resource/id path with request body', (done) => {
      let params = {data: 'data'}
      let request = nock(baseUrl).delete('/resource/1', params).reply(200);

      new Resource({
        baseUrl: baseUrl,
        name: 'resource',
        methods: [Resource.DELETE]
      }).delete(Object.assign(params, {id: 1})).then(() => {
        request.done();
        done();
      });
    })
  })

  afterEach(() => {
    Resource.baseUrl = null;
    Resource.token = null;
    Resource.urlSuffix= null;
    nock.cleanAll();
  })
})
