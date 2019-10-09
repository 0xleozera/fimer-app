import { camelize, decamelize } from 'utils/changeCase';

const inbound = response => {
  response.data && (response.data = camelize(response.data));

  return response;
};

const outbound = request => {
  request.data && (request.data = decamelize(request.data));

  request.params && (request.params = decamelize(request.params));

  return request;
};

export { inbound, outbound };
