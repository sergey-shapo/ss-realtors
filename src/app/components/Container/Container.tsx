interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps): React.ReactElement => {
  return <div className="w-full flex flex-col gap-20 py-10 ">{children}</div>;
};

export default Container;
