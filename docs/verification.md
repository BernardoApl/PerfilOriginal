# Verificação — design cinematográfico

## Resultado

Build de produção e TypeScript estrito aprovados. Onze testes permanentes passaram. A revisão anterior também verificou a API real do GitHub: 19 repositórios carregados. Nenhum email real enviado. A suíte permanente intercepta integrações para permanecer determinística.

## Ajuste de entrada e retrato — 7 de novembro

As seções agora começam com opacidade zero e deslocamento vertical de 32 px, aparecendo suavemente durante 0,8 s ao entrar na tela. A entrada acontece uma vez; foco pelo teclado e movimento reduzido tornam o conteúdo visível imediatamente. Projetos também usam o componente compartilhado de entrada.

O retrato mantém a proporção original 251:203, sem recorte, com largura máxima menor, borda discreta e moldura laranja deslocada. O arquivo da foto não foi editado. Capturas de 1440 e 390 px foram inspecionadas com `view_image`; testes verificam a proporção, a ausência de recorte, a entrada ao rolar e a permanência da seção visível após sair da tela.

## Estrutura e bibliotecas

- Seções separadas em componentes; estilos divididos por seção e tokens de tema.
- Consulta ao GitHub em `useRepositories`, controle do carrossel em `useProjectCarousel`, cartões em `components/projects`.
- Embla React e Auto Scroll 8.6 para projetos. Motion 14 para revelações e progresso de leitura, com features em chunk separado. Devicon fornece oito SVGs importados individualmente, com licença em `public/licenses/devicon.txt`.
- Faixa de tecnologias em CSS com duas cópias visuais; a segunda está oculta para leitores de tela.

## Comportamentos conferidos

- Projetos avançam continuamente, sem botões de pausa/reprodução. Hover, foco e arraste interrompem temporariamente o movimento, com retomada automática; após navegação manual, a retomada aguarda 1,5 s.
- Mudanças de tamanho preservam reprodução/pausa; controles de próximo/anterior funcionam.
- Faixa de ícones se move, pausa e carrega todos os SVGs.
- Movimento reduzido desativa reprodução automática dos dois carrosséis; controles manuais continuam disponíveis.
- Lista vazia, um único projeto e erro da API exibem estados adequados.
- Idioma, tema, currículo, formulário, menu e foto permanecem funcionais.
- Larguras 320, 390, 768, 1024 e 1440 px sem overflow horizontal nem erros JavaScript.

## Revisão visual

Referência atual: `docs/design-cinematic.png` (a referência anterior está em `docs/design-concept.png`). O Browser integrado retornou “browser access host is unavailable”; a revisão usou Playwright com Chrome. A referência e as capturas finais foram abertas com `view_image`, incluindo desktop 1440 × 1000, celular 390 × 844, projetos reais e páginas completas. O conceito é uma visão completa de página comprimida em 1024 × 1536; a revisão priorizou tamanhos reais de leitura e inclui largura de 1024 nos testes responsivos.

| Ponto       | Comparação e decisão                                                                                                          |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Paleta      | Preto #09090b e laranja #ff8a45; verde removido da identidade. Tema claro preserva laranja.                                   |
| Tipografia  | Títulos condensados em caixa alta; corpo DM Sans. Escala ajustada no celular.                                                 |
| Composição  | Texto à esquerda, foto à direita, enquadramento discreto e luz ao redor do retrato. Empilhamento no celular.                  |
| Foto        | Arquivo original do usuário, sem geração ou alteração facial. Nitidez limitada aos 251 × 203 pixels disponíveis.              |
| Tecnologias | A faixa textual do conceito foi substituída por ícones em movimento, conforme a instrução mais recente.                       |
| Projetos    | Cards tipográficos com iniciais reais, linguagem, descrição e link. Terceiro card parcialmente visível sinaliza continuidade. |
| Seções      | Ordem e dados profissionais preservados; espaçamento, divisores e controles coerentes entre seções.                           |
| Interações  | Pausa, retomada, foco e responsividade conferidos. Corrigida a sincronização dos eventos Embla e a retomada após reInit.      |

A direção visual foi conferida contra o conceito com as adaptações solicitadas. Não é uma cópia pixel a pixel: usa foto e dados reais, mantém textos completos e prévia de PDF sob demanda. Os cards têm mais espaço para descrições reais. Não foram encontrados cortes acidentais, cores verdes remanescentes na identidade ou desalinhamentos relevantes nas capturas finais.

Texto da primeira dobra: nome, descrição profissional e CTAs preservados; texto em caixa alta por CSS. A faixa de nomes foi substituída por ícones. Nenhuma nova conquista, métrica ou afirmação profissional foi adicionada.

## Limites

A entrega de email depende do FormSubmit; não foi testada com envio real. GitHub pode limitar requisições. Com poucos repositórios, Embla desativa loop se não houver conteúdo suficiente para preencher a largura. A hospedagem não foi alterada.
