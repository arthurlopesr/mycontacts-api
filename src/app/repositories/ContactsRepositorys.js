const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Arthur',
    email: 'arthurlopr12@gmail.com',
    phone: '37999875176',
    category_id: uuid(),
  },
];

class ConstactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ConstactsRepository();
