import styled from "styled-components";
import PropTypes from "prop-types";

const FormItem = ({
  id,
  label,
  type = "text",
  placeholder = "",
  value,
  handleOnChange,
}) => {
  return (
    <FormItemWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </FormItemWrapper>
  );
};

export default FormItem;

FormItem.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
};

const FormItemWrapper = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  margin-bottom: 2%;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  padding: 10px 0;
`;

const Input = styled.input`
  flex-basis: 60%;
  border: 0;
  font-size: inherit;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid lightGrey;
`;
