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
  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const constactExists = await ConstactsRepository.findByEmail(email);

    if (constactExists) {
      return response.status(400).json({ error: 'This e-mail is alrady been taken' });
    }

    const contact = await ConstactsRepository.create({
      name, email, phone, category_id,
    });

    response.json(contact);
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
