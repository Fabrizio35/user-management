interface Props {
  size?: string;
  className?: string;
  strokeWidth?: string;
}

export const EyeIcon = ({ size, className, strokeWidth }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-eye ${className}`}
      width={size ? size : "24"}
      height={size ? size : "24"}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth ? strokeWidth : "2"}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
    </svg>
  );
};

export const UserIcon = ({ size, className, strokeWidth }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-user ${className}`}
      width={size ? size : "24"}
      height={size ? size : "24"}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth ? strokeWidth : "2"}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
    </svg>
  );
};

export const EyeOffIcon = ({ size, className, strokeWidth }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-eye-off ${className}`}
      width={size ? size : "24"}
      height={size ? size : "24"}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth ? strokeWidth : "2"}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"></path>
      <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"></path>
      <path d="M3 3l18 18"></path>
    </svg>
  );
};
