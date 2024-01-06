import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const DataLinkCardContainer = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-3 justify-items-center bg-base-300">
      {children}
    </div>
  );
};

export default DataLinkCardContainer;
