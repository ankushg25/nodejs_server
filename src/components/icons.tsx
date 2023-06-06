interface IconProps {
  biIconClass: string;
  colorClass: string;
}

const Icon = ({
  biIconClass,
  colorClass = "text-success",
}: IconProps): JSX.Element => {
  return <i className={`${biIconClass} ${colorClass} fs-3 px-2`}></i>;
};

export default Icon;
