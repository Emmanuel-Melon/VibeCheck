import { ReactNode } from "react";

export type CardProps = {
  children: ReactNode | ReactNode[];
  className?: string;
  title?: string;
  titleSize?: string;
  height?: string;
};

export const Card = ({ children, className, title, titleSize = "md" }: CardProps) => {
  return (
    <div className="card card-compact card-bordered w-full">
      <div className="card-body flex-col">
        {title && <h2 className={`card-title text-${titleSize}`}>{title}</h2>}
        {children}
      </div>
    </div>
  );
};
