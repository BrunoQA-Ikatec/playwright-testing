
# 💻 Projeto de Testes com Playwright

Este projeto demonstra o uso do **Playwright** para testes automatizados de uma aplicação web, utilizando o site [TodoMVC (React)](https://todomvc.com/examples/react/dist/) como alvo. O projeto é estruturado para ser limpo e escalável, destacando recursos avançados do Playwright, como Page Object Model, testes multiplataforma, relatórios HTML, capturas de tela, vídeos e testes de acessibilidade.

## 🌜 **Pré-requisitos**
- **Node.js** (Recomendado: versão LTS - https://nodejs.org/)
- **Gerenciador de pacotes**: recomendado ->  `npm` https://docs.npmjs.com/cli/v11/configuring-npm/install)
- **Git** (Para clonar o repositório - https://git-scm.com/)
- **Navegador** moderno (instalado automaticamente pelo Playwright).

---

## 📂 **Estrutura do Projeto**
```
pw-tests/
├── tests/
│   ├── pages/           # Page Object Models
│   ├── specs/           # Arquivos de teste
│   └── fixtures/        # Dados de teste
├── reports/             # Relatórios HTML
├── screenshots/         # Capturas de tela
├── videos/              # Vídeos de execução
├── playwright.config.js # Configuração do Playwright
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ **Instalação**

### 1️⃣ **Clone o repositório:**

   ```sh
   git clone https://github.com/BrunoQA-Ikatec/pw-tests.git
   cd pw-tests
   ```

### 2️⃣ **Instale dependências npm:**

  ```sh
  npm install
  npx playwright install
  ```

### 3️⃣ **Instale o @axe-core/playwright para testes de acessibilidade**

  ```sh
  npm install --save-dev @axe-core/playwright
  ```

### 4️⃣ **(Opcional) Instale dependências do sistema:**

  ```sh
  npx playwright install-deps
  ```

---

## 🚀 Como Executar os Testes


#### 1️⃣ Executar todos os testes:
```sh
npx playwright test
```

#### 2️⃣ Executar em um navegador específico:
```sh
npx playwright test --project=chromium
```

#### 3️⃣ Executar em modo headed (com interface gráfica):
```sh
npx playwright test --headed
```

#### 4️⃣ Gerar e visualizar relatório HTML:
```sh
npx playwright show-report reports/playwright-report
```

---

### 📖 **Exemplos de testes**

- **Funcionais:** Adicionar e completar tarefas, limpar tarefas concluídas.
- **UI:** Verificar título da página e contagem de tarefas.
- **Acessibilidade:** Identificar violações usando axe-core.
- **API:** Interceptar e simular respostas de API.

### 🗃️ **Artefatos Gerados**

- **Relatórios:** Encontrados em reports/html-report/.
- **Capturas de tela:** Salvas em screenshots/ (apenas em falhas).
- **Vídeos:** Salvos em videos/ (apenas em falhas).
- **Rastreamento:** Arquivos de trace disponíveis para depuração.

---

✨ ***Pastas de Relatórios***: *As pastas `playwright-report/` e `test-results/` são criadas automaticamente pelo Playwright ao executar `npx playwright test`. Elas contêm relatórios HTML, traces, capturas de tela e vídeos, e são excluídas do repositório via `.gitignore` para manter o projeto leve.* ✨

---


## 📢 **Dúvidas ou contribuições**
Estou disponível em **bruno.oliveira.ikatec@gmail.com**

🚀 **Vamos juntos pela Qualidade!** 🔥