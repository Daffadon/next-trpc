"use client";

interface ButtonIconsProps {
  Icon: React.ElementType;
  iconSize: number;
  onClick: () => void;
  tailwindStyles?: string;
  colorIcon?: string;
}

const ButtonIcons = ({
  Icon,
  iconSize,
  onClick,
  tailwindStyles,
}: ButtonIconsProps) => {
  return (
    <div className={` ${tailwindStyles}`} onClick={onClick}>
      <Icon size={iconSize} />
    </div>
  );
};

export default ButtonIcons;
