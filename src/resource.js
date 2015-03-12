import axios from "axios";

class Resource {
  static get GET() { return "get"; }
  static get PUT() { return "put"; }
  static get POST() { return "post"; }
  static get DELETE() { return "delete"; }
  static set baseUrl(value) { this._baseUrl = value; }
  static get baseUrl() { return this._baseUrl ; }
  static set token(value) { this._token = value; }
  static get token() { return this._token; }
  static set urlSuffix(value) { this._urlSuffix = value; }
  static get urlSuffix() { return this._urlSuffix; }

  constructor({name, methods, resources}) {
    this.name = name;
    resources = resources || [];
    resources.forEach(resource => {
      resource.parentResource = this;
      this[resource.name] = resource;
    })
    methods = methods || [];
    methods.forEach(method => {
      this[method] = this.buildMethod(method);
    })
  }

  buildMethod(method) {
    return (params) => {
      params = params || {}
      let parentResourceNames = this.parentNames().reverse();
      let url = [Resource.baseUrl].concat(parentResourceNames).concat(this.name).join('/');
      if (params.id) {
        url += `/${params.id}`;
        delete params.id;
      }
      url += Resource.urlSuffix ? Resource.urlSuffix : "";
      let data = {}
      if (method != Resource.GET) {
        data = params
        params = {}
      }
      let config = {
        url: url,
        method: method,
        params: params,
        data: data,
        transformResponse: [data => {
          return data;
        }]
      }
      if (Resource.token) {
        config.headers = { 'Authorization': `Bearer ${Resource.token}`}
      }
      return axios(config)
    }
  }

  parentNames(names = []) {
    if (this.parentResource) {
      names.push(this.parentResource.name);
      return this.parentResource.parentNames(names);
    }
    return names;
  }
}
export default Resource;
