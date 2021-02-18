const Instructores = require('../models').Instructores

exports.obtenerTodos = async (req, res) => {
  try {
    const allData = await Instructores.findAll()
    res.send(allData)
  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrio un error')
  }
}

exports.asignarPeriodo = (req, res) => {
  try {
    // const newDate = req.body
    const newDate = {

    }
    res.send(newDate)
  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrio un error')
  }
}

exports.crear = async (req, res) => {
  try {
    const data = await Instructores.create({
      name: 'Gabriel Cuervo'
    }, { fields: ['name'] })
    res.send(data)
  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrio un error')
  }
}

exports.eliminar = async (req, res) => {
  try {
    const data = await Post.destroy({
      where: { id: 1 }
    })

    res.send(data)
  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrio un error')
  }
}
