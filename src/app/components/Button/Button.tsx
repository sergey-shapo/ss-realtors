interface ButtonProps {
  text: string;
  isPrimary?: boolean;
}

const Button = ({ text }: ButtonProps): React.ReactElement => {
  return (
    <button className="py-2 px-4 bg-primary text-white  rounded-lg shadow-md focus:outline-none focus:ring-opacity-75 self-start">
      {text}
    </button>
  );
};

export default Button;
