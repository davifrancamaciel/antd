import React from "react";

import { Select, Typography } from "antd";

const { Option } = Select;

interface PropTypes {
  label?: string;
  options: Array<any>;
  onChage?: (value: any) => void;
  value?: string;
}
const PropsSelect = {
  allowClear: true,
  showSearch: true,
  placeholder: "Selecione um item",
  optionFilterProp: "label",
  filterOption: (input: any, option: any) =>
    option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
  notFoundContent: <>Não encontrado</>,
  style: { width: "100%" }
};

const SelectCustom: React.FC<PropTypes> = (props) => {
  return (
    <div>
      {props.label && (
        <Typography.Text style={{ marginBottom: "8px", color: "#333" }}>
          {props.label}
        </Typography.Text>
      )}
      <Select {...PropsSelect} onChange={props.onChage} value={props.value}>
        {props.options.map((i: any) => (
          <Option key={i.value} value={i.value}>
            {i.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectCustom;
