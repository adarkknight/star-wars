interface Props {
  title: string;
}

const DataLinkCard = ({ title }: Props) => {
  const handleClick = () => {
    return console.log("You clicked me!");
  };
  return (
    <div className="w-full md:w-64 mt-3 mb-3">
      <div className="card bg-black shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">{title}</h2>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={handleClick}>
              Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataLinkCard;
