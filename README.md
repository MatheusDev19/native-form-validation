# native-form-validation

Uma implementação simples, intuitiva e leve de validação de formulário usando **HTML**, **CSS** e **JavaScript puro**.

O objetivo é criar uma experiência de validação amigável, com mensagens claras de erro, indicação visual dos campos válidos ou inválidos, e um código limpo e fácil de entender.

---

## ✨ Funcionalidades

- ✅ Validação dos campos do formulário:
  - **Nome de usuário:** obrigatório.
  - **Email:** obrigatório e válido.
  - **Senha:** obrigatório, com no mínimo 7 caracteres.
  - **Confirmação de senha:** obrigatório e igual à senha.
- ✅ Feedback visual:
  - Ícones de erro/sucesso.
  - Borda vermelha ou verde.
  - Mensagens claras de erro.
- ✅ Validação no envio do formulário.
- ✅ Código modular e fácil de manter.

---

## 🛠 Tecnologias usadas

- HTML5  
- CSS3 (com variáveis CSS e responsividade)  
- JavaScript (ES6+)

---

## 🚀 Como usar

1. Clone este repositório ou copie os arquivos.
2. Abra o arquivo `index.html` no navegador.
3. Preencha o formulário para testar a validação.

---

## 📁 Estrutura do projeto






- `form.html`: Estrutura do formulário.
- `form.css`: Estilização visual e feedback dos campos.
- `form.js`: Validações e controle de estados.

---

## ✅ Regras de validação

| Campo                | Regras                                 | Mensagens de Erro                                  |
|---------------------|----------------------------------------|---------------------------------------------------|
| Nome de usuário      | Obrigatório                            | "O nome de usuário é obrigatório."                |
| Email                | Obrigatório, formato válido            | "O email é obrigatório." / "Insira um email válido." |
| Senha                | Obrigatório, mínimo 7 caracteres       | "A senha é obrigatória." / "A senha precisa ter no mínimo 7 caracteres." |
| Confirmação de senha | Obrigatório, igual à senha             | "A confirmação de senha é obrigatória." / "As senhas não conferem." |

---

## 🧪 Exemplo de uso (HTML)

```html
<form id="form">
  <div class="form-control">
    <label for="username">Nome de usuário</label>
    <input type="text" id="username" placeholder="Digite seu nome..." />
    <i class="fas fa-exclamation-circle"></i>
    <i class="fas fa-check-circle"></i>
    <small>Mensagem de erro</small>
  </div>

  <!-- Outros campos semelhantes -->

  <button type="submit">Enviar</button>
</form>
