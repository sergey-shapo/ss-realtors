import Button from "./components/Button/Button";
import CardList from "./components/CardList/CardList";
import Container from "./components/Container/Container";
import Heading from "./components/Heading/Heading";
import data from "./data/cardsData.json";

const Home = (): React.ReactElement => {
  return (
    <Container>
      <Heading
        text="Мы лидеры на рынке недвижимости в Барселоне."
        isH1={true}
      />
      <CardList Cards={data} />
      <Button text="Подробнее" />
    </Container>
  );
};

export default Home;
