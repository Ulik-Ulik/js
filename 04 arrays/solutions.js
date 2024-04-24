//на некоторые задачи представлено несколько решений

const fill = (arraySize, value) => {
    return new Array(arraySize).fill(value);
   }

const reverse = (array) => {
    let mas = [];
    for (let i of array) mas.unshift(i)
    return mas
   }

const compact = (array) => {
    let mas = [];
    for (let i of array) if (!i==false) mas.push(i)
    return mas
   }
const compact2 = array =>  array.filter(item =>  !item==false)
   
const fromPairs = (array) => {
   result = {}
   for (let i of array) result[i[0]] = i[1]
   return result
 }   
 const fromPairs2 = (array) => {
   return array.reduce( (accumulator, currentValue) => {
   accumulator[currentValue[0]] = currentValue[1]
   return accumulator
   },{} );
 }

 const without = (array, ...args) => {
   let result = [];
   for(let i of array) if (args.indexOf(i)==-1) result.push(i)
   return result
  }

  const without2 = (array, ...args) => {
   return array.filter(item => args.indexOf(item)==-1)
  }

  const unique = (array) => {
    let result = []
    for (let i of array) if (!result.includes(i)) result.push(i);
    return result 
  }
  const unique2 = (array) => {
    return array.filter((item,index,arr) => arr.indexOf(item)==index)
  }

  const isEqual = (firstArray, secondArray) => {
   let len = firstArray.length>secondArray.length? firstArray.length : secondArray.length;
   for (let i = 0;i<len;i++){
    if (firstArray[i]!= secondArray[i]) return false
   }
   return true
  }
  const isEqual2 = (firstArray, secondArray) => {
    mas = firstArray.map((elem, ind)=> elem === secondArray[ind])
    if (mas.includes(false) || firstArray.length!=secondArray.length) return false
    else return true
   }
const flatten = (array) => {
    let flag = false;
    let result = [];
    for(let cnt;cnt<array.length; array++){
      console.log(cnt)
      if (Array.isArray(array[cnt]))  {
        result = result.concat(array[cnt])
        flag = true;
      }else{
        result.push(array[cnt])
      }
      cnt++
    }
    if (flag) return flatten(result);
    else return result
   }

   const flatten2 = (array) => {
    return array.reduce((accum,item)=> {
      if (Array.isArray(item)) return accum.concat(flatten2(item))
    else return accum.concat(item)
    },[])
   }


   const data = [1, 2, [3, 4, [5]]];
   console.log(flatten2(data)); // [1, 2, 3, 4, 5]
  
