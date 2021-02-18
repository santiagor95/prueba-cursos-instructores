import axios, { AxiosResponse } from 'axios';

const clienteAxios = axios.create({
  // baseURL: 'https://www.pbyclothing.com'
  baseURL: 'http://localhost:4500/'
})


const getAllCourses = () => {
  return clienteAxios.get<any[]>(`curso/obtenerTodos`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
    })
}
const getCourseById = (id) => {
  return clienteAxios.get<any[]>(`curso/${id}`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
    })
}

const assignCourse = (data) => {
  return clienteAxios.post<any[]>(`periodo/asignar`, data)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
    })
}

const getPeriodsByCourseId = (id) => {
  return clienteAxios.get<any[]>(`periodo/obtenerPorIdCurso/${id}`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
    })
}

const getInstructors = () => {
  return clienteAxios.get<any[]>(`instructor/obtenerTodos`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
    })
}

const deletePeriod = (idPeriod) => {
  return clienteAxios.delete<any[]>(`/periodo/eliminar/${idPeriod}`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
    })
}


const resolveResponse = (response: AxiosResponse) => {
  if (response.status !== 200) return false
  if (!response.data) return false
  const data = response.data
  return data
}

export const CursosServices = {
  getAllCourses,
  getPeriodsByCourseId,
  getInstructors,
  deletePeriod,
  assignCourse,
  getCourseById
}