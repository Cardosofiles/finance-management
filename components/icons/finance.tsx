interface FinanceLogoSVGProps {
  className?: string;
}
export function FinanceLogoSVG({ className }: FinanceLogoSVGProps) {
  return (
    <svg
      width={100}
      height={100}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        className="ccustom"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.556 11.685A10 10 0 0020 10V0A20 20 0 110 20h10a10 10 0 1015.556-8.315z"
        fill="#007DFC"
      />
      <path
        className="ccustom"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0A10 10 0 010 10v10A20 20 0 0020 0H10z"
        fill="#007DFC"
      />
    </svg>
  );
}
