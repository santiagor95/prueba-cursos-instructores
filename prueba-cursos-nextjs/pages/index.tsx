import { CursosServices } from '../services/cursosServices'
import { useState, useEffect } from "react";
import Link from 'next/link'

import Layout from "../components/layout/Layout";

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { Card, Col, Row } from 'antd';

export default function Home() {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    CursosServices.getAllCourses().then(res => {
      if (!res) return
      setCourses(res)
    })
  }, [])


  return (
    <Layout>
      <h1>Lista de Cursos</h1>
      <Row gutter={16}>
        {courses.map((item, i) => (
          <Col key={item.id} span={8} style={{ marginBottom: '1em' }}>
            <Card title={item.name} bordered={true}
              hoverable
              extra={
                <Link href={`/curso/[cursoId]`} as={`/curso/${item.id}`}>
                  <a>Ver detalle</a>
                </Link>
              }>
              <p>{item.description}</p>
            </Card>
          </Col>
        ))}

      </Row>
    </Layout>
  )

}
