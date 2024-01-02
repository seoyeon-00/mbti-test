import { styled } from "styled-components";

const PersonImage = ({ item }) => {
  return (
    <Container>
      <div className="image-box">
        <img src={item.image} alt={item.name} />
      </div>
      <p>{item.name}</p>
    </Container>
  );
};

const Container = styled.div`
  .image-box {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 10%;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 100px;
  }

  p {
    margin-top: 5px;
    font-size: 12px;
    text-align: center;
  }
`;

export default PersonImage;
