function arrayShift(){
    let namaBuah =['Pisang','Jeruk','Apel','Mangga'];
    console.log(namaBuah);
    console.log('=========menghilangkan array dengan shift================')
    namaBuah2 = namaBuah.shift();
    console.log(namaBuah2)
    console.log('=========menghilangkan array dengan Pop================')
    namaBuah3 = namaBuah.pop();
    console.log(namaBuah3)

    return namaBuah;
}

console.log(arrayShift())