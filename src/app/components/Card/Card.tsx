import priceFormatter from "@/app/utils/priceFormatter";
import Image from "next/image";

export interface CardProps {
  title: string;
  image: string;
  price: number;
  isNewBuilding?: boolean;
  saleOrRent?: string;
  isFavorite?: boolean;
  typeProperty?: string;
}

const Card = ({
  image,
  title,
  price,
  typeProperty,
}: CardProps): React.ReactElement => {
  return (
    <li
      className=" flex flex-col w-full 
     md:w-[330px]  shadow-100 shadow-xl rounded-b-md  "
    >
      <Image
        alt={title}
        src={image}
        width={300}
        height={400}
        layout="responsive"
        className="object-cover w-full h-full"
      />
      <div className="p-5 flex flex-col gap-6">
        <span className="text-cardHeading font-medium">{typeProperty}</span>
        <span className="text-cardHeading font-medium">{title}</span>
        <span className="text-primary font-semibold">
          {priceFormatter(price)}
        </span>
      </div>
    </li>
  );
};

export default Card;
