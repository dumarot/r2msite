import { useEffect } from 'react';

interface StructuredDataProps {
  type?: 'organization' | 'project';
  projectData?: {
    name: string;
    description: string;
    image: string;
    location: string;
    category: string;
  };
}

export default function StructuredData({ type = 'organization', projectData }: StructuredDataProps) {
  useEffect(() => {
    const scriptId = 'structured-data';
    let existingScript = document.getElementById(scriptId);

    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';

    if (type === 'organization') {
      const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        name: 'R2M Incorporadora',
        alternateName: 'R2M',
        url: 'https://r2m.com.br',
        logo: 'https://r2m.com.br/logos/logobranca.png',
        description: 'Incorporadora especializada em desenvolvimento urbano e construção de empreendimentos imobiliários com excelência e sustentabilidade.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Campinas',
          addressRegion: 'SP',
          addressCountry: 'BR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -22.9099,
          longitude: -47.0626,
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Campinas',
            '@id': 'https://www.wikidata.org/wiki/Q170339',
          },
          {
            '@type': 'City',
            name: 'Jaú',
          },
          {
            '@type': 'City',
            name: 'Joanópolis',
          },
          {
            '@type': 'City',
            name: 'Sumaré',
          },
          {
            '@type': 'City',
            name: 'Mogi Mirim',
          },
        ],
        sameAs: [
          'https://r2m.com.br',
          'https://www.vistasjoanopolis.com.br',
          'https://www.esplanadajau.com.br',
          'https://www.cicloviracopos.com.br',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          availableLanguage: 'Portuguese',
        },
        makesOffer: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Loteamentos Residenciais',
              description: 'Lotes residenciais com infraestrutura completa',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Apartamentos',
              description: 'Empreendimentos residenciais verticais',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Lotes Comerciais e Industriais',
              description: 'Áreas para desenvolvimento comercial e logístico',
            },
          },
        ],
      };

      script.textContent = JSON.stringify(organizationSchema);
    } else if (type === 'project' && projectData) {
      const projectSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: projectData.name,
        description: projectData.description,
        image: projectData.image,
        brand: {
          '@type': 'Organization',
          name: 'R2M Incorporadora',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'BRL',
        },
        additionalType: projectData.category,
        locationCreated: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: projectData.location,
            addressRegion: 'SP',
            addressCountry: 'BR',
          },
        },
      };

      script.textContent = JSON.stringify(projectSchema);
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, projectData]);

  return null;
}
