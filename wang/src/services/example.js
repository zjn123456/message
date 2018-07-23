// import request from '../utils/request';
// export function query() {
//   return request('/backuser/login');
// }
import service from '../utils/api-client';
export const Login = async (params) => {
  const result = await service.post('/backuser/login', params);
  return result;
};
