import styled from "styled-components";

const Button = ({ children, color, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} color={color}>
      <div className="text">{children}</div>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  width: 100%;
  border: none;
  padding: 20px 10px;
  background-color: ${(props) => props.color || "#333"};
  border-radius: 5px;
  transition: 0.3s;

  .text {
    font-size: 15px;
    font-weight: 600;
    color: #fff;
  }

  &:hover {
    transform: translateY(-4px);
  }
`;

export default Button;
