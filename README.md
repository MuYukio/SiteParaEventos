# Evento Site

## Propósito

Este projeto consiste em um site  para divulgação e gerenciamento de eventos (shows, palestras, congressos). A plataforma permite aos usuários:

* Visualizar eventos em destaque em um carrossel interativo.
* Consultar a lista completa de eventos com detalhes e contagem regressiva.
* Realizar inscrições através de um formulário com validação de CPF e feedback em modal.

## Tecnologias Utilizadas

* **HTML5**: Estrutura semântica das páginas.
* **CSS3**: Estilização responsiva com media queries e design modular.
* **JavaScript **: Comportamentos dinâmicos:

  * Carrossel de eventos.
  * Contagem regressiva para cada evento.
  * Validação de formulário e máscara de CPF.
  * Modal de confirmação de inscrição.

## Funcionalidades Implementadas

1. **Página Inicial (Home)**

   * Carrossel de eventos com navegação automática.
   * Botões de navegação adaptativos para desktop e mobile.
   * Contagem regressiva para cada evento.
2. **Lista de Eventos**

   * Lista vertical com scroll, cards informativos e link para inscrição.
   * Responsividade que ajusta layout e tamanho de imagens em diferentes telas.
3. **Formulário de Inscrição**

   * Campos: Nome, Email, CPF e seleção de evento.
   * Máscara dinâmica para CPF (formato `000.000.000-00`).
   * Validação de CPF e verificação de preenchimento.
   * Modal de confirmação customizado.

## Demonstração

Acesse a versão publicada em GitHub Pages:

https://github.com/MuYukio/SiteParaEventos

---

### Como Executar Localmente

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/evento-site.git
   ```
2. Acesse a pasta do projeto:

   ```bash
   cd evento-site
   ```
3. Abra `index.html` no navegador ou use um servidor local:

   ```bash
   python -m http.server 8000
   ```

---

## Autor

Desenvolvido por Murilo Yukio.
