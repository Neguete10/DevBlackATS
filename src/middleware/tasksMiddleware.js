const validateName = (request, response, next) => {
  const { body } = request;

  if (body.nome == null) {
    return response.status(400).send({ message: 'The field "Name" is null' });
  }
  if (body.nome == undefined) {
    return response
      .status(400)
      .send({ message: 'The field "Name" is undefined' });
  }
  if (body.nome == "") {
    return response.status(400).send({ message: 'The field "Name" is empty' });
  }
  next();
};
const validateEmail = (request, response, next) => {
  const { body } = request;

  if (body.email == null) {
    return response.status(400).send({ message: 'The field "Email" is null' });
  }
  if (body.email == undefined) {
    return response
      .status(400)
      .send({ message: 'The field "Email" is undefined' });
  }
  if (body.email == "") {
    return response.status(400).send({ message: 'The field "Email" is empty' });
  }
  next();
};

module.exports = {
  validateName,
  validateEmail,  
};
