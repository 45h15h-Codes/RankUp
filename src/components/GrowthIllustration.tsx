type GrowthIllustrationProps = {
  className?: string;
};

export default function GrowthIllustration({ className = '' }: GrowthIllustrationProps) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M72 130C72 92.4446 102.445 62 140 62H202C234.585 62 261 88.4152 261 121V121C261 158.555 230.555 189 193 189H151L120 208V189H140C102.445 189 72 158.555 72 121V130Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M117 116C124 104 137 96 152 96"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M122 142L147 117L165 131L195 101"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="122" cy="142" r="4" fill="currentColor" />
        <circle cx="147" cy="117" r="4" fill="currentColor" />
        <circle cx="165" cy="131" r="4" fill="currentColor" />
        <circle cx="195" cy="101" r="4" fill="currentColor" />
      </svg>
    </div>
  );
}
