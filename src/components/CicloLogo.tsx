interface CicloLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function CicloLogo({ className = '', variant = 'light' }: CicloLogoProps) {
  return (
    <img
      src="/logos/logobranca.png"
      alt="CICLO Viracopos"
      className={className}
    />
  );
}
