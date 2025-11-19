import { Link } from "react-router-dom";

type CircularButtonProps = {
  to: string;
  label: string;
  variant: "primary" | "secondary" | "accent";
};

const variantStyles = {
  primary: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_4px_20px_rgba(33,150,243,0.3)] hover:shadow-[0_8px_30px_rgba(33,150,243,0.4)]",
  secondary: "bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-[0_4px_20px_rgba(255,107,53,0.3)] hover:shadow-[0_8px_30px_rgba(255,107,53,0.4)]",
  accent: "bg-accent hover:bg-accent/90 text-accent-foreground shadow-[0_4px_20px_rgba(38,166,154,0.3)] hover:shadow-[0_8px_30px_rgba(38,166,154,0.4)]",
};

const CircularButton = ({ to, label, variant }: CircularButtonProps) => {
  return (
    <Link
      to={to}
      className={`flex h-36 w-36 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${variantStyles[variant]}`}
    >
      <span className="text-center text-base font-bold">{label}</span>
    </Link>
  );
};

export default CircularButton;
