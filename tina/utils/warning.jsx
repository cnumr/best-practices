import React from 'react';
const WarningIcon = (props) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></path>
      <path d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z"></path>
    </svg>
  );
};

export const RestartWarning = ({ comment }) => {
  return (
    <p className="mb-4 rounded-lg border border-yellow-200 bg-gradient-to-r from-yellow-50 to-yellow-100 px-4 py-2.5 shadow">
      <div className="flex items-center gap-2">
        <WarningIcon className={`h-auto w-6 flex-shrink-0 text-yellow-400`} />
        <div className="flex flex-col gap-1">
          {comment && (
            <div
              className={`flex-1 whitespace-normal text-sm text-yellow-700	`}
              dangerouslySetInnerHTML={{ __html: comment }}
            />
          )}
        </div>
      </div>
    </p>
  );
};
