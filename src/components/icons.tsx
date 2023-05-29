type IconProps = {
  bi_icon_class: string;
  color_class: string;
};

const Icon = (props: IconProps): JSX.Element => {
  return (
    <i className={`${props.bi_icon_class} ${props.color_class} fs-3 px-2`}></i>
  );
};

export default Icon;
