const promise1 = new Promise((resolve,reject) => {
	setTimeout(() => {
  	resolve(4)
  },3000)
})

const promise2 = new Promise((resolve,reject) => { 
	resolve(44)
},4000)

const promise3 = new Promise((resolve,reject) => {
	reject(55)
},5000)


const promiserace = Promise.allSettled([promise1, promise2, promise3]).then((res) => console.log(res))
