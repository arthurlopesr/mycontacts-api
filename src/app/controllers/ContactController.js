const ConstactsRepository = require('../repositories/ContactsRepositorys');

class ContactController {
  // lista de registros
  async index(request, response) {
    const contacts = await ConstactsRepository.findAll();

    response.json(contacts);
  }

  // registro unico
  show() {

  }

  // criar novo registro
  store() {

  }

  // editar um registro
  update() {

  }

  // deletar um registro
  delete() {

  }
}

// Singleton
module.exports = new ContactController();
