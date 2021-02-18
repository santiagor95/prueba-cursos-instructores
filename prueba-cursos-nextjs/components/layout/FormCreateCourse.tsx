import React, { useEffect, useState } from 'react'
import {
  Form,
  Button,
  Select,
  DatePicker,
  notification,
} from 'antd';
import { CursosServices } from '../../services/cursosServices';
import { SmileOutlined } from '@ant-design/icons';
import styled from "@emotion/styled";

const FormContainer = styled.div`
  background-color: white;
  padding:2em;
  border-radius:10px;
  width:450px;
  margin:0 auto;
  margin-bottom: 2em;
`

const FormCreateCourse = ({ courseId, refreshPeriods }) => {

  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();

  const [instructors, setInstructors] = useState([])
  const [loading, setLoading] = useState(false)

  const rangeConfig = {
    rules: [{ type: 'array' as const, required: true, message: 'Seleccione el periodo' }],
  };

  useEffect(() => {
    getInstructors()
  }, [])

  const onFormLayoutChange = (e) => {
    console.log(e);

  };

  const getInstructors = () => {
    CursosServices.getInstructors().then(response => {
      setInstructors(response)
    })
  }

  const onFinish = (fieldsValue: any) => {

    const { instructorId } = fieldsValue
    const [initialDate, finalDate] = fieldsValue.periodo

    const dataToAssign = {
      "idCourse": courseId,
      "idInstructor": instructorId,
      "from": initialDate.toDate(),
      "to": finalDate.toDate()
    }

    setLoading((current) => !current)
    CursosServices.assignCourse(dataToAssign).then(response => {
      if (!response) return
      refreshPeriods()
      openNotification()
      setTimeout(() => {
        setLoading((current) => !current)
        form.resetFields();
      }, 500);
    })

    const openNotification = () => {
      notification.open({
        message: 'Éxito',
        description: 'El periodo ha sido asignado correctamente',
        onClick: () => {
          console.log('Notification Clicked!');
        },
        icon: <SmileOutlined style={{ color: '#108ee9' }} />
      });
    };

  };

  return (
    <>
      <FormContainer>
        <h2>Agregar periodo</h2>
        <Form
          form={form}
          labelCol={{ span: 4 }}
          // wrapperCol={{ span: 14 }}
          layout="vertical"
          initialValues={{}}
          onValuesChange={onFormLayoutChange}
          size={'middle'}
          onFinish={onFinish}
        >
          <Form.Item name="instructorId" label="Instructor" rules={[{ required: true, message: 'Seleccione el instructor' }]}>
            <Select>
              {instructors.map(item => (
                <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="periodo" label="Periodo" {...rangeConfig}>
            <RangePicker />
          </Form.Item>

          <Form.Item style={{ margin: '0' }}>
            <Button type="primary" disabled={loading} loading={loading} htmlType="submit">Asignar Periodo</Button>
          </Form.Item>
        </Form>
      </FormContainer>

    </>
  )
}

export default FormCreateCourse
