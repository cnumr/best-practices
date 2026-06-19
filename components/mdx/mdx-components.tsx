import DOMPurify from 'isomorphic-dompurify';
import Image, { ImageProps, getImageProps } from 'next/image';

// https://tina.io/docs/editing/markdown/
import { CTAWithIcon } from './CTAWithIcon';
import { HeadingsH1 } from './Headings/Headings_h1';
import { HeadingsH2 } from './Headings/Headings_h2';
import { HeadingsH3 } from './Headings/Headings_h3';
import { HeadingsStrong } from './Headings/Headings_strong';
import { LexiqueText } from './LexiqueText';
import { PositionableImage } from './PositionableImage';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { getRefConfig } from '../../referentiel-config';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ui } from '../../i18n/ui';

type Lang = keyof typeof ui;

const HTML_SANITIZE_CONFIG = {
  ALLOWED_TAGS: [
    'b',
    'strong',
    'i',
    'em',
    'u',
    's',
    'del',
    'ins',
    'sup',
    'sub',
    'small',
    'mark',
    'abbr',
    'cite',
    'code',
    'kbd',
    'samp',
    'var',
    'br',
    'span',
    'a',
    'p',
    'ul',
    'ol',
    'li',
    'blockquote',
    'pre',
    'hr',
    'table',
    'thead',
    'tbody',
    'tfoot',
    'tr',
    'td',
    'th',
    'caption',
    'figure',
    'figcaption',
  ],
  ALLOWED_ATTR: [
    'href',
    'title',
    'lang',
    'class',
    'id',
    'aria-label',
    'aria-hidden',
    'aria-describedby',
    'role',
    'colspan',
    'rowspan',
    'scope',
  ],
};

const sanitizeHtml = (html: string) =>
  DOMPurify.sanitize(html, HTML_SANITIZE_CONFIG);

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

export const getMdxComponents = (lang: Lang = 'fr') => ({
  CTAWithIcon: CTAWithIcon,
  h1: HeadingsH1,
  h2: HeadingsH2,
  h3: HeadingsH3,
  h4: HeadingsStrong,
  h5: HeadingsStrong,
  h6: HeadingsStrong,
  PositionableImage: PositionableImage,
  code_block: CodeBlock,
  html: ({ value }: { value: string }) => (
    <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(value) }} />
  ),
  html_inline: ({ value }: { value: string }) => (
    <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(value) }} />
  ),
  ...(getRefConfig().featuresEnabled.lexique_tooltips
    ? {
        p: (props: any) => (
          <LexiqueText
            {...props}
            tag="p"
          />
        ),
        li: (props: any) => (
          <LexiqueText
            {...props}
            tag="li"
          />
        ),
        blockquote: (props: any) => (
          <LexiqueText
            {...props}
            tag="blockquote"
          />
        ),
        td: (props: any) => (
          <LexiqueText
            {...props}
            tag="td"
          />
        ),
        th: (props: any) => (
          <LexiqueText
            {...props}
            tag="th"
          />
        ),
      }
    : {}),
  img: (props) => {
    // @ts-ignore - TinaCMS image props include 'url' not in standard types
    const url = `${props.url.replace('/public', '')}`;

    const alt = props.alt || 'Image';
    const common = { alt, width: 800, height: 400 };
    const {
      props: { srcSet: image, alt: _, ...rest },
    } = getImageProps({ ...common, src: url });
    return (
      <>
        <picture>
          <source srcSet={image} />
          <img
            alt={alt}
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
});

// Export par défaut pour la rétrocompatibilité
export const MdxComponents = getMdxComponents();
