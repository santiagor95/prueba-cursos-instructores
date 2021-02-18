const Periodos = require('../models').Periodos
const Instructores = require('../models').Instructores
// const Cursos = require('../models').Cursos

exports.obtenerTodos = async (req, res) => {
  try {
    const allData = await Periodos.findAll()
    res.send(allData)
  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrio un error')
  }
}

exports.obtenerPorIdCursoPeriodo = async (req, res) => {
  try {
    const allData = await Periodos.findAll({
      where: {
        idCourse: req.params.idCurso
      },
      include: 'Instructor',
      order: [
        ['from', 'DESC'],
      ]
    });
    res.send(allData)
  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrio un error')
  }
}

exports.asignarPeriodo = async (req, res) => {
  try {
    const newData = await Periodos.create(req.body, { fields: ['idCourse', 'idInstructor', 'from', 'to'] })
    res.send(newData)
  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrio un error')
  }
}

exports.obtenerTodos = async (req, res) => {
  try {
    const allData = await Periodos.findAll()
    res.send(allData)
  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrio un error')
  }
}

exports.crear = async (req, res) => {
  try {
    const instructores = await Periodos.create({
      idCourse: 1,
      idInstructor: 1,
      from: new Date(),
      to: new Date(),
    }, { fields: ['idCourse', 'idInstructor', 'from', 'to'] })
    res.send(instructores)
  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrio un error')
  }
}

exports.eliminar = async (req, res) => {
  try {
    const data = await Periodos.destroy({
      where: { id: req.params.id }
    })
    res.json(data)
  } catch (error) {
    console.log(error);
    res.status(500).send('Ocurrio un error')
  }
}
