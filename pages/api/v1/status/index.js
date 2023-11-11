function status(request, response) {
  response.status(200).send({ chave: "queijo foudasi" });
}

export default status;
