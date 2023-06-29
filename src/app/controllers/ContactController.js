class ContactController {
  // lista de registros
  index(request, response) {
    response.send('Send from Contact Controller');
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
