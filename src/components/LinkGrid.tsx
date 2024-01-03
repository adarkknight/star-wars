import DataLinkCard from "./DataLinkCard";
import DataLinkCardContainer from "./DataLinkCardContainer";

const LinkGrid = () => {
  const linkNames = [
    "Films",
    "People",
    "Planets",
    "Species",
    "Starships",
    "Vehicles",
  ];
  return (
    <div>
      <DataLinkCardContainer>
        {linkNames.map((link) => (
          <DataLinkCard title={link} />
        ))}
      </DataLinkCardContainer>
    </div>
  );
};

export default LinkGrid;
