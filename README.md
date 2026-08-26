**Learning about S.O.L.I.D. principles with Typescript.**\
**Aprendendo sobre princípos S.O.L.I.D. com Typescript.**\
(Aulas da Udemy 341 a 352 com o professor [Luiz Otávio Miranda](https://github.com/luizomf). Pastas separadas por princípio e partindo do mesmo código-base *legacy*.)

# Comandos
## Baixar os módulos de acordo com o arquivo `package.json` : ``npm i``

## Executar o webpack: 
``npx build:frontend`` (renomeado) \
`npx webpack -w` (original) \
(deve aparecer `'successfully'` e o webpack vai "olhar" o código escrito em tempo real)

## Compilar o backend para a pasta ``dist``: 
``npx build:backend`` (renamed)\
``npx tsc`` (original)

**Os comandos devem ser executados na pasta raiz.**\
**Modificar arquivo `package.json` para alterar dependências e arquivo `.ts` executado como main.**


## Vantagens e Desvantagens do **S.O.L.I.D.**:

### Vantagens:
- Código modular
- Código reutilizável (**D.R.Y.** Don't repeat yourself)
- Código testável, baixo acoplamento
- Alta coerência/coesão
- Código expansível
- Separation of concerns (Separação de conceitos)
- Fácil manutenção

### Desvantagens:
- Complexidade
- Quantidade de código digitado
- Tempo de desenvolvimento aumenta muito\

Tenha cuidado com: **YAGNI**, (You aren't gonna need it), **KISS** (Keep it simple, stupid!)\
Considere o **MVP**: Minimun Viable Product - Produto Minimo Viável e depois refatorar o código.