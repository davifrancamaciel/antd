import React, { useEffect, useState } from "react";
import { Col, Table, Row } from "antd";
import SelectCustom from "../../compoenents/Select";
import api from "../../services/api";
import { Options, Product } from "./interfaces";
import { GridContainer } from "./styles";
import { distinctValues, order } from "../../Utils";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([] as Product[]);
  const [productsSelected, setProductsSelected] = useState<Product[]>(
    [] as Product[]
  );
  const [models, setModels] = useState<Options[]>([] as Options[]);
  const [ops, setOps] = useState<Options[]>([] as Options[]);
  const [oems, setOems] = useState<Options[]>([] as Options[]);

  const [model, setModel] = useState<string>("");
  const [op, setOp] = useState<string>("");
  const [oem, setOem] = useState<string>("");

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const resp = await api.get<Product[]>("data");

    const { data } = resp;
    setProducts(data);

    const dataMoedls = data.map(
      (d: Product) => ({ label: d.model, value: d.model } as Options)
    );
    setModels(order(distinctValues(dataMoedls, "value"), "value"));

    const dataOps = data.map(
      (d: Product) => ({ label: d.op, value: d.op } as Options)
    );
    setOps(order(distinctValues(dataOps, "value"), "value"));

    const dataOems = data.map(
      (d: Product) => ({ label: d.oem, value: d.oem } as Options)
    );
    setOems(order(distinctValues(dataOems, "value"), "value"));
  };

  const onChangeModel = (value: string) => {
    setModel(value);
    setOp("");
    setOem("");
    filterProducts(value, "model");
  };

  const onChangOem = (value: string) => {
    setModel("");
    setOp("");
    setOem(value);
    filterProducts(value, "oem");
  };

  const onChangOp = (value: string) => {
    setModel("");
    setOp(value);
    setOem("");
    filterProducts(value, "op");
  };

  const filterProducts = (value: string, key: string) => {
    const list = products.filter((p: any) => p[key] === value);
    setProductsSelected(list);
  };

  return (
    <div>
      <Row gutter={[16, 24]}>
        <Col lg={8} md={8} sm={24}>
          <SelectCustom
            label={"Operadora"}
            options={ops}
            value={op}
            onChage={onChangOp}
          />
        </Col>
        <Col lg={8} md={8} sm={24}>
          <SelectCustom
            label={"Oems"}
            options={oems}
            value={oem}
            onChage={onChangOem}
          />
        </Col>
        <Col lg={8} md={8} sm={24}>
          <SelectCustom
            label={"Modelos"}
            options={models}
            value={model}
            onChage={onChangeModel}
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <GridContainer>
          <Table
            loading={false}
            columns={[
              { title: "Operadora", dataIndex: "op" },
              { title: "OEM", dataIndex: "oem" },
              { title: "Modelo", dataIndex: "model" }
            ]}
            dataSource={productsSelected.map((item: Product, key: number) => {
              return { ...item, key };
            })}
            pagination={false}
          />
        </GridContainer>
      </Row>
    </div>
  );
};

export default Home;
