export interface ProjectDetail {
  id: number;
  slug: string;
  name: string;
  status: string;
  location: string;
  category: string;
  description: string;
  longDescription: string;
  mainImage: string;
  gallery: string[];
  features: string[];
  highlights: Array<{
    title: string;
    description: string;
  }>;
  specifications?: {
    label: string;
    value: string;
  }[];
  website?: string;
  logo?: string;
}

export const projectsData: ProjectDetail[] = [
  {
    id: 2,
    slug: 'vistas-joanopolis',
    name: 'Vistas Joanópolis',
    status: 'Lançamento',
    location: 'Joanópolis, SP',
    category: 'Condomínio de Lotes',
    description: 'Lotes de 1.000 a 3.000 m² em harmonia com a natureza',
    longDescription: 'Vistas Joanópolis é um empreendimento exclusivo que oferece lotes de 1.000 a 3.000 m² em uma localização privilegiada às margens da represa. Um endereço para respirar, onde você encontra harmonia com a natureza, tranquilidade e qualidade de vida. O projeto conta com infraestrutura completa incluindo clube náutico, heliponto, spa & wellness, beach tennis, marina privativa e segurança 24h.',
    mainImage: 'https://static.wixstatic.com/media/028729_46a7487bb5f04ac49b17283ca9e00674~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01/028729_46a7487bb5f04ac49b17283ca9e00674~mv2.jpg',
    gallery: [
      'https://static.wixstatic.com/media/028729_f9ca1aedf9b2413fbe49116cc2624bc4~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.66_1.00_0.01/028729_f9ca1aedf9b2413fbe49116cc2624bc4~mv2.jpg',
      'https://static.wixstatic.com/media/028729_46a7487bb5f04ac49b17283ca9e00674~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01/028729_46a7487bb5f04ac49b17283ca9e00674~mv2.jpg',
      'https://static.wixstatic.com/media/028729_61434879475948a08b71f9b11fea993e~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90/028729_61434879475948a08b71f9b11fea993e~mv2.jpg',
      'https://static.wixstatic.com/media/028729_feb5b1744ab04ff898f7af91976ac4a9~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90/028729_feb5b1744ab04ff898f7af91976ac4a9~mv2.jpg',
      'https://static.wixstatic.com/media/028729_300012ad348e41f691895708ed4dda86~mv2.jpeg/v1/fill/w_1920,h_1080,al_c,q_90,enc_avif,quality_auto/vistas%20-%20portaria2%20Grande.jpeg',
      'https://static.wixstatic.com/media/028729_fb5f31cbad104b83b424d26b0665e58e~mv2.jpeg/v1/fill/w_1920,h_1280,al_c,q_90,enc_avif,quality_auto/vistas%20-%20paisagem1%20Grande.jpeg',
      'https://static.wixstatic.com/media/028729_316a2d568ec74581b39a4bce5001d863~mv2.jpeg/v1/fill/w_1920,h_1080,al_c,q_90,enc_avif,quality_auto/vistas%20-%20clube%20nautico5%20Grande.jpeg',
      'https://static.wixstatic.com/media/028729_69a6f878abe74be8a37cdfc462a80b15~mv2.jpeg/v1/fill/w_1920,h_1080,al_c,q_90,enc_avif,quality_auto/vistas%20-%20movimento7%20Grande.jpeg',
      'https://static.wixstatic.com/media/028729_e5a5e53ca72e4615ba07370c16850565~mv2.jpeg/v1/fill/w_1920,h_1120,al_c,q_90,enc_avif,quality_auto/vistas%20-%20wellness2%20Grande.jpeg',
      'https://static.wixstatic.com/media/028729_9b9fe02da8d14343b8f669bcd3426c8b~mv2.jpeg/v1/fill/w_1920,h_1132,al_c,q_90,enc_avif,quality_auto/vistas%20-%20encontros2%20Grande.jpeg',
      'https://static.wixstatic.com/media/028729_b9b498c9fa734e808392115c1d5562ff~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90/028729_b9b498c9fa734e808392115c1d5562ff~mv2.jpg',
      'https://static.wixstatic.com/media/028729_87ba2f977a2941de8a258e9b25da7052~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_90/028729_87ba2f977a2941de8a258e9b25da7052~mv2.jpg',
      'https://static.wixstatic.com/media/028729_cc2b5751e5e844788cd8ec8a4c3ea012~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_90/IMAGEM%2007.jpg',
      'https://static.wixstatic.com/media/028729_43086095e7fd42e093017e7920b45329~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90/028729_43086095e7fd42e093017e7920b45329~mv2.jpg',
      'https://static.wixstatic.com/media/028729_02062da69f9b41089b7b28023690babd~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90/028729_02062da69f9b41089b7b28023690babd~mv2.jpg'
    ],
    features: [
      'Clube Náutico',
      'Heliponto',
      'Spa & Wellness',
      'Beach Tennis',
      'Marina Privativa',
      'Segurança 24h',
      'Infraestrutura Completa',
      'Portaria',
      'Paisagismo'
    ],
    highlights: [
      {
        title: 'Localização à Beira da Represa',
        description: 'Lotes com vista privilegiada para a represa de Joanópolis'
      },
      {
        title: 'Infraestrutura de Resort',
        description: 'Clube náutico, spa, heliponto e marina privativa'
      },
      {
        title: 'Lotes Exclusivos',
        description: 'Terrenos de 1.000 a 3.000 m² para construir a casa dos seus sonhos'
      }
    ],
    specifications: [
      { label: 'Tamanho dos Lotes', value: '1.000 a 3.000 m²' },
      { label: 'Infraestrutura', value: 'Completa' },
      { label: 'Localização', value: 'Beira da Represa' },
      { label: 'Segurança', value: '24 horas' }
    ],
    website: 'https://www.vistasjoanopolis.com.br',
    logo: 'https://static.wixstatic.com/media/028729_2f550e2e9af64330a8d26a15e4c57c78~mv2.png'
  },
  {
    id: 1,
    slug: 'esplanada-jau',
    name: 'Esplanada Jaú',
    status: 'Em Obras',
    location: 'Jaú, SP',
    category: 'Residencial',
    description: 'Espaços exclusivos pensados para você. Ambientes integrados com lazer completo.',
    longDescription: 'O Esplanada Jaú é um empreendimento residencial que oferece espaços exclusivos pensados para você e sua família. Com ambientes amplos e integrados, o projeto conta com área de lazer completa, incluindo coworking, academia, piscina, churrasqueira, quadra de esportes e elevador. Um empreendimento moderno que proporciona conforto, segurança e qualidade de vida.',
    mainImage: '/RB2_Esplanada_Fachada_R02.jpg',
    gallery: [
      '/RB2_Esplanada_Fachada_R02.jpg',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria/decorado1.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria/decorado2.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria/decorado3.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria/decorado4.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria/decorado5.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/exclusivos/living.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria2/1.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria2/2.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria2/3.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria2/4.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria2/5.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria2/6.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria2/7.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria2/8.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria2/9.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria2/10.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria2/11.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria2/12.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/galeria2/13.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/plantas/tipo_01.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/plantas/tipo_02.webp',
      'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/plantas/tipo_03.webp'
    ],
    features: [
      'Coworking',
      'Academia',
      'Piscina',
      'Churrasqueira',
      'Quadra de Esportes',
      'Elevador',
      'Salão de Festas',
      'Playground',
      'Espaço Gourmet',
      'Minimercado',
      'Games',
      'Espaço Pet'
    ],
    highlights: [
      {
        title: 'Localização Privilegiada',
        description: 'Próximo a toda infraestrutura da cidade de Jaú'
      },
      {
        title: 'Lazer Completo',
        description: 'Área de lazer com piscina, churrasqueira e espaço gourmet'
      },
      {
        title: 'Ambientes Bem Planejados',
        description: 'Apartamentos com ambientes bem planejados'
      },
      {
        title: 'Plantas Inteligentes',
        description: 'Studio, 2 dorms com suíte e 2 dorms com ambientes projetados para facilitar o seu dia'
      }
    ],
    specifications: [
      { label: 'Tipos', value: 'Studio, 2 Dorms, 2 Dorms com Suíte' },
      { label: 'Vagas', value: '1' },
      { label: 'Lazer', value: 'Completo' },
      { label: 'Entrega', value: '2027' }
    ],
    website: 'https://www.esplanadajau.com.br',
    logo: 'https://www.esplanadajau.com.br/wp-content/themes/c4themeEsplanada/img/logo_esplanada.png'
  },
  {
    id: 3,
    slug: 'ciclo-viracopos',
    name: 'CICLO Viracopos',
    status: 'Entregue',
    location: 'Campinas, SP',
    category: 'Logístico',
    description: 'Loteamento comercial, industrial e logístico',
    longDescription: 'CICLO Viracopos é um empreendimento com lotes destinados a ocupação comercial, industrial e logística às margens da Rodovia dos Bandeirantes. Com área de 59.794,69 m², opções de lotes desmembrados a partir de 2.000 m², o empreendimento conta com infraestrutura completa com abastecimento de água, esgotamento sanitário, rede de energia elétrica, pavimento para tráfego pesado, ampla área verde reflorestada e topografia privilegiada.',
    mainImage: 'https://static.wixstatic.com/media/eb9c0e_a350a94f77fd4fbf95cd663fe3ed3ce1~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90,enc_avif,quality_auto/DJI_0600_JPG.jpg',
    gallery: [
      'https://static.wixstatic.com/media/eb9c0e_a350a94f77fd4fbf95cd663fe3ed3ce1~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90,enc_avif,quality_auto/DJI_0600_JPG.jpg',
      'https://static.wixstatic.com/media/eb9c0e_40658e96a93e42dbaf53c76381cf79cc~mv2.jpg/v1/fill/w_648,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20230904_110937.jpg',
      'https://static.wixstatic.com/media/eb9c0e_63e16ce07204458dbd94b6bab060ec0b~mv2.jpg/v1/crop/x_0,y_260,w_4032,h_1748/fill/w_648,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20230829_105652.jpg',
      'https://static.wixstatic.com/media/eb9c0e_2c564da5a66442b2991fe2f1fd545b75~mv2.jpg/v1/fill/w_648,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DJI_0627_JPG.jpg',
      'https://static.wixstatic.com/media/eb9c0e_c4f94fae7f844eeebd2eef929c533c6c~mv2.jpg/v1/fill/w_980,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/eb9c0e_c4f94fae7f844eeebd2eef929c533c6c~mv2.jpg'
    ],
    features: [
      'Infraestrutura Completa',
      'Abastecimento de Água',
      'Esgotamento Sanitário',
      'Rede de Energia Elétrica',
      'Pavimento Tráfego Pesado',
      'Área Verde Reflorestada',
      'Topografia Privilegiada',
      'Acesso pela Rod. Bandeirantes'
    ],
    highlights: [
      {
        title: 'Localização Estratégica',
        description: 'Às margens da Rodovia dos Bandeirantes em Campinas'
      },
      {
        title: 'Infraestrutura Completa',
        description: 'Água, esgoto, energia e pavimento para tráfego pesado'
      },
      {
        title: 'Área Total',
        description: '59.794,69 m² com lotes a partir de 2.000 m²'
      }
    ],
    specifications: [
      { label: 'Área Total', value: '59.794,69 m²' },
      { label: 'Lotes', value: 'A partir de 2.000 m²' },
      { label: 'Zoneamento', value: 'Z14 (Lei 6.031/88) / ZC2 (LC 208/2018)' },
      { label: 'Status', value: 'Entregue' }
    ],
    website: 'https://www.cicloviracopos.com.br',
    logo: 'https://static.wixstatic.com/media/eb9c0e_e33f5668e10a4ce88edee4e1e32c7f4b~mv2.png'
  },
  {
    id: 4,
    slug: 'residencial-viverdi',
    name: 'Residencial Viverdi',
    status: 'Entregue',
    location: 'Mogi Mirim, SP',
    category: 'Residencial',
    description: 'O melhor endereço de Mogi Mirim, 2 dormitórios, 47,8 m²',
    longDescription: 'O melhor endereço de Mogi Mirim, infraestrutura completa, 2 dormitórios, 1 vaga, 47,8 m². Um empreendimento inovador para a cidade, Viverdi é sucesso desde o início.',
    mainImage: 'https://r2m.com.br/wp-content/themes/r2m/img/viverdi.jpg',
    gallery: [
      'https://r2m.com.br/wp-content/themes/r2m/img/viverdi.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-renders/render1.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-renders/render2.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-renders/render3.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-renders/render4.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-renders/render5.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-renders/render6.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-renders/render7.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-renders/render8.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-renders/render9.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/1.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/2.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/3.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/4.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/5.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/6.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/7.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/8.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/9.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/10.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/11.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/12.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/13.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/14.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/15.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/16.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/17.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/18.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/19.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/20.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/21.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/22.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/23.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/24.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/25.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/26.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/27.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/28.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/galeria-obras2/29.jpg'
    ],
    features: [
      '2 Dormitórios',
      '1 Vaga',
      'Área de Lazer',
      'Segurança',
      'Playground',
      'Salão de Festas'
    ],
    highlights: [
      {
        title: 'Melhor Endereço',
        description: 'O melhor endereço de Mogi Mirim com infraestrutura completa'
      },
      {
        title: 'Apartamentos Compactos',
        description: '2 dormitórios, 1 vaga, 47,8 m²'
      },
      {
        title: 'Projeto Inovador',
        description: 'Um empreendimento inovador que foi sucesso desde o início'
      }
    ],
    specifications: [
      { label: 'Área Total', value: '6.270,08 m²' },
      { label: 'Área Privativa', value: '47,83 m²' },
      { label: 'Dormitórios', value: '2 com varanda' },
      { label: 'Vagas', value: '1' }
    ],
    logo: 'https://r2m.com.br/wp-content/themes/r2m/img/logoviverdi.png'
  },
  {
    id: 5,
    slug: 'residencia-alphaville',
    name: 'Residência Alphaville',
    status: 'Entregue',
    location: 'Campinas, SP',
    category: 'Residencial',
    description: 'Residência de alto padrão com arquitetura marcante',
    longDescription: 'Esta residência de alto padrão projetada pelo renomado arquiteto Aldomar Caprini tem características marcantes com revestimento em tijolinho aparente estilo inglês e maravilhoso jogo de telhados.',
    mainImage: 'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/obras/8.JPG',
    gallery: [
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/obras/8.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/1.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/2.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/3.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/4.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/obras/1.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/obras/2.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/obras/3.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/obras/4.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/obras/5.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/obras/6.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/obras/7.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/obras/9.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/obras/10.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/obras/11.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/obras/12.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/obras/13.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/obras/14.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/obras/15.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/alphaville/obras/16.JPG'
    ],
    features: [
      'Alto Padrão',
      'Arquitetura Moderna',
      'Tijolinho Aparente',
      'Projeto Aldomar Caprini',
      'Acabamento Premium'
    ],
    highlights: [
      {
        title: 'Arquitetura Marcante',
        description: 'Projeto do renomado arquiteto Aldomar Caprini'
      },
      {
        title: 'Tijolinho Estilo Inglês',
        description: 'Revestimento em tijolinho aparente estilo inglês'
      },
      {
        title: 'Alto Padrão Alphaville',
        description: 'Residência com acabamentos de primeira qualidade'
      }
    ],
    specifications: [
      { label: 'Área', value: '380,58 m²' },
      { label: 'Tipo', value: 'Obra Residencial' },
      { label: 'Arquiteto', value: 'Aldomar Caprini' },
      { label: 'Status', value: '100% Concluído' }
    ]
  },
  {
    id: 6,
    slug: 'loteamento-santa-joana',
    name: 'Loteamento Santa Joana',
    status: 'Entregue',
    location: 'Sumaré, SP',
    category: 'Loteamento',
    description: 'Lotes de 250 m² com infraestrutura completa',
    longDescription: 'Loteamento Residencial localizado próximo da Estrada Valencio Calegari em Sumaré, lotes de 250 m² com infraestrutura completa, guias americanas e uma grande área verde reflorestada.',
    mainImage: 'https://r2m.com.br/wp-content/themes/r2m/img/card_cap/santajoana.JPG',
    gallery: [
      'https://r2m.com.br/wp-content/themes/r2m/img/card_cap/santajoana.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/santa-joana/1.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/santa-joana/2.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/santa-joana/3.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/santa-joana/4.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/santa-joana/5.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/santa-joana/6.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/santa-joana/7.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/santa-joana/8.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/santa-joana/9.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/santa-joana/10.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/santa-joana/11.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/santa-joana/12.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/santa-joana/13.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/santa-joana/14.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/santa-joana/15.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/santa-joana/16.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/santa-joana/17.JPG'
    ],
    features: [
      'Infraestrutura Completa',
      'Guias Americanas',
      'Pavimentação',
      'Iluminação',
      'Água e Esgoto',
      'Área Verde Reflorestada'
    ],
    highlights: [
      {
        title: 'Localização Privilegiada',
        description: 'Próximo da Estrada Valencio Calegari em Sumaré'
      },
      {
        title: 'Lotes de 250 m²',
        description: 'Terrenos com infraestrutura completa'
      },
      {
        title: 'Área Verde',
        description: 'Grande área verde reflorestada'
      }
    ],
    specifications: [
      { label: 'Área Total', value: '507.034,07 m²' },
      { label: 'Tamanho Lotes', value: '250 m²' },
      { label: 'Tipo', value: 'Lote Urbanizado' },
      { label: 'Status', value: '100% Concluído' }
    ]
  },
  {
    id: 7,
    slug: 'loteamento-sao-fernando',
    name: 'Loteamento São Fernando',
    status: 'Entregue',
    location: 'Campinas, SP',
    category: 'Loteamento',
    description: 'Adequação fundiária e infraestrutura urbana',
    longDescription: 'Adequação fundiária e execução de obras de infraestrutura do loteamento do Jd. São Fernando.',
    mainImage: 'https://r2m.com.br/wp-content/themes/r2m/img/card_cap/saofernando.jpg',
    gallery: [
      'https://r2m.com.br/wp-content/themes/r2m/img/card_cap/saofernando.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/2.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/3.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/4.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/5.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/6.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/7.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/8.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/9.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/10.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/11.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/12.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/13.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/14.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/15.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/16.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/17.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/18.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/19.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/20.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/21.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/22.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/23.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/24.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/25.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/26.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/27.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/sao-fernando/28.jpg'
    ],
    features: [
      'Infraestrutura Completa',
      'Adequação Fundiária',
      'Planejamento Urbano',
      'Pavimentação',
      'Água e Esgoto',
      'Iluminação'
    ],
    highlights: [
      {
        title: 'Adequação Fundiária',
        description: 'Loteamento do Jardim São Fernando regularizado'
      },
      {
        title: 'Infraestrutura Urbana',
        description: 'Execução completa de obras de infraestrutura'
      },
      {
        title: 'Projeto Concluído',
        description: 'Loteamento entregue com sucesso'
      }
    ],
    specifications: [
      { label: 'Área Total', value: '203.697,90 m²' },
      { label: 'Tipo', value: 'Infraestrutura Urbana' },
      { label: 'Status', value: '100% Concluído' }
    ]
  },
  {
    id: 8,
    slug: 'cei-gessy',
    name: 'C.E.I. Profª Gessy G. de Camargo',
    status: 'Entregue',
    location: 'Campinas, SP',
    category: 'Público',
    description: 'Ampliação de escola municipal',
    longDescription: 'Ampliação da escola municipal C.E.I. Profª Gessy G. de Camargo, construção de 2 salas de aula novas no local.',
    mainImage: 'https://r2m.com.br/wp-content/themes/r2m/img/gessy/2.jpg',
    gallery: [
      'https://r2m.com.br/wp-content/themes/r2m/img/gessy/2.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/gessy/1.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/gessy/3.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/gessy/4.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/gessy/5.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/gessy/6.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/gessy/7.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/gessy/8.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/gessy/9.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/gessy/10.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/gessy/11.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/gessy/12.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/gessy/13.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/gessy/14.jpg'
    ],
    features: [
      '2 Salas de Aula Novas',
      'Infraestrutura Educacional',
      'Área de Recreação',
      'Obra Pública'
    ],
    highlights: [
      {
        title: 'Ampliação Escolar',
        description: 'Construção de 2 salas de aula novas'
      },
      {
        title: 'Obra Pública',
        description: 'Escola municipal para a comunidade'
      },
      {
        title: 'Projeto Concluído',
        description: 'Ampliação entregue e em funcionamento'
      }
    ],
    specifications: [
      { label: 'Área', value: '107 m²' },
      { label: 'Tipo', value: 'Ampliação Escolar' },
      { label: 'Salas Novas', value: '2' },
      { label: 'Status', value: '100% Concluído' }
    ]
  },
  {
    id: 9,
    slug: 'parque-ecologico',
    name: 'Parque Ecológico',
    status: 'Entregue',
    location: 'Campinas, SP',
    category: 'Público',
    description: 'Revitalização da Portaria 2',
    longDescription: 'Revitalização e realocação da Portaria 2 do Parque Ecológico de Campinas, mantendo todas as características arquitetônicas em tijolo aparente e reconstrução do telhado em madeiramento novo de alta qualidade e durabilidade.',
    mainImage: 'https://r2m.com.br/wp-content/themes/r2m/img/card_cap/parqueecologico.JPG',
    gallery: [
      'https://r2m.com.br/wp-content/themes/r2m/img/card_cap/parqueecologico.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/parque_ecologico/1.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/parque_ecologico/2.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/parque_ecologico/3.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/parque_ecologico/4.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/parque_ecologico/5.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/parque_ecologico/6.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/parque_ecologico/7.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/parque_ecologico/8.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/parque_ecologico/9.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/parque_ecologico/10.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/parque_ecologico/11.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/parque_ecologico/12.JPG'
    ],
    features: [
      'Revitalização',
      'Tijolo Aparente',
      'Telhado Novo',
      'Preservação Histórica',
      'Obra Pública'
    ],
    highlights: [
      {
        title: 'Revitalização Histórica',
        description: 'Manutenção das características arquitetônicas em tijolo aparente'
      },
      {
        title: 'Qualidade Superior',
        description: 'Reconstrução do telhado em madeiramento de alta qualidade'
      },
      {
        title: 'Portaria 2',
        description: 'Realocação da Portaria 2 do Parque Ecológico'
      }
    ],
    specifications: [
      { label: 'Área', value: '300 m²' },
      { label: 'Tipo', value: 'Revitalização' },
      { label: 'Status', value: '100% Concluído' }
    ]
  },
  {
    id: 10,
    slug: 'edificio-bela-alianca',
    name: 'Edifício Bela Aliança',
    status: 'Entregue',
    location: 'Campinas, SP',
    category: 'Residencial',
    description: 'Minha Casa Minha Vida - 44 m², 2 dormitórios',
    longDescription: 'Localizado na região de maior desenvolvimento urbano de Campinas, o edifício Bela Aliança foi construído e entregue dentro do Programa Minha Casa Minha Vida. Os apartamentos têm 44 m² de construção, 2 dormitórios e a área social conta com salão de festas e playground.',
    mainImage: 'https://r2m.com.br/wp-content/themes/r2m/img/card_cap/bellaalianca.jpg',
    gallery: [
      'https://r2m.com.br/wp-content/themes/r2m/img/card_cap/bellaalianca.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/bela-alianca/obras/1.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/bela-alianca/obras/2.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/bela-alianca/obras/3.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/bela-alianca/obras/4.jpg'
    ],
    features: [
      'Minha Casa Minha Vida',
      '2 Dormitórios',
      'Salão de Festas',
      'Playground',
      'Área de Lazer'
    ],
    highlights: [
      {
        title: 'Programa MCMV',
        description: 'Construído dentro do Programa Minha Casa Minha Vida'
      },
      {
        title: 'Localização Estratégica',
        description: 'Região de maior desenvolvimento urbano de Campinas'
      },
      {
        title: 'Apartamentos Completos',
        description: '44 m² com 2 dormitórios e área social'
      }
    ],
    specifications: [
      { label: 'Área Total', value: '790,00 m²' },
      { label: 'Área Apartamento', value: '44,00 m²' },
      { label: 'Dormitórios', value: '2' },
      { label: 'Programa', value: 'Minha Casa Minha Vida' }
    ],
    logo: 'https://r2m.com.br/wp-content/themes/r2m/img//bela-alianca/Logo.png'
  },
  {
    id: 11,
    slug: 'centro-logistico-viracopos',
    name: 'Centro Logístico Viracopos',
    status: 'Entregue',
    location: 'Campinas, SP',
    category: 'Logístico',
    description: 'Lotes industriais, comerciais e logísticos',
    longDescription: 'Centro Logístico Viracopos oferece lotes destinados a ocupação industrial, comercial e logística. Com infraestrutura 100% completa, incluindo terraplanagem, galeria de águas, abastecimento de água, rede de esgoto e pavimentação.',
    mainImage: 'https://r2m.com.br/wp-content/themes/r2m/img/viracopos/16.jpg',
    gallery: [
      'https://r2m.com.br/wp-content/themes/r2m/img/viracopos/16.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/viracopos/2.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/viracopos/3.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/viracopos/4.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/viracopos/5.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/viracopos/6.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/viracopos/7.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/viracopos/8.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/viracopos/9.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/viracopos/10.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/viracopos/11.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/viracopos/12.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/viracopos/13.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/viracopos/14.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/viracopos/15.jpg'
    ],
    features: [
      'Terraplanagem Completa',
      'Galeria de Águas',
      'Abastecimento de Água',
      'Rede de Esgoto',
      'Pavimentação',
      'Infraestrutura 100%'
    ],
    highlights: [
      {
        title: 'Infraestrutura 100%',
        description: 'Todas as obras concluídas: terraplanagem, água, esgoto e pavimentação'
      },
      {
        title: 'Lotes Industriais e Logísticos',
        description: 'Destinados a ocupação comercial, industrial e logística'
      },
      {
        title: 'Localização Estratégica',
        description: 'Próximo ao Aeroporto de Viracopos'
      }
    ],
    specifications: [
      { label: 'Área Total', value: '134.547,00 m²' },
      { label: 'Tipo', value: 'Lotes Industriais/Comerciais/Logísticos' },
      { label: 'Entrega', value: '2023' },
      { label: 'Status', value: '100% Concluído' }
    ]
  },
  {
    id: 12,
    slug: 'av-manoel-afonso-ferreira',
    name: 'Av. Manoel Afonso Ferreira',
    status: 'Entregue',
    location: 'Campinas, SP',
    category: 'Infraestrutura',
    description: 'Prolongamento de 1 km conectando bairros',
    longDescription: 'O prolongamento da Av. Manoel Afonso Ferreira conecta bairros da cidade e revitaliza o entorno da região da portaria 2 do Parque Ecológico de Campinas.',
    mainImage: 'https://r2m.com.br/wp-content/themes/r2m/img/card_cap/manoelafonsoferreira.JPG',
    gallery: [
      'https://r2m.com.br/wp-content/themes/r2m/img/card_cap/manoelafonsoferreira.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/1.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/2.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/3.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/4.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/5.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/6.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/7.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/8.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/9.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/10.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/11.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/12.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/13.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/14.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/15.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/16.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/17.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/18.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/19.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/20.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/21.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/22.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/23.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/24.JPG',
      'https://r2m.com.br/wp-content/themes/r2m/img/av._manoel_afonso_ferreira/25.JPG'
    ],
    features: [
      'Prolongamento Viário',
      'Pavimentação',
      'Drenagem',
      'Iluminação',
      'Conectividade Urbana',
      'Revitalização'
    ],
    highlights: [
      {
        title: 'Conectividade',
        description: 'Prolongamento de 1 km conectando bairros da cidade'
      },
      {
        title: 'Revitalização',
        description: 'Revitaliza o entorno do Parque Ecológico de Campinas'
      },
      {
        title: 'Infraestrutura Urbana',
        description: 'Obra completa de infraestrutura viária'
      }
    ],
    specifications: [
      { label: 'Extensão', value: '1 km' },
      { label: 'Tipo', value: 'Infraestrutura Urbana' },
      { label: 'Status', value: '100% Concluído' }
    ]
  },
  {
    id: 13,
    slug: 'anhanguera-107',
    name: 'Anhanguera 107',
    status: 'Entregue',
    location: 'Sumaré, SP',
    category: 'Logístico',
    description: 'Condomínio logístico no Km 107 da Anhanguera',
    longDescription: 'Empreendimento logístico localizado na altura do Km 107 da Rodovia Anhanguera, obras de terraplenagem, drenagem e gerenciamento da construção dos galpões no local.',
    mainImage: 'https://r2m.com.br/wp-content/themes/r2m/img/card_cap/anhanguera107.jpg',
    gallery: [
      'https://r2m.com.br/wp-content/themes/r2m/img/card_cap/anhanguera107.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/1.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/2.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/3.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/4.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/5.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/6.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/7.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/8.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/9.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/10.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/11.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/12.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/13.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/14.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/15.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/16.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/17.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/18.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/19.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/20.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/21.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/22.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/23.jpg',
      'https://r2m.com.br/wp-content/themes/r2m/img/anhaguera_107/24.jpg'
    ],
    features: [
      'Terraplenagem',
      'Drenagem',
      'Galpões Logísticos',
      'Rodovia Anhanguera',
      'Gerenciamento de Construção'
    ],
    highlights: [
      {
        title: 'Localização Estratégica',
        description: 'Km 107 da Rodovia Anhanguera em Sumaré'
      },
      {
        title: 'Condomínio Logístico',
        description: 'Infraestrutura completa para operações logísticas'
      },
      {
        title: 'Grande Porte',
        description: 'Área de 276.275,94 m² com galpões construídos'
      }
    ],
    specifications: [
      { label: 'Área Total', value: '276.275,94 m²' },
      { label: 'Tipo', value: 'Condomínio Logístico' },
      { label: 'Localização', value: 'Km 107 Rodovia Anhanguera' },
      { label: 'Status', value: '100% Concluído' }
    ]
  }
];
