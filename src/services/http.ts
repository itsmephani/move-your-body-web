let baseUrl = "http://localhost:9000/api/";

const http: Record<string, Function> = {};

const makeHttpCall = async (
  path: string,
  data: {},
  method: string,
  headers = {}
) => {
  return await fetch(baseUrl + path, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });
};

http.get = async (path: string, data: any, headers: any = {}) => {
  return makeHttpCall(path, data, "GET", headers);
};

http.post = async (path: string, data: any, headers: any = {}) => {
  return makeHttpCall(path, data, "POST", headers);
};

http.put = async (path: string, data: any, headers: any = {}) => {
  return makeHttpCall(path, data, "PUT", headers);
};

http.delete = async (path: string, data: any, headers: any = {}) => {
  return makeHttpCall(path, data, "DELETE", headers);
};

http.getBaseUrl = () => {
  return baseUrl;
};

http.updateBaseUrl = (url: string) => {
  baseUrl = url;
};

export default http;
export const { get, post, put, getBaseUrl, updateBaseUrl } = http;
