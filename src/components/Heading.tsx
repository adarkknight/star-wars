interface Props {
  heading: string;
}

const Heading = ({ heading }: Props) => {
  return (
    <div className=" grid grid-col-1 justify-items-center bg-neutral-content text-lg font-bold">
      {heading}
    </div>
  );
};

export default Heading;
