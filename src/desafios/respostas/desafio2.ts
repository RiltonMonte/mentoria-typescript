enum profissao{
    Atriz,
    Padeiro
}

type pessoa = {
    nome: string,
    idade: number,
    trabalho: profissao
}

let pessoa1: pessoa = {
    nome: "maria",
    idade: 29,
    trabalho: profissao.Atriz
}


let pessoa2: pessoa = {
    nome: "roberto",
    idade: 19,
    trabalho: profissao.Padeiro
}

let pessoa3: pessoa = {
    nome: "laura",
    idade: 32,
    trabalho: profissao.Atriz
}

let pessoa4: pessoa = {
    nome: "carlos",
    idade: 19,
    trabalho: profissao.Padeiro
}