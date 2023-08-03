import { MouseEvent } from "react";

interface Props {
  text: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isActive?: boolean;
  className?: string;
}

/**
 */
export default function ToolbarItem({
  text,
  disabled,
  onClick,
  className,
  isActive,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full border border-light-3xl-gray px-3 py-1 disabled:cursor-not-allowed disabled:bg-light-4xl-gray disabled:text-dark-gray ${
        isActive ? "bg-gray-400" : ""
      } ${className ?? ""}`}
      title={`${text}${disabled ? " (disabled)" : ""}`}
    >
      {text}
    </button>
  );
}
