// function getData(dataId,getNextData){
//     setTimeout(()=> {
//         console.log("DataId:"+dataId)
//         if(getNextData){
//             getNextData()
//         }
//     },5000)

// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4)
//         })
//     })

// })

// console.log(1)
// setTimeout(()=>{
//     console.log(2)
// },0)
// console.log(3)

//Promises
function getData(dataId){
    return new Promises((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataId)
            reject("its not fulfilled")
        },2000)
    })
}
getData(1).then(()=>getData(2)).then(()=>getData(3)).catch(())