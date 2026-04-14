import { getLocalImagePath } from './imageMapping';

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
  // TEMPORARIAMENTE REMOVIDO - Vistas Joanópolis
  // Para reativar, descomentar o bloco abaixo
  /*
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
  */
  {
    id: 1,
    slug: 'esplanada-jau',
    name: 'Esplanada Jaú',
    status: 'Em Obras',
    location: 'Jaú, SP',
    category: 'Residencial',
    description: 'Espaços exclusivos pensados para você. Ambientes integrados com lazer completo.',
    longDescription: 'O Esplanada Jaú é um empreendimento residencial que oferece espaços exclusivos pensados para você e sua família. Com ambientes amplos e integrados, o projeto conta com área de lazer completa, incluindo coworking, academia, piscina, churrasqueira, quadra de esportes e elevador. Um empreendimento moderno que proporciona conforto, segurança e qualidade de vida.',
    mainImage: '/RB2_Esplanada_Fachada_R02.jpg?v=1',
    gallery: [
      '/RB2_Esplanada_Fachada_R02.jpg?v=1',
      '/projects/galeria_decorado1.webp',
      '/projects/galeria_decorado2.webp',
      '/projects/galeria_decorado3.webp',
      '/projects/galeria_decorado4.webp',
      '/projects/galeria_decorado5.webp',
      '/projects/exclusivos_living.webp',
      '/projects/galeria2_1.webp',
      '/projects/galeria2_2.webp',
      '/projects/galeria2_3.webp',
      '/projects/galeria2_4.webp',
      '/projects/galeria2_5.webp',
      '/projects/galeria2_6.webp',
      '/projects/galeria2_7.webp',
      '/projects/galeria2_8.webp',
      '/projects/galeria2_9.webp',
      '/projects/galeria2_10.webp',
      '/projects/galeria2_11.webp',
      '/projects/galeria2_12.webp',
      '/projects/galeria2_13.webp',
      '/projects/plantas_tipo_01.webp',
      '/projects/plantas_tipo_02.webp',
      '/projects/plantas_tipo_03.webp'
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
    logo: '/projects/logo_esplanada.png'
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
    mainImage: '/projects/DJI_0600_JPG.jpg',
    gallery: [
      '/projects/DJI_0600_JPG.jpg',
      '/projects/20230904_110937.jpg',
      '/projects/20230829_105652.jpg',
      '/projects/DJI_0627_JPG.jpg',
      '/projects/eb9c0e_c4f94fae7f844eeebd2eef929c533c6c_mv2.jpg'
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
    logo: '/logos/image.png'
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
    mainImage: '/projects/1-_Viverdi/viverdi_new_1.jpg',
    gallery: [
      '/projects/1-_Viverdi/viverdi_new_1.jpg',
      '/projects/1-_Viverdi/viverdi_new_2.jpg',
      '/projects/1-_Viverdi/viverdi_new_3.jpg',
      '/projects/1-_Viverdi/viverdi_new_4.jpg',
      '/projects/1-_Viverdi/viverdi_new_5.jpg',
      '/projects/1-_Viverdi/viverdi_new_6.jpg',
      '/projects/1-_Viverdi/viverdi_new_7.jpg',
      '/projects/1-_Viverdi/viverdi_new_8.jpg',
      '/projects/viverdi.jpg',
      '/projects/viverdi_render1.jpg',
      '/projects/viverdi_render2.jpg',
      '/projects/viverdi_render3.jpg',
      '/projects/viverdi_render4.jpg',
      '/projects/viverdi_render5.jpg',
      '/projects/viverdi_render6.jpg',
      '/projects/viverdi_render7.jpg',
      '/projects/viverdi_render8.jpg',
      '/projects/viverdi_render9.jpg',
      '/projects/viverdi_obras_1.jpg',
      '/projects/viverdi_obras_2.jpg',
      '/projects/viverdi_obras_3.jpg',
      '/projects/viverdi_obras_4.jpg',
      '/projects/viverdi_obras_5.jpg',
      '/projects/viverdi_obras_6.jpg',
      '/projects/viverdi_obras_7.jpg',
      '/projects/viverdi_obras_8.jpg',
      '/projects/viverdi_obras_9.jpg',
      '/projects/viverdi_obras_10.jpg',
      '/projects/viverdi_obras_11.jpg',
      '/projects/viverdi_obras_12.jpg',
      '/projects/viverdi_obras_13.jpg',
      '/projects/viverdi_obras_14.jpg',
      '/projects/viverdi_obras_15.jpg',
      '/projects/viverdi_obras_16.jpg',
      '/projects/viverdi_obras_17.jpg',
      '/projects/viverdi_obras_18.jpg',
      '/projects/viverdi_obras_19.jpg',
      '/projects/viverdi_obras_20.jpg',
      '/projects/viverdi_obras_21.jpg',
      '/projects/viverdi_obras_22.jpg',
      '/projects/viverdi_obras_23.jpg',
      '/projects/viverdi_obras_24.jpg',
      '/projects/viverdi_obras_25.jpg',
      '/projects/viverdi_obras_26.jpg',
      '/projects/viverdi_obras_27.jpg',
      '/projects/viverdi_obras_28.jpg',
      '/projects/viverdi_obras_29.jpg'
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
    logo: '/projects/logoviverdi.png'
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
    mainImage: '/projects/IMG_2659.JPG',
    gallery: [
      '/projects/IMG_2659.JPG',
      '/projects/alphaville_obras_8.JPG',
      '/projects/alphaville_1.jpg',
      '/projects/alphaville_2.jpg',
      '/projects/alphaville_3.jpg',
      '/projects/alphaville_4.jpg',
      '/projects/alphaville_obras_1.JPG',
      '/projects/alphaville_obras_2.JPG',
      '/projects/alphaville_obras_3.JPG',
      '/projects/alphaville_obras_4.JPG',
      '/projects/alphaville_obras_5.JPG',
      '/projects/alphaville_obras_6.JPG',
      '/projects/alphaville_obras_7.JPG',
      '/projects/alphaville_obras_9.JPG',
      '/projects/alphaville_obras_10.JPG',
      '/projects/alphaville_obras_11.JPG',
      '/projects/alphaville_obras_12.JPG',
      '/projects/alphaville_obras_13.JPG',
      '/projects/alphaville_obras_14.JPG',
      '/projects/alphaville_obras_15.JPG',
      '/projects/alphaville_obras_16.JPG'
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
    mainImage: '/projects/card_cap_santajoana.JPG',
    gallery: [
      '/projects/card_cap_santajoana.JPG',
      '/projects/santa-joana_1.JPG',
      '/projects/santa-joana_2.JPG',
      '/projects/santa-joana_3.JPG',
      '/projects/santa-joana_4.JPG',
      '/projects/santa-joana_5.JPG',
      '/projects/santa-joana_6.JPG',
      '/projects/santa-joana_7.JPG',
      '/projects/santa-joana_8.JPG',
      '/projects/santa-joana_9.JPG',
      '/projects/santa-joana_10.JPG',
      '/projects/santa-joana_11.JPG',
      '/projects/santa-joana_12.JPG',
      '/projects/santa-joana_13.JPG',
      '/projects/santa-joana_14.JPG',
      '/projects/santa-joana_15.JPG',
      '/projects/santa-joana_16.JPG',
      '/projects/santa-joana_17.JPG'
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
    mainImage: '/projects/card_cap_saofernando.jpg',
    gallery: [
      '/projects/card_cap_saofernando.jpg',
      '/projects/sao-fernando_2.jpg',
      '/projects/sao-fernando_3.jpg',
      '/projects/sao-fernando_4.jpg',
      '/projects/sao-fernando_5.jpg',
      '/projects/sao-fernando_6.jpg',
      '/projects/sao-fernando_7.jpg',
      '/projects/sao-fernando_8.jpg',
      '/projects/sao-fernando_9.jpg',
      '/projects/sao-fernando_10.jpg',
      '/projects/sao-fernando_11.jpg',
      '/projects/sao-fernando_12.jpg',
      '/projects/sao-fernando_13.jpg',
      '/projects/sao-fernando_14.jpg',
      '/projects/sao-fernando_15.jpg',
      '/projects/sao-fernando_16.jpg',
      '/projects/sao-fernando_17.jpg',
      '/projects/sao-fernando_18.jpg',
      '/projects/sao-fernando_19.jpg',
      '/projects/sao-fernando_20.jpg',
      '/projects/sao-fernando_21.jpg',
      '/projects/sao-fernando_22.jpg',
      '/projects/sao-fernando_23.jpg',
      '/projects/sao-fernando_24.jpg',
      '/projects/sao-fernando_25.jpg',
      '/projects/sao-fernando_26.jpg',
      '/projects/sao-fernando_27.jpg',
      '/projects/sao-fernando_28.jpg'
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
    mainImage: '/projects/gessy_2.jpg',
    gallery: [
      '/projects/gessy_2.jpg',
      '/projects/gessy_1.jpg',
      '/projects/gessy_3.jpg',
      '/projects/gessy_4.jpg',
      '/projects/gessy_5.jpg',
      '/projects/gessy_6.jpg',
      '/projects/gessy_7.jpg',
      '/projects/gessy_8.jpg',
      '/projects/gessy_9.jpg',
      '/projects/gessy_10.jpg',
      '/projects/gessy_11.jpg',
      '/projects/gessy_12.jpg',
      '/projects/gessy_13.jpg',
      '/projects/gessy_14.jpg'
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
    mainImage: '/projects/card_cap_parqueecologico.JPG',
    gallery: [
      '/projects/card_cap_parqueecologico.JPG',
      '/projects/parque_ecologico_1.JPG',
      '/projects/parque_ecologico_2.JPG',
      '/projects/parque_ecologico_3.JPG',
      '/projects/parque_ecologico_4.JPG',
      '/projects/parque_ecologico_5.JPG',
      '/projects/parque_ecologico_6.JPG',
      '/projects/parque_ecologico_7.JPG',
      '/projects/parque_ecologico_8.JPG',
      '/projects/parque_ecologico_9.JPG',
      '/projects/parque_ecologico_10.JPG',
      '/projects/parque_ecologico_11.JPG',
      '/projects/parque_ecologico_12.JPG'
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
    mainImage: '/projects/card_cap_bellaalianca.jpg',
    gallery: [
      '/projects/card_cap_bellaalianca.jpg',
      '/projects/bela-alianca_obras_1.jpg',
      '/projects/bela-alianca_obras_2.jpg',
      '/projects/bela-alianca_obras_3.jpg',
      '/projects/bela-alianca_obras_4.jpg'
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
    logo: '/projects/bela-alianca_Logo.png'
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
    mainImage: '/projects/viracopos_16.jpg',
    gallery: [
      '/projects/viracopos_16.jpg',
      '/projects/viracopos_2.jpg',
      '/projects/viracopos_3.jpg',
      '/projects/viracopos_4.jpg',
      '/projects/viracopos_5.jpg',
      '/projects/viracopos_6.jpg',
      '/projects/viracopos_7.jpg',
      '/projects/viracopos_8.jpg',
      '/projects/viracopos_9.jpg',
      '/projects/viracopos_10.jpg',
      '/projects/viracopos_11.jpg',
      '/projects/viracopos_12.jpg',
      '/projects/viracopos_13.jpg',
      '/projects/viracopos_14.jpg',
      '/projects/viracopos_15.jpg'
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
    mainImage: '/projects/card_cap_manoelafonsoferreira.JPG',
    gallery: [
      '/projects/card_cap_manoelafonsoferreira.JPG',
      '/projects/av._manoel_afonso_ferreira_1.JPG',
      '/projects/av._manoel_afonso_ferreira_2.JPG',
      '/projects/av._manoel_afonso_ferreira_3.JPG',
      '/projects/av._manoel_afonso_ferreira_4.JPG',
      '/projects/av._manoel_afonso_ferreira_5.JPG',
      '/projects/av._manoel_afonso_ferreira_6.JPG',
      '/projects/av._manoel_afonso_ferreira_7.JPG',
      '/projects/av._manoel_afonso_ferreira_8.JPG',
      '/projects/av._manoel_afonso_ferreira_9.JPG',
      '/projects/av._manoel_afonso_ferreira_10.JPG',
      '/projects/av._manoel_afonso_ferreira_11.JPG',
      '/projects/av._manoel_afonso_ferreira_12.JPG',
      '/projects/av._manoel_afonso_ferreira_13.JPG',
      '/projects/av._manoel_afonso_ferreira_14.JPG',
      '/projects/av._manoel_afonso_ferreira_15.JPG',
      '/projects/av._manoel_afonso_ferreira_16.JPG',
      '/projects/av._manoel_afonso_ferreira_17.JPG',
      '/projects/av._manoel_afonso_ferreira_18.JPG',
      '/projects/av._manoel_afonso_ferreira_19.JPG',
      '/projects/av._manoel_afonso_ferreira_20.JPG',
      '/projects/av._manoel_afonso_ferreira_21.JPG',
      '/projects/av._manoel_afonso_ferreira_22.JPG',
      '/projects/av._manoel_afonso_ferreira_23.JPG',
      '/projects/av._manoel_afonso_ferreira_24.JPG',
      '/projects/av._manoel_afonso_ferreira_25.JPG'
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
    mainImage: '/projects/card_cap_anhanguera107.jpg',
    gallery: [
      '/projects/card_cap_anhanguera107.jpg',
      '/projects/anhaguera_107_1.jpg',
      '/projects/anhaguera_107_2.jpg',
      '/projects/anhaguera_107_3.jpg',
      '/projects/anhaguera_107_4.jpg',
      '/projects/anhaguera_107_5.jpg',
      '/projects/anhaguera_107_6.jpg',
      '/projects/anhaguera_107_7.jpg',
      '/projects/anhaguera_107_8.jpg',
      '/projects/anhaguera_107_9.jpg',
      '/projects/anhaguera_107_10.jpg',
      '/projects/anhaguera_107_11.jpg',
      '/projects/anhaguera_107_12.jpg',
      '/projects/anhaguera_107_13.jpg',
      '/projects/anhaguera_107_14.jpg',
      '/projects/anhaguera_107_15.jpg',
      '/projects/anhaguera_107_16.jpg',
      '/projects/anhaguera_107_17.jpg',
      '/projects/anhaguera_107_18.jpg',
      '/projects/anhaguera_107_19.jpg',
      '/projects/anhaguera_107_20.jpg',
      '/projects/anhaguera_107_21.jpg',
      '/projects/anhaguera_107_22.jpg',
      '/projects/anhaguera_107_23.jpg',
      '/projects/anhaguera_107_24.jpg'
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
