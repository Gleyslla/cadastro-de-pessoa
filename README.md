
# Cadastro de Pessoa

Este projeto consiste em um formulário web completo de cadastro de pessoas, criado com HTML, CSS e JavaScript puro. Ideal para treinar e demonstrar testes manuais e automatizados.

## 🚀 Funcionalidades

- Cadastro de pessoas com validação
- Máscaras e verificações (CPF, telefone, CEP)
- Mensagens com alertas (SweetAlert)
- Edição e exclusão de cadastros
- Lista de pessoas atualizada em tempo real
- Layout responsivo

## ✅ Quadro de Casos de Teste

| Campo             | Validação                                   | Alerta esperado                          |
|------------------|---------------------------------------------|------------------------------------------|
| Nome completo     | Mín. 3 letras, sem números/símbolos        | Campo obrigatório / Nome inválido        |
| Data de nascimento| Não pode ser futura                        | Campo obrigatório / Data inválida        |
| CPF               | 11 dígitos numéricos                       | CPF inválido                             |
| E-mail            | Formato válido                             | E-mail inválido                          |
| Telefone          | Apenas números com DDD                     | Telefone inválido                        |
| Gênero            | Seleção obrigatória                        | Campo obrigatório                        |
| Estado Civil      | Seleção obrigatória                        | Campo obrigatório                        |
| Endereço completo | Todos os campos obrigatórios               | Campo obrigatório                        |
| CEP               | 8 dígitos numéricos                        | CEP inválido                             |

## 💡 Instruções de uso

1. Clone o projeto ou baixe o ZIP
2. Abra o `index.html` em um navegador moderno
3. Preencha os campos e clique em **Cadastrar**
4. Teste os casos de validação descritos

## 👩‍💻 Tecnologias usadas

- HTML5
- CSS3 (sem frameworks)
- JavaScript puro
- SweetAlert2

---

Sinta-se à vontade para contribuir ou utilizar este projeto para fins de estudo e demonstração de QA!
