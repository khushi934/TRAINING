const num = [10,30,20,4,5,6,8,9,11,12]
// console.log(num)
// num.pop()
// console.log(num)
// num.push(9)
// console.log(num)
// num.shift()
// console.log(num)
// num.unshift(12)
// console.log(num)
//  num.splice(3,5)
//  console.log(num)
// nums1= num.slice(2,6)
// console.log(nums1)
// nums =num.indexOf(30)
// console.log(nums)
// console.log(num.includes(40))
// console.log()

//Array Higher order collection

// const name =["Khushi", "Saumya","Kashish","Muskan","Ritu","Shivanshi"]
// name.forEach(element => {
//     console.log(element)
// });
// name.map(element=>{
//     console.log(element+" "+"hello")
// });
// const salary=[30000,40000,50000]
// salary.map(element=>{
//     console.log(element+0.03*element)
// });

const even = num.filter(i=>{
    return  i%2==0
});
console.log(even)

const large = num.find(i=>{
   return i>20
});
console.log(large)