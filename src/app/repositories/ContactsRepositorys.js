const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Arthur',
    email: 'arthurlopr12@gmail.com',
    phone: '37999875176',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@gmail.com',
    phone: '37999875176',
    category_id: v4(),
  },
];

class ConstactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ConstactsRepository();
