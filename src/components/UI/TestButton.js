import styled from "styled-components";

const TestButton = ({ onClick, children }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  width: 100%;
  border: none;
  padding: 30px 10px;
  background-color: #fff;
  border-radius: 50px;

  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
    font-weight: 500;
  }

  @media screen and (max-width: 420px) {
    padding: 20px 10px;
    font-size: 14px;
  }
`;

export default TestButton;
