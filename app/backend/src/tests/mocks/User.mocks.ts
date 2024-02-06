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

const errorMessage = { message: 'Invalid email or password' };
const errorMessage2 = { message: 'All fields must be filled' };

export {
  loginBody,
  correctLogin,
  correctUser,
  incorrectEmail,
  errorMessage,
  errorMessage2,
  incorrectPassword,
  withoutEmail,
  withoutPassword,
};
