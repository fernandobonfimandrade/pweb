function maior(n1,n2,n3){
    let array = new Array(Number(n1),Number(n2),Number(n3));
    let maior = array[0];
    for (let index = 1; index < array.length; index++) {
        if(maior < array[index]){
            maior = array[index];
        }
    }
    return maior;
}

function crescente(n1,n2,n3){
    let array = new Array(Number(n1),Number(n2),Number(n3));
    for (let index2 = array.length-1; index2 > 0; index2--) {
        for (let index = 0; index < index2; index++) {
            console.log(index,index2);
            if(array[index] > array[index+1]){
                let aux = array[index];
                array[index] = array[index+1];
                array[index+1] = aux;
            }
        }
    }
    return array;
}



const maiorItem =  maior(5,9,4);
console.log(maiorItem);

const ordenado = crescente(4,3,2);
console.log(ordenado);