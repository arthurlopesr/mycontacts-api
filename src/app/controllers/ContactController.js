const ConstactsRepository = require('../repositories/ContactsRepositorys');

class ContactController {
  // lista de registros
  async index(request, response) {
    const contacts = await ConstactsRepository.findAll();

    response.json(contacts);
  }

  // registro unico
  async show(request, response) {
    const { id } = request.params;
    const contact = await ConstactsRepository.findById(id);

    if (!contact) {
      // 404 - not found
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  // criar novo registro
  store() {

  }

  // editar um registro
  update() {

  }

  // deletar um registro
  async delete(request, response) {
    const { id } = request.params;
    const contact = await ConstactsRepository.findById(id);

    if (!contact) {
      // 404 - not found
      return response.status(404).json({ error: 'User not found' });
    }

    await ConstactsRepository.delete(id);
    // 204 - no content
    response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
