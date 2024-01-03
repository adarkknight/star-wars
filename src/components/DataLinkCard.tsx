import { Link } from "react-router-dom";

interface Props {
  title: string;
  route: string;
}

const DataLinkCard = ({ title, route }: Props) => {
  return (
    <div className="w-full md:w-64 mt-3 mb-3">
      <div className="card bg-black shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">{title}</h2>
          <Link to={route} className="card-actions">
            <button className="btn btn-primary">Go!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataLinkCard;
