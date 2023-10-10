const user = {id:1, name:'Gorib aamir', job:'actor'};

const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified); 

const shop ={
        owner:'Alia',
        address:{
            road:'kochukhet voot er goli',
            city:'Dhaka',
            country:'Bangladesh'
        },
        products:['laptop','mic','monitor','keyboard'],
        revenue:45000,
        isOpen:true,
        isFalse:false,
}

console.log(shop);

const shopJson = JSON.stringify(shop)
console.log(shopJson);

const shopObj = JSON.parse(shopJson)
console.log(shopObj);