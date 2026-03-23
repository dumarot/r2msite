interface EsplanadaLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function EsplanadaLogo({ className = '', variant = 'light' }: EsplanadaLogoProps) {
  return (
    <img
      src="https://www.esplanadajau.com.br/wp-content/themes/c4theme/img/banner/logo.webp"
      alt="Esplanada Jaú"
      className={className}
    />
  );
}
