import Image, { ImageProps, getImageProps } from 'next/image';

// https://tina.io/docs/editing/markdown/
import { CTAWithIcon } from './CTAWithIcon';
import { HeadingsH1 } from './Headings/Headings_h1';
import { HeadingsH2 } from './Headings/Headings_h2';
import { HeadingsH3 } from './Headings/Headings_h3';
import { HeadingsStrong } from './Headings/Headings_strong';
import { PositionableImage } from './PositionableImage';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      style={githubGist}
      customStyle={{
        display: 'block',
        background: 'white',
        padding: '1rem',
        color: '#333333',
        overflowX: 'auto',
        margin: '10px 0',
      }}
      wrapLongLines={true}
      language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

export const MdxComponents = {
  CTAWithIcon: CTAWithIcon,
  h1: HeadingsH1,
  h2: HeadingsH2,
  h3: HeadingsH3,
  h4: HeadingsStrong,
  h5: HeadingsStrong,
  h6: HeadingsStrong,
  PositionableImage: PositionableImage,
  code_block: CodeBlock,
  img: (props) => {
    // @ts-ignore
    // console.log('props', props);
    const url = `${props.url.replace('/public', '')}`;
    // console.log('url', url);
    const common = { alt: props.alt || 'Image', width: 800, height: 400 };
    const {
      props: { srcSet: image, ...rest },
    } = getImageProps({ ...common, src: url });
    return (
      <>
        <picture>
          <source srcSet={image} />
          <img
            alt={props.alt || 'Image'}
            {...rest}
          />
        </picture>
        {props.caption && (
          <figcaption className="text-center text-sm text-gray-500">
            {props.caption}
          </figcaption>
        )}
      </>
    );
  },
};
