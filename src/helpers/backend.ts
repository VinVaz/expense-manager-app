export interface IExpense {
  id: number,
  descricao: string,
  categoria: string,
  valor: number,
  mes: string,
  dia: string,
}

export function carregaTodasAsDespesas() {
  return fetch(`http://localhost:3001/despesas`)
    .then(response => {
      if (response.ok) {
        return response.json();
      
      } else {
        throw new Error("Erro ao carregar dados");
      }
    })
}