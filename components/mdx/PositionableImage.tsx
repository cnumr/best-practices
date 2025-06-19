import Image, { ImageProps } from 'next/image';

import { FunctionComponent } from 'react';
import { Iconify } from '../iconify';
import { cn } from '../../utils/cn';

type PositionableImage = {
  src: string;
  alt?: string;
  title?: string;
  caption?: string;
  position?: 'float-left' | 'float-right' | 'block';
  imgWidth?:
    | 'auto'
    | 'fullWidth'
    | 'twoThirdWidth'
    | 'halfWidth'
    | 'thirdWidth'
    | 'quarterWidth';
  zoomable?: boolean;
  width?: number;
  height?: number;
  class?: string;
};

interface PositionableImageProps {
  [x: string]: string;
  //   props: PositionableImage;
}
export const PositionableImage: FunctionComponent<PositionableImageProps> = (
  props
) => {
  return (
    <figure
      className={cn(
        {
          'float-left mr-2 pb-2': props.position === 'float-left',
          'float-right ml-2 pb-2': props.position === 'float-right',
          'mx-auto block pb-2': props.position === 'block',
        },
        {
          'w-auto': props.imgWidth === 'auto',
          'w-full': props.imgWidth === 'fullWidth',
          'w-full md:w-2/3': props.imgWidth === 'twoThirdWidth',
          'w-full md:w-1/2': props.imgWidth === 'halfWidth',
          'w-full md:w-1/3': props.imgWidth === 'thirdWidth',
          'w-full md:w-1/4': props.imgWidth === 'quarterWidth',
        }
      )}>
      {props.zoomable ? (
        <a
          href={props.src || ''}
          target="_blank"
          className="group relative inline-block">
          <Image
            src={props.src}
            width={Number(props.width) || 600}
            height={Number(props.height) || 400}
            alt={props.alt || `Undefined`}
            title={props.title || ``}
            className={cn(`mx-auto`, props.class)}
          />
          <span className="absolute bottom-0 right-0 m-2 rounded-lg bg-black bg-opacity-25 p-1 group-hover:bg-opacity-50">
            <Iconify
              icon="tabler:zoom-scan"
              size={24}
              class="text-white"
            />
          </span>
        </a>
      ) : (
        <Image
          src={props.src}
          width={Number(props.width) || 600}
          height={Number(props.height) || 400}
          alt={props.alt || `Undefined`}
          title={props.title || ``}
          className={cn(`mx-auto`, props.class)}
        />
      )}
      {props.caption && (
        <figcaption className="block text-center text-xs italic">
          {props.caption}
        </figcaption>
      )}
    </figure>
  );
};
