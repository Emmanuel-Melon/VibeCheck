import { FC } from "react";
import { Icon } from "./Icon";

export type IconButtonProps = {
  className?: any;
  title?: string;
};

export const IconButton: FC<IconButtonProps> = ({ className, icon, title }) => {
  return (
    <button className="btn btn-xs btn-square" title={title}>
      <Icon icon={icon} />
    </button>
  );
};
