import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import Heading from "./components/Heading/Heading";

const Home = (): React.ReactElement => {
  return (
    <Container>
      <Heading
        text="Мы лидеры на рынке недвижимости в Барселоне."
        isH1={false}
      />
      <Button text="Подробнее" />
    </Container>
  );
};

export default Home;
