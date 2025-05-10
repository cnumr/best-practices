import { slugify } from '../../../src/js/utils';

export const HeadingsH2 = ({ props, children }) => {
  const id = slugify(children.props.content[0].text);
  return (
    <h2
      className="h2"
      id={id}
      {...props}>
      {children}
    </h2>
  );
};
