import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
}

export default function SEO({
  title = 'R2M - Incorporadora e Construtora | Empreendimentos Imobiliários',
  description = 'R2M é uma incorporadora especializada em desenvolvimento urbano e construção de empreendimentos imobiliários com excelência e sustentabilidade. Conheça nossos projetos em Campinas, Jaú, Joanópolis e região.',
  keywords = 'incorporadora, construtora, empreendimentos imobiliários, loteamento, apartamentos, desenvolvimento urbano, Campinas, Jaú, Joanópolis, lotes, imóveis, construção civil',
  ogImage = 'https://static.wixstatic.com/media/028729_46a7487bb5f04ac49b17283ca9e00674~mv2.jpg/v1/fill/w_1200,h_630,al_c,q_85/028729_46a7487bb5f04ac49b17283ca9e00674~mv2.jpg',
  ogType = 'website',
  canonical,
  noindex = false,
}: SEOProps) {
  const location = useLocation();
  const baseUrl = 'https://r2m.com.br';
  const currentUrl = canonical || `${baseUrl}${location.pathname}`;

  useEffect(() => {
    document.title = title;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:site_name', 'R2M Incorporadora', true);

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow');
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = currentUrl;
  }, [title, description, keywords, ogImage, ogType, currentUrl, noindex]);

  return null;
}
