import { slugify } from '../../../src/js/utils';

export const HeadingsH3 = ({ props, children }) => {
  const id = slugify(children.props.content[0].text);
  return (
    <h3
      className="h3"
      id={id}
      {...props}>
      {children}
    </h3>
  );
};
