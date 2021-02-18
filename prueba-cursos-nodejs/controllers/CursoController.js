const Cursos = require('../models').Cursos

exports.obtenerTodos = async (req, res) => {
  try {
    const allData = await Cursos.findAll()
    res.send(allData)
  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrio un error')
  }
}

exports.obtenerPorId = async (req, res) => {
  try {
    const allData = await Cursos.findOne({
      where: { id: req.params.id }
    })
    res.send(allData)
  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrio un error')
  }
}

exports.crear = async (req, res) => {
  try {
    const data = await Cursos.create(req.body, { fields: ['name'] })
    res.send(data)
  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrio un error')
  }
}

exports.eliminar = async (req, res) => {
  try {
    const data = await Post.destroy({
      where: { id: req.body.id }
    })

    res.send(data)
  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrio un error')
  }
}
