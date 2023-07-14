const ConstactsRepository = require('../repositories/ContactsRepositorys');

class ContactController {
  // lista de registros
  async index(request, response) {
    const { orderBy } = request.query;
    const contacts = await ConstactsRepository.findAll(orderBy);

    console.log({ contacts });

    response.json(contacts);
  }

  // registro unico
  async show(request, response) {
    const { id } = request.params;
    const contact = await ConstactsRepository.findById(id);

    if (!contact) {
      // 404 - not found
      return response.status(404).json({ error: 'Contact not found' });
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
      return response.status(400).json({ error: 'This e-mail is alrady in use' });
    }

    const contact = await ConstactsRepository.create({
      name, email, phone, category_id,
    });

    response.status(201).json(contact);
  }

  // editar um registro
  async update(request, response) {
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    const contactExists = await ConstactsRepository.findById(id);
    if (!contactExists) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactByEmail = await ConstactsRepository.findByEmail(email);

    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({ error: 'This e-mail is alrady in use' });
    }

    const contact = await ConstactsRepository.update(id, {
      name, email, phone, category_id,
    });

    response.json(contact);
  }

  // deletar um registro
  async delete(request, response) {
    const { id } = request.params;

    await ConstactsRepository.delete(id);
    // 204 - no content
    response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
