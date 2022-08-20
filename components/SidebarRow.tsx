import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

const SidebarRow: React.FC<Props> = ({ Icon, title }) => {
  return (
    <div className="flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200 group">
      <Icon className="h-6 w-6 group-hover:text-twitter" />
      <p className="group-hover:text-twitter">{title}</p>
    </div>
  );
};

export default SidebarRow;
