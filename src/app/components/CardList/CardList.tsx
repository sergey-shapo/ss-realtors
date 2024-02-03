import { CardListProps } from "@/app/types";
import Heading from "../Heading/Heading";
import Card from "../Card/Card";

const CardList = ({ Cards }: CardListProps): React.ReactElement => {
  return (
    <section className="flex flex-col gap-20">
      <Heading text="Популярные предложения" />
      <ul className="flex flex-wrap justify-between gap-y-10 gap-x-2">
        {Cards.map((card) => (
          <Card
            typeProperty={card.typeProperty}
            key={card.title}
            image={card.image}
            title={card.title}
            price={card.price}
          />
        ))}
      </ul>
    </section>
  );
};

export default CardList;
