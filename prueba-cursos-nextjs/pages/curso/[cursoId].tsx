import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { CursosServices } from '../../services/cursosServices';
import Layout from '../../components/layout/Layout';
import { Table, Tag, Space, Button, Divider } from 'antd';
import FormCreateCourse from '../../components/layout/FormCreateCourse';

const Curso = () => {

  const router = useRouter()
  const { query: { cursoId } } = router

  const [periods, setPeriods] = useState([])
  const [course, setCourse] = useState(null)

  useEffect(() => {
    if (cursoId) {
      getCourseById()
      getPeriodsBycourse()
    }
  }, [cursoId])

  const getCourseById = () => {
    CursosServices.getCourseById(cursoId).then(response => {
      setCourse(response)
    })
  }

  const getPeriodsBycourse = () => {
    CursosServices.getPeriodsByCourseId(cursoId).then(response => {
      setPeriods(response)
    })
  }

  const deletePeriod = (idPeriod) => {
    CursosServices.deletePeriod(idPeriod).then(response => {
      if (!response) return

      getPeriodsBycourse()
    })
  }

  const columns = [
    {
      title: 'Instructor',
      dataIndex: `Instructor['name']`,
      render: (text, record) => <p>{record.Instructor.name}</p>,
      key: 'instructor',
    },
    {
      title: 'Desde',
      dataIndex: 'from',
      key: 'from',
      render: (text, record) => <span>{new Date(record.from).toDateString()}</span>,
    },
    {
      title: 'Hasta',
      dataIndex: 'to',
      key: 'to',
      render: (text, record) => <span>{new Date(record.to).toDateString()}</span>,
    },
    {
      title: 'Acciones',
      key: 'action',
      render: (text, record) => (
        <>
          {/* <Button type="default" onClick={() => {
            console.log(record);
          }}>Editar</Button> */}
          <Button type="primary" danger onClick={() => deletePeriod(record.id)}>Eliminar</Button>
        </>
      ),
    },
  ];

  return (
    <Layout>
      {course ?
        <h1>{course.name}</h1>
        : null}
      <FormCreateCourse courseId={cursoId} refreshPeriods={getPeriodsBycourse} />
      <Divider plain>Peiodos asignados</Divider>
      <Table columns={columns} dataSource={periods} rowKey="id" />
    </Layout>
  )
}
export default Curso