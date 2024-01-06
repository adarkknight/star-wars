import DataLinkCard from "./DataLinkCard";
import DataLinkCardContainer from "./DataLinkCardContainer";

const LinkGrid = () => {
  const linkNames = [
    { name: "Films", route: "/films" },
    { name: "People", route: "/people" },
    { name: "Planets", route: "/planets" },
    { name: "Species", route: "/species" },
    { name: "Starships", route: "/starships" },
    { name: "Vehicles", route: "/vehicles" },
  ];
  return (
    <div>
      <DataLinkCardContainer>
        {linkNames.map((link) => (
          <DataLinkCard title={link.name} route={link.route} />
        ))}
      </DataLinkCardContainer>
    </div>
  );
};

export default LinkGrid;
