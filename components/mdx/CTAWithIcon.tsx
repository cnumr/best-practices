import Link from 'next/link';
import { Iconify } from '../iconify';
export const CTAWithIcon = ({ icon, label, url, target }) => {
  const targetAttr =
    target === '_blank' ? { rel: 'nofollow noopener noreferrer' } : {};
  return (
    <div className="mb-16 mt-12 text-center">
      <Link
        href={url}
        title={label}
        target={target}
        {...targetAttr}
        rel="nofollow noopener noreferrer"
        className="btn btn-outline inline-flex items-center gap-2 !no-underline">
        <span>{label}</span>
        {icon && (
          <span>
            <Iconify
              icon={icon}
              width={24}
              height={24}
            />
          </span>
        )}
      </Link>
    </div>
  );
};
