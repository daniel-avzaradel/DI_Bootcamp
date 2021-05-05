const arrayOfWords = ['cucumber', undefined, 'tomatos', 'avocado']

const makeAllCaps = (arr) => {
    let p = new Promise((resolve, reject) => {
        let newarr = arr.map(item => {
            if(typeof(item) == 'string') {
                return item.toUpperCase();
            }
            else {
                reject ()
            }
        })
        resolve(newarr)
    })
    return p;
}

makeAllCaps(arrayOfWords)
.then(data => console.log(data))
.catch(err => console.log('One of your items is not a string'))