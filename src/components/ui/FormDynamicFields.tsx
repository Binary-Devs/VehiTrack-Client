"use client";

import { CloseCircleOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { Button, Col, Empty, Row } from "antd";
import { useFieldArray, useFormContext } from "react-hook-form";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";

const FormDynamicFields = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "equipmentUses",
  });

  const equipments = [
    {
      id: 1,
      label: "Excavator",
      createdAt: "2023-07-01",
      updatedAt: "2023-07-01",
    },
    {
      id: 2,
      label: "Bulldozer",
      createdAt: "2023-07-02",
      updatedAt: "2023-07-02",
    },
    {
      id: 3,
      label: "Crane",
      createdAt: "2023-07-03",
      updatedAt: "2023-07-03",
    },
    {
      id: 4,
      label: "Forklift",
      createdAt: "2023-07-04",
      updatedAt: "2023-07-04",
    },
    {
      id: 5,
      label: "Dump Truck",
      createdAt: "2023-07-05",
      updatedAt: "2023-07-05",
    },
  ];

  const equipmentOptions = equipments?.map((equipment) => {
    return {
      label: equipment?.label,
      value: equipment?.id,
    };
  });

  return (
    <>
      <div>
        {fields.length > 0 ? (
          fields.map((item, index) => {
            return (
              <div
                key={item.id}
                style={{
                  marginBottom: "5px",
                  padding: "20px",
                  border: "1px solid #d9d9d9",
                  borderRadius: "5px",
                }}
              >
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                  <Col span={8}>
                    <div>
                      <FormSelectField
                        size="large"
                        // name="equipmentId"
                        name={`equipmentUses.${index}.equipmentId`}
                        options={equipmentOptions as any}
                        label="choice equipment"
                        placeholder="Select"
                      />
                    </div>
                  </Col>
                  <Col span={6}>
                    <FormInput
                      name={`equipmentUses.${index}.quantity`}
                      label="Quantity"
                    />
                  </Col>
                  <Col span={6}>
                    <FormInput
                      name={`equipmentUses.${index}.remarks`}
                      label="Remarks"
                    />
                  </Col>
                  <Col span={4}>
                    <Button
                      type="primary"
                      onClick={() => remove(index)}
                      danger
                      style={{ margin: "25px 0px" }}
                    >
                      <CloseCircleOutlined />
                    </Button>
                  </Col>
                </Row>
              </div>
            );
          })
        ) : (
          <Empty description="No equipment found" />
        )}
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Button type="primary" onClick={() => append(undefined)}>
          <PlusSquareOutlined />
        </Button>
      </div>
    </>
  );
};

export default FormDynamicFields;
