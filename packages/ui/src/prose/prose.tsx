import clsx from "clsx";

export const Prose = (props: any) => {
  const { as: Component = "div", className: classNameProp, ...other } = props;

  const className = clsx(classNameProp, "prose dark:prose-invert");

  return <Component className={className} {...other} />;
};
