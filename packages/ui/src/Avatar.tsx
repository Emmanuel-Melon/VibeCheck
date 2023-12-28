"use client";

type AvatarProps = {
  alt?: string;
  className?: any;
  src?: string;
  size?: string;
};
export const Avatar = ({ alt, src, className, size = "12" }: AvatarProps) => {
  return (
    <div className="avatar">
      <div className={`w-${size} rounded-full shadow`}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
