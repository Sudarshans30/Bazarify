import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@a.com',
    password: bcrypt.hashSync('Pass123456', 10),
    isAdmin: true,
  },
  {
    name: 'Majid Pk',
    email: 'majid@pk.com',
    password: bcrypt.hashSync('Pass123456', 10),
  },
  {
    name: 'Emma Jones',
    email: 'emma@j.com',
    password: bcrypt.hashSync('Pass123456', 10),
  },
  {
    name: 'maj',
    email: 'maj@maj.com',
    password: bcrypt.hashSync('Pass123456', 10),
  },
];

export default users;
