var escopoGlobalVar = "Variáveis declaradas por var ";
let escopoGlobalLet = "Variáveis declaradas por let ";
const escopoGlobalConst = "Variáveis declaradas por const";

function escopoFuncao() {
  var escopoFuncaoVar =
    "Variáveis declaradas dentro da funcao respeitam o escopo de função";
  console.log("Eu estou no escopo de função");
  console.log(
    escopoFuncaoVar +
      ". Essa variável está sendo chamada dentro da função, pois fora dela ela não pode ser acessada"
  );
}

console.log(escopoGlobalVar);
console.log(escopoGlobalLet);
console.log(escopoGlobalConst);

escopoFuncao();

if (true) {
  var escopoBlocoVar = "Var no escopo bloco";
  const escopoBlocoConst = "Const no escopo bloco";

  console.log(escopoBlocoVar);
  console.log(escopoBlocoConst);
}
