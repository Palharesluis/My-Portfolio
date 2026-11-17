# Portfólio — Luís Fernando Palhares

Currículo interativo em português, com tema branco e azul, ilustração de PCB e layout responsivo.

## Executar localmente

Com Node.js 18 ou superior, sem instalar dependências:

```sh
npm run dev
```

Abra http://localhost:3000. Para verificar a sintaxe, execute `npm run check`.

## Conteúdo

- Seções separadas por botões: Sobre mim, Experiência, Projetos, Competências e Formação.
- Categorias técnicas com botões próprios e suporte a navegação por teclado.
- Links para GitHub, LinkedIn, e-mail e telefone.
- Currículo próprio para impressão: clique em **Currículo em PDF** e selecione **Salvar como PDF** no navegador.
- O parâmetro `?secao=skills`, por exemplo, abre diretamente uma categoria.

Os arquivos ficam em `dist`: `index.html` (conteúdo), `styles.css` (visual) e `app.js` (interações, competências e currículo para impressão). As imagens das placas são ilustrações conceituais em SVG/CSS, não fotografias dos projetos. As fontes Google Fonts têm alternativas locais caso a conexão esteja indisponível.

O site é estático; não coleta dados nem precisa de serviços externos para suas interações.

## Publicação no GitHub Pages

Endereço previsto após a publicação: https://palharesluis.github.io/My-Portfolio/

1. Envie os arquivos para a branch `main` de `Palharesluis/My-Portfolio`.
2. Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**.
3. Acompanhe **Actions → Publicar currículo no GitHub Pages**. Caso o envio tenha ocorrido antes de habilitar Pages, use **Run workflow** para publicar.

O workflow `.github/workflows/pages.yml` publica somente `dist`, sem depender de hospedagem do ChatGPT. Novos envios para `main` atualizam o site automaticamente. Os caminhos dos arquivos são relativos e funcionam no subdiretório `/My-Portfolio/`.
