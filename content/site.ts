/**
 * Fonte única de verdade do conteúdo da landing page.
 *
 * Nada de texto, preço, telefone ou endereço deve ser escrito direto num componente:
 * tudo passa por aqui. Assim o studio atualiza a página sem tocar em JSX.
 *
 * Fontes: site Canva atual (zallapersonaltrainer.my.canva.site), arte de planos
 * (fotos/planos.jpg) e Guia de marca v1.0. Os campos ainda sem confirmação da
 * cliente estão marcados com `TODO(dados-reais)`.
 */

import type { IconName } from "@/components/ui/icons";

/* ------------------------------------------------------------------ negócio */

export const business = {
  name: "Studio Zalla",
  legalName: "Studio Zalla Personal Trainer",
  tagline: "Personal trainer em Santo Antônio de Posse. Treino individual ou em turmas de até 4 pessoas, com método e acompanhamento de perto.",
  trainer: "Bárbara Zalla Fazzioli",
  cref: "CREF 091687-G/SP",
  /** TODO(dados-reais): e-mail de contato. Enquanto for null, o site só oferece o WhatsApp. */
  email: null as string | null,
} as const;

/**
 * Origem canônica do site — base de `metadataBase`, do JSON-LD e do sitemap.
 *
 * Precisa ser o domínio onde o site REALMENTE está: o WhatsApp busca a
 * `og:image` por URL absoluta, e um domínio que ainda não serve o arquivo zera
 * o preview. `VERCEL_PROJECT_PRODUCTION_URL` entrega o domínio de produção do
 * projeto (custom domain quando houver, senão o *.vercel.app). Para forçar
 * outro valor, defina NEXT_PUBLIC_SITE_URL nas env vars do projeto.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/+$/, "");

export const whatsappNumber = "5519998749809";

export const phoneDisplay = "(19) 99874-9809";

/** TODO(dados-reais): confirmar o perfil — o guia de marca usa @studiozalla nos modelos de post. */
export const instagram = {
  handle: "@zallapersonaltrainer",
  url: "https://instagram.com/zallapersonaltrainer",
} as const;

/* ---------------------------------------------------------------- endereço */

export const address = {
  street: "Rua Eduardo Selingardi, 860",
  city: "Santo Antônio de Posse",
  state: "SP",
  postalCode: "13830-118",
  /**
   * TODO(dados-reais): coordenadas exatas. Fica `null` de propósito: um par
   * chutado apontaria o pin para o quarteirão errado no JSON-LD. Enquanto for
   * null, o schema sai sem `geo` e o Google se vira pelo endereço completo.
   */
  geo: null as { lat: number; lng: number } | null,
} as const;

const mapsQuery = encodeURIComponent(`${address.street}, ${address.city} - ${address.state}, ${address.postalCode}`);

export const maps = {
  /** Embed sem chave de API — não requer billing e aceita loading="lazy". */
  embedUrl: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  /** Abre o app nativo no celular, o site no desktop. */
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
} as const;

/* ---------------------------------------------------------------- horários */

type OpeningHours = {
  label: string;
  value: string;
  /** Alimenta o JSON-LD; `null` para dia fechado. */
  schema: readonly { days: readonly string[]; opens: string; closes: string }[] | null;
};

/**
 * TODO(dados-reais): horários de funcionamento. Enquanto a lista estiver vazia,
 * a seção de localização mostra `hoursNote` e o JSON-LD sai sem horário.
 */
export const openingHours: readonly OpeningHours[] = [];

/** Todo treino é com horário agendado — vale com ou sem a grade acima. */
export const hoursNote = "Treinos com horário agendado. Consulte os horários disponíveis pelo WhatsApp.";

/** Resumo curto para o rodapé. */
export const hoursSummary = "Horário agendado pelo WhatsApp";

/* -------------------------------------------------------------------- SEO */

/**
 * `share` é separado de `page`: o Google mostra ~155 caracteres de descrição,
 * o WhatsApp corta perto de 80. Por isso o texto de compartilhamento é mais
 * curto e coloca a oferta logo no começo.
 */
export const seo = {
  /** Título ≤ 60 e descrição ≤ 155 caracteres: o que o Google mostra sem cortar. */
  page: {
    title: "Studio Zalla | Personal Trainer em Santo Antônio de Posse",
    description:
      "Personal trainer em Santo Antônio de Posse/SP: treino individual ou em turmas de até 4, com Bárbara Zalla (CREF 091687-G/SP). Aula experimental grátis.",
  },
  share: {
    title: "Studio Zalla | Personal Trainer em Santo Antônio de Posse",
    description: "Treino com método, individual ou em turmas de até 4. Aula experimental grátis.",
    imageAlt:
      "Studio Zalla, personal trainer em Santo Antônio de Posse: Treino com método, individual ou em turmas de até 4 pessoas. Aula experimental grátis.",
  },
  keywords: [
    "personal trainer Santo Antônio de Posse",
    "personal trainer em Santo Antônio de Posse",
    "studio de personal trainer",
    "academia Santo Antônio de Posse",
    "musculação Santo Antônio de Posse",
    "emagrecimento",
    "condicionamento físico",
    "treino em grupo",
    "treino personalizado",
    "Bárbara Zalla",
  ],
  /** Faixa de preço dos planos, para o JSON-LD. */
  priceRange: "R$ 220 – R$ 660",
} as const;

/* ------------------------------------------------------------------- Hero */

export const hero = {
  eyebrow: "Personal trainer · Santo Antônio de Posse",
  /** "TREINO / COM MÉTODO" — a chamada do guia de marca; `hot` sai em laranja. */
  headline: { plain: "Treino", hot: "com método" },
  sub: "Aqui o foco é você, sua evolução e seus resultados. Treino individual ou em turmas de até 4 pessoas, com acompanhamento de perto do primeiro ao último exercício.",
  ctaPrimary: "Fale no WhatsApp",
  ctaSecondary: "Aula experimental grátis",
  note: "Sem taxa de matrícula",
} as const;

/* ------------------------------------------------------------------ Stats */

/**
 * Só fatos verificáveis — nada de número inventado.
 * `wide` marca o valor em palavra, que precisa de corpo menor para caber.
 */
export const stats: readonly { value: string; label: string; wide?: boolean }[] = [
  { value: "2009", label: "Formada em Educação Física" },
  { value: "4", label: "Alunos por horário, no máximo" },
  { value: "2–5x", label: "Treinos por semana, você escolhe" },
  { value: "Zero", label: "Taxa de matrícula" },
];

/* -------------------------------------------------------------- Manifesto */

export const manifesto = {
  eyebrow: "Bem-vindo ao Studio Zalla",
  line1: { before: "Prepare-se para", break: "descobrir a sua ", hot: "melhor versão" },
  line2: "Um espaço criado para impulsionar a sua transformação — física, mental e emocional.",
  caption: "Bárbara Zalla",
} as const;

/* -------------------------------------------------------------- Benefícios */

/**
 * Texto educativo sobre exercício e musculação. Sem promessa de resultado nem
 * linguagem médica: benefício geral, comprovado, dito de forma simples.
 */
export const benefits = {
  eyebrow: "Por que treinar",
  title: "O que a musculação faz por você",
  text: "Treinar força não é só estética. É o que mantém o corpo capaz, o metabolismo ativo e a cabeça no lugar — em qualquer idade.",
  items: [
    {
      icon: "flame",
      title: "Emagrecimento com saúde",
      text: "A musculação aumenta a massa magra, e músculo gasta energia até em repouso. Com a alimentação certa, é o caminho mais consistente para perder gordura sem perder forma.",
    },
    {
      icon: "barbell",
      title: "Força e massa muscular",
      text: "Ficar mais forte facilita tudo no dia a dia e preserva o músculo que o corpo perde naturalmente com o passar dos anos.",
    },
    {
      icon: "pulse",
      title: "Condicionamento",
      text: "Coração e pulmão trabalhando melhor: mais fôlego no treino e mais disposição no resto do dia.",
    },
    {
      icon: "body",
      title: "Ossos, articulações e postura",
      text: "O treino de força estimula ossos mais densos, fortalece a musculatura que protege as articulações e ajuda na postura.",
    },
    {
      icon: "drop",
      title: "Saúde metabólica",
      text: "Músculo ativo melhora o uso da glicose pelo corpo. Exercício regular é aliado no controle do açúcar no sangue, do colesterol e da pressão.",
    },
    {
      icon: "smile",
      title: "Mente, sono e autoestima",
      text: "Treinar alivia o estresse, melhora o sono e devolve a confiança de ver o próprio corpo responder.",
    },
  ] satisfies readonly { icon: IconName; title: string; text: string }[],
  note: "Tem alguma condição de saúde? Conte na primeira conversa: o treino é montado a partir do seu histórico, e o acompanhamento médico continua valendo.",
} as const;

/* ------------------------------------------------------------- Diferenciais */

/** Os seis ganhos da arte de planos ("O que você ganha aqui"). */
export const differentials = {
  eyebrow: "Diferenciais",
  title: ["O que você", "ganha aqui"],
  body: "Método personalizado, orientação profissional e motivação constante. Tudo o que você precisa para conquistar uma vida mais saudável, ativa e equilibrada.",
  photoTag: "Acompanhamento de perto",
  pillars: [
    { icon: "clipboard", title: "Plano de treino personalizado", text: "Montado para o seu objetivo, o seu nível e a sua rotina. Nada de planilha genérica." },
    { icon: "trend", title: "Acompanhamento profissional", text: "Correção de execução, ajuste de carga e atenção em cada série." },
    { icon: "apple", title: "Orientações para resultados reais", text: "Hábitos que somam ao treino, porque o resultado também se constrói fora do studio." },
    { icon: "shield", title: "Segurança e eficiência", text: "Técnica correta e progressão no seu ritmo, para evoluir sem se machucar." },
    { icon: "barbell", title: "Evolução constante", text: "O treino muda conforme você avança, para o corpo continuar respondendo." },
    { icon: "target", title: "Disciplina, foco e consistência", text: "Horário marcado e alguém esperando por você: o compromisso que faz o treino virar hábito." },
  ] satisfies readonly { icon: IconName; title: string; text: string }[],
} as const;

/* ----------------------------------------------------------------- Planos */

type Plan = {
  id: string;
  /** Linha pequena acima do nome, como na arte ("Atendimento" / "Treinamento em"). */
  kicker: string;
  name: string;
  icon: IconName;
  tagline: string;
  tiers: readonly { freq: string; price: string }[];
  /** TODO(dados-reais): confirmar se os valores são mensais. */
  period: string;
  badge?: string;
  note: string;
  /** Card que ocupa a largura toda, abaixo dos dois principais. */
  wide?: boolean;
};

export const plansSection = {
  eyebrow: "Planos",
  title: "Escolha o seu ritmo",
  text: "Atendimento individual ou em grupo, de 2 a 5 treinos por semana. Sem taxa de matrícula. Toque no valor para falar com a Bárbara no WhatsApp.",
} as const;

export const plans: readonly Plan[] = [
  {
    id: "individual",
    kicker: "Atendimento",
    name: "Individual",
    icon: "person",
    tagline: "Treino exclusivo · foco total em você",
    tiers: [
      { freq: "2x", price: "360" },
      { freq: "3x", price: "460" },
      { freq: "4x", price: "560" },
      { freq: "5x", price: "660" },
    ],
    period: "/mês",
    badge: "Mais indicado",
    note: "Para quem busca resultados acelerados.",
  },
  {
    id: "grupo",
    kicker: "Treinamento em",
    name: "Grupo",
    icon: "group",
    tagline: "Motivação · energia · resultados · até 4 pessoas",
    tiers: [
      { freq: "2x", price: "220" },
      { freq: "3x", price: "260" },
      { freq: "4x", price: "360" },
      { freq: "5x", price: "460" },
    ],
    period: "/mês",
    badge: "Melhor custo-benefício",
    note: "Para quem quer evoluir gastando menos.",
  },
  {
    id: "trimestral",
    kicker: "Plano",
    name: "Trimestral",
    icon: "calendar",
    tagline: "Musculação com horário agendado",
    /** TODO(dados-reais): R$220 é o valor mensal ou o total do trimestre? */
    tiers: [{ freq: "3x", price: "220" }],
    period: "",
    note: "Em até 3x no cartão de crédito ou no Pix. Sem taxa de matrícula.",
    wide: true,
  },
];

/* ---------------------------------------------------------------- O studio */

export const studio = {
  eyebrow: "O studio",
  title: "Treino de perto, em turma pequena",
  items: [
    "No máximo 4 alunos por horário",
    "Horário agendado: você chega e o seu treino já está pronto",
    "Atendimento individual ou em grupo",
    "Do iniciante ao avançado, cada um no seu nível",
    "Sem taxa de matrícula",
  ],
} as const;

/* ----------------------------------------------------------- Sobre a Bárbara */

export const coach = {
  eyebrow: "Quem treina você",
  name: "Bárbara Zalla",
  fullName: business.trainer,
  role: `Personal trainer · ${business.cref}`,
  /** TODO(dados-reais): confirmar com a Bárbara a menção ao diabetes tipo 1 (já está no site Canva). */
  bio: [
    "Empreendedora e personal trainer desde 2009, a Bárbara vive na prática o que ensina: é atleta de fisiculturismo e diabética tipo 1.",
    "Ela sabe que disciplina e método fazem o corpo responder em qualquer condição — e é essa experiência que leva para cada aluno do studio.",
  ],
  credentials: [
    "Educação Física — Licenciatura e Bacharelado (2009)",
    "Pós-graduação em Nutrição Esportiva",
    "Treinamento de alto rendimento",
    "Atleta de fisiculturismo",
  ],
} as const;

/* ------------------------------------------------------------ Depoimentos */

type Review = { stars: number; text: string; author: string; since: string };

/**
 * TODO(dados-reais): depoimentos reais, com autorização de uso do nome.
 * Enquanto a lista estiver vazia, a seção não aparece — nada de depoimento inventado.
 */
export const reviews: readonly Review[] = [];

export const reviewsSection = {
  eyebrow: "Quem treina, indica",
  title: "Histórias de quem mudou com a gente",
} as const;

/* -------------------------------------------- Mensagens de WhatsApp por origem */

export const waMessages = {
  header: "Olá! Vim pelo site e quero conhecer o Studio Zalla.",
  hero: "Olá! Vim pelo site e quero conhecer o Studio Zalla.",
  float: "Olá! Vim pelo site e quero conhecer o Studio Zalla.",
  footer: "Olá! Vim pelo site do Studio Zalla.",
  location: "Olá! Quero saber como chegar no Studio Zalla.",
  trial: "Olá! Quero agendar minha aula experimental gratuita no Studio Zalla.",
  finalCta: "Olá! Quero começar a treinar no Studio Zalla.",
  /** Mensagem contextual por plano e frequência — o lead chega já qualificado. */
  plan: (planName: string) => `Olá! Tenho interesse no plano *${planName}*.`,
} as const;

/* ----------------------------------------------------- Aula experimental */

export const trial = {
  eyebrow: "Agende agora",
  title: "Aula experimental gratuita",
  duration: "Grátis · sem compromisso",
  text: "Agende sua aula experimental gratuita e venha viver a experiência do nosso studio.",
  bullets: [
    "Conheça o studio e a Bárbara",
    "Treine com acompanhamento desde o primeiro minuto",
    "Tire suas dúvidas sobre planos e horários",
  ],
  cta: "Agendar pelo WhatsApp",
} as const;

/* -------------------------------------------------------------- Localização */

export const locationSection = {
  eyebrow: "Onde estamos",
  title: "Vem treinar com a gente",
  directions: "Traçar rota",
  ask: "Tirar dúvida",
} as const;

/* ---------------------------------------------------------------- Instagram */

export const instagramSection = {
  eyebrow: "No dia a dia",
  cta: "Seguir no Instagram",
} as const;

/* -------------------------------------------------------------------- FAQ */

/** TODO(dados-reais): confirmar cada resposta com a Bárbara. */
export const faqSection = {
  eyebrow: "Perguntas frequentes",
  title: "Ainda tem dúvida?",
} as const;

export const faq = [
  { q: "Tem taxa de matrícula?", a: "Não. Você paga apenas o plano escolhido." },
  {
    q: "Qual a diferença entre o Individual e o Grupo?",
    a: "No Individual o horário é só seu, com atenção total da Bárbara. No Grupo você treina em turma de até 4 pessoas, com o treino personalizado para cada aluno e um valor menor.",
  },
  {
    q: "Quantas vezes por semana posso treinar?",
    a: "De 2 a 5 vezes, nos dois formatos. O valor muda conforme a frequência — veja a tabela de planos.",
  },
  {
    q: "Nunca treinei. Posso começar?",
    a: "Pode e deve. O treino parte do seu nível atual e evolui no seu ritmo, com técnica e segurança desde o primeiro dia.",
  },
  {
    q: "Como funciona a aula experimental?",
    a: "É gratuita e sem compromisso. Chame no WhatsApp, combine o melhor horário e venha conhecer o studio treinando.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: "Cartão de crédito ou Pix. O plano trimestral pode ser parcelado em até 3x no cartão.",
  },
] as const;

/* -------------------------------------------------------------- CTA final */

export const finalCta = {
  title: { before: "O seu futuro corpo começa com a ", hot: "decisão de hoje" },
  text: "Vagas limitadas por horário. Invista em você: chame no WhatsApp e agende sua aula experimental.",
  button: "Quero começar",
} as const;

/* -------------------------------------------------------------- Navegação */

export const headerCta = "Fale no WhatsApp";

export const navLinks = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#planos", label: "Planos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#localizacao", label: "Localização" },
] as const;

export const footerLinks = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#planos", label: "Planos" },
  { href: "#studio", label: "O studio" },
  { href: "#sobre", label: "Sobre a Bárbara" },
  { href: "#faq", label: "Dúvidas" },
] as const;
