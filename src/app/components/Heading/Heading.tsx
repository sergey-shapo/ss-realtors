interface HeadingProps {
  text: string;
  isH1?: boolean;
}

const Heading = ({ text, isH1 }: HeadingProps): React.ReactElement => {
  if (isH1) {
    return <h1>{text}</h1>;
  } else {
    return <h2 className="p-4 border-l-2 border-primary">{text}</h2>;
  }
};

export default Heading;
