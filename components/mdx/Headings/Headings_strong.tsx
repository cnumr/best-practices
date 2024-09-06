import { slugify } from '../../../src/js/utils';

export const HeadingsStrong = ({ props, children }) => {
  const id = slugify(children.props.content[0].text);
  return (
    <strong
      id={id}
      {...props}>
      {children}
    </strong>
  );
};
