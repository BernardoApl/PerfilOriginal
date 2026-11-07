# Portfólio — Bernardo Augusto

Portfólio em React, TypeScript estrito e Vite, com design responsivo, conteúdo PT-BR/EN-US, tema claro/escuro, repositórios do GitHub, currículo e contato.

## Desenvolvimento

Requer Node.js 22.12+ (ou 20.19+).

```sh
npm ci
npm run dev
```

## Verificação e produção

```sh
npm run typecheck
npm run build
npx playwright test
npm run preview
```

Os testes usam Google Chrome instalado. As chamadas de GitHub e FormSubmit são interceptadas nos testes, sem envio de emails reais. Para outros ambientes, remova `channel: 'chrome'` de `playwright.config.ts` e instale Chromium com `npx playwright install chromium`.

Publique a pasta `dist/` em uma hospedagem estática. O build usa caminhos relativos para funcionar também em subdiretórios. Não abra `index.html` diretamente: execute o servidor Vite.

## Organização

- `src/App.tsx`: composição da página.
- `src/components/`: navegação, seções, projetos, currículo e contato.
- `src/data/content.ts`: dados pessoais e traduções tipadas.
- `src/hooks/usePreference.ts`: preferências persistidas com tolerância a storage indisponível.
- `src/services/github.ts`: integração com validação da resposta da API.
- `src/styles.css`: ponto de entrada dos estilos.
- `src/styles/`: tokens, estilos de cada seção e regras responsivas separados.
- `src/components/projects/`: cartões e controles do carrossel, sem lógica de API.
- `src/components/ui/`: animações compartilhadas e indicador de leitura.
- `src/hooks/useRepositories.ts`: carregamento, cancelamento e nova tentativa do GitHub.
- `src/hooks/useProjectCarousel.ts`: reprodução, visibilidade, pausa, foco e navegação.
- `src/data/technologies.ts`: catálogo dos ícones SVG, importados individualmente.
- `public/`: foto original fornecida, PDFs e favicon.
- `tests/`: testes de navegação, responsividade, preferências e integrações.
- `docs/design-cinematic.png`: direção visual atual em preto e laranja; a implementação preserva os dados reais.

## Integrações

GitHub: consulta repositórios públicos de BernardoApl, exclui forks e mostra até 20 projetos em carrossel contínuo, com arraste, setas e pausa. Erros e limites da API exibem opção de tentar novamente. O loop depende de haver cartões suficientes para preencher a largura; com poucos itens, a navegação permanece disponível sem duplicar links.

## Bibliotecas e movimento

- Embla Carousel React + Auto Scroll 8.6: movimento contínuo dos projetos, arraste e navegação. [Documentação](https://www.embla-carousel.com/docs/v8/plugins/auto-scroll).
- Motion: animações de entrada e indicador de leitura, com recursos carregados em chunk separado via LazyMotion. [Acessibilidade](https://motion.dev/docs/react-accessibility).
- Devicon: oito SVGs das tecnologias, importados como assets locais pelo Vite; não carrega a fonte ou o catálogo completo. [Fonte e licença](https://github.com/devicons/devicon).
- CSS: faixa infinita de ícones com duas cópias visuais; a segunda não é anunciada por leitores de tela.

Os carrosséis não exibem botões de pausar/reproduzir. O carrossel de projetos pausa durante hover, foco e arraste, fora da tela ou com a aba oculta, retomando automaticamente quando essas condições terminam. Após usar as setas, aguarda 1,5 s antes de retomar. A faixa de ícones pausa durante hover/foco. `prefers-reduced-motion` desativa o movimento automático de ambos, preservando setas e ícones estáticos.

Contato: mantém o FormSubmit usado no projeto anterior. O serviço pode exigir ativação do destinatário e suas próprias verificações. O formulário só anuncia sucesso quando a resposta confirma o envio; erros preservam os campos. A entrega real de email não é validada pelos testes locais.

## Conteúdo

Edite textos e contatos em `src/data/content.ts`. Os currículos ficam em `public/CV_main_PT-BR.pdf` e `public/CV_main_EN-US.pdf`. A foto `public/bernardo-profile.png` é o arquivo original `fOTO 1.png` enviado pelo usuário, sem geração ou alteração facial. Sua resolução original é 251 × 203 px; uma versão maior melhora a nitidez em telas grandes.
