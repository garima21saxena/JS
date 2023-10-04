// Stack(primitive typr=> only copied value is given) & Heap(non-primitive=>original value is referenced)
let myName="Garima"
anotherName=myName
anotherName="Rishabh"
console.log(myName)
console.log(anotherName)

// object
let emp={
    email:"abc@yahoo.co.in"
}
let user=emp
user.email="pqr@yahoo.co.in"
console.log(emp.email)
console.log(user.email)
