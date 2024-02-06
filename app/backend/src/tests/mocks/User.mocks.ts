const loginBody = {
  email: 'teste@teste.com',
  password: 'password',
};

const correctLogin = {
  email: 'admin@admin.com',
  password: 'secret_admin',
};

const correctUser = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
};

const incorrectEmail = {
  email: 'email',
  password: 'password',
};

const incorrectPassword = {
  email: 'admin@admin.com',
  password: 'passw',
};

const withoutEmail = {
  email: '',
  password: 'password',
};

const withoutPassword = {
  email: 'admin@admin.com',
  password: '',
};

const auth =
  'Bearer eyJhbGciOiJIUInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE3MDcxNjExNzZ9.jTpQuMLQ-r0Gr90VDsnAbTHQ__wmbqPnPKwFtxjwmoI';

const role = { role: 'admin' };

const payload = { id: 1, email: 'admin@admin.com' };

const errorMessage = { message: 'Invalid email or password' };
const errorMessage2 = { message: 'All fields must be filled' };

export default {
  loginBody,
  correctLogin,
  correctUser,
  incorrectEmail,
  errorMessage,
  errorMessage2,
  incorrectPassword,
  withoutEmail,
  withoutPassword,
  auth,
  role,
  payload,
};
