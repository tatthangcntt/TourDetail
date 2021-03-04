/**
 * @format
 */
import {matchers} from 'jest-json-schema';
import apis from 'libraries/networking/apis';
expect.extend(matchers);
const schema = {
  properties: {
    success: {type: 'boolean'},
    email: {type: 'string'},
    role: {type: 'string'},
    auth_token: {type: 'string'},
  },
  required: ['success', 'email', 'role', 'auth_token'],
};
const params = {
  email: 'tatthangcntt@gmail.com',
  password: 'daulau89',
  customer_type: 'partner',
};

it('Check match response API login schema', async () => {
  const result = await apis.post(apis.PATH.LOGIN, params);
  expect(result).toMatchSchema(schema);
});
