let olympicsMedalTable = [
    { id: 1, country: "BRASIL", gold: 7, silver: 6, bronze: 6, continent: "AMERICA DO SUL" },
    { id: 2, country: "USA", gold: 46, silver: 37, bronze: 17, continent: "AMERICA DO NORTE" },
    { id: 3, country: "CHINA", gold: 26, silver: 18, bronze: 26, continent: "ASIA" },
    { id: 4, country: "RUSSIA", gold: 19, silver: 18, bronze: 19, continent: "EUROPA" },
    { id: 5, country: "REINO UNIDO", gold: 27, silver: 23, bronze: 17, continent: "EUROPA" },
    { id: 6, country: "ALEMANHA", gold: 17, silver: 10, bronze: 15, continent: "EUROPA" },
    { id: 7, country: "JAPÃO", gold: 12, silver: 8, bronze: 21, continent: "ASIA" },
    { id: 8, country: "ARGENTINA", gold: 3, silver: 1, bronze: 0, continent: "AMERICA DO SUL" },
    { id: 9, country: "ITALIA", gold: 8, silver: 12, bronze: 8, continent: "EUROPA" },
    { id: 10, country: "QUÊNIA", gold: 6, silver: 6, bronze: 1, continent: "AFRICA" },
];

Array.prototype.customFind = function (callback) {
    
    const findAfrica = olympicsMedalTable.find(country => country.continent == "AFRICA");
    return findAfrica;
}

Array.prototype.customSome = function (predicate) {

    function minimo30Medalhas(medals) {
        const totalMedalhasPorPais = olympicsMedalTable.map(item => item.gold + item.silver + item.bronze)
        if(totalMedalhasPorPais >= 30){
            return totalMedalhasPorPais;
        }

    }

    const totalMedalhasPorPais = olympicsMedalTable.map(item => item.gold + item.silver + item.bronze)
    .some(minimo30Medalhas)

    return totalMedalhasPorPais;

}

Array.prototype.customFilter = function (predicate) {
    
    const minimoDeOuro = olympicsMedalTable.filter(item => item.gold > 10)
    return minimoDeOuro;
}

Array.prototype.customMap = function (callback) {
    
    const totalMedalhasPorPais = olympicsMedalTable.map(item => item.gold + item.silver + item.bronze);
    return totalMedalhasPorPais;
    
}

Array.prototype.customReduce = function (callback, initialValue) {
   
    const peloMenos20 = olympicsMedalTable.filter(i => i.continent === "AMERICA DO SUL")
        .map(i => i.gold)
        .reduce((total, quantidade) => total + quantidade <= 20)

        if(!peloMenos20){
            return "Não há mais de 20 medalhas de ouro para os países da América do SUL!"
        }

        return peloMenos20
}



//RESPOSTAS 


// 1 - Crie um algoritmo que encontre o único pais do continente Africano
//const paisAfricano =  Array.prototype.customFind()
//console.log(paisAfricano);

// 2 - Crie um algoritmo que retorne o total de medalhas por país
//const medalhasPorPais =  Array.prototype.customMap();
//console.log(medalhasPorPais);

//3 - Crie um algoritmo para encontrar os países que conquistaram mais que 10 medalhas de ouro
//const paisesCom10MedalhasOuroNoMinimo =  Array.prototype.customFilter();
//console.log(paisesCom10MedalhasOuroNoMinimo);

// 4 - Crie um algoritmo para encontrar os países que conquistaram no minímo 30 medalhas (Ouro, Prata e Bronze)
//const paisesCom30MedalhasNoMinimo =  Array.prototype.customSome();
//console.log(paisesCom30MedalhasNoMinimo);

// 5 - Crie um algoritmo para verificar se o continente América do Sul conquistou pelo menos 20 medalhas de ouro
//const paisesComPeloMenos20MedalhasDeOUro =  Array.prototype.customReduce();
//console.log(paisesComPeloMenos20MedalhasDeOUro);







