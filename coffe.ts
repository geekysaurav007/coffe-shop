class coffeShop {
    final_total: number = 0
    my_order: any[] = []
    public coffe: string[] = ["espresso", "cappacino", "latte"]
    public ep_add: any = [{ name: "milk", price: 70 }, { name: "cream", price: 75 }, { name: "latte", price: 100 }]
    public cappa_add: any = [{ name: "milk", price: 80 }, { name: "cream", price: 90 }, { name: "latte", price: 125 }]
    
    public latt_add: any = [{ name: "milk", price: 100 }, { name: "cream", price: 125 }, { name: "latte", price: 150 }]
    public createOrder(): any {
        type order = {
            coffe_name: string;
            coffe_Addon: string;
            coffe_price: Number;
            quantity: number;
            sub_total: number
        }



       
        alert("select your coffe")
        let coffe_index: any = prompt(`1 for espress0\n 2 for cappa\n 3 for latte`)
        let index_coffee: number = parseInt(coffe_index)
        



        if ((index_coffee - 1) == 0) {
            alert(`our add-on for espresso coffe\n ${this.ep_add[0].name} <--> rs${this.ep_add[0].price}\n ${this.ep_add[1].name}<--> rs${this.ep_add[1].price}\n ${this.ep_add[2].name}<-->rs ${this.ep_add[2].price}`)
            let coffe_add_Index: any = prompt(`press 1 for milk\n press 2 for cream\n  press 3 for latte`)
            let index_add_coffe: number = parseInt(coffe_add_Index)

            let q: any = prompt("enter the qunatity of this coffe")
            let quantity: number = parseInt(q)
            
            let total_price = quantity * this.ep_add[index_add_coffe - 1].price
           



            const curr_order: order = {
                coffe_name: this.coffe[index_coffee - 1],
                coffe_Addon: this.ep_add[index_add_coffe - 1].name,
                coffe_price: this.ep_add[index_add_coffe - 1].price,
                quantity: quantity,
                sub_total: total_price

            }
            this.my_order.push(curr_order)


        }


        else if ((index_coffee - 1) == 1) {

            alert(` our add-on for cappa coffe \n${this.cappa_add[0].name} <-->rs ${this.cappa_add[0].price}\n${this.cappa_add[1].name}<--> rs${this.cappa_add[1].price}\n ${this.cappa_add[2].name}<-->rs ${this.cappa_add[2].price}`)
            let coffe_add_Index: any = prompt(`press 1 for milk\n press 2 for cream\n  press 3 for latte`)
            let index_add_coffe: number = parseInt(coffe_add_Index)

            let q: any = prompt("enter the qunatity of this coffe")
            let quantity: number = parseInt(q)
            let total_price = quantity * this.cappa_add[index_add_coffe - 1].price



            const curr_order: order = {
                coffe_name: this.coffe[index_coffee - 1],
                coffe_Addon: this.cappa_add[index_add_coffe - 1].name,
                coffe_price: this.cappa_add[index_add_coffe - 1].price,
                quantity: quantity,
                sub_total: total_price

            }
            this.my_order.push(curr_order)

        }


        else {
            alert(`our add-on for lata coffe\n${this.latt_add[0].name} <---> rs ${this.latt_add[0].price}\n ${this.latt_add[1].name}<--->rs ${this.latt_add[1].price}\n ${this.latt_add[2].name}<---> rs${this.latt_add[2].price}`)
            let coffe_add_Index: any = prompt(`press 1 for milk\n press 2 for cream\n  press 3 for latte`)
            let index_add_coffe: number = parseInt(coffe_add_Index)

            let q: any = prompt("enter the qunatity of this coffe")
            let quantity: number = parseInt(q)

            let total_price = quantity * this.latt_add[index_add_coffe - 1].price

            const curr_order: order = {
                coffe_name: this.coffe[index_coffee - 1],
                coffe_Addon: this.latt_add[index_add_coffe - 1].name,
                coffe_price: this.latt_add[index_add_coffe - 1].price,
                quantity: quantity,
                sub_total: total_price

            }
            this.my_order.push(curr_order)





        }
    }
}
const u1 = new coffeShop()
let v: any = prompt("how many orders u want to create")
let value: number = parseInt(v)
for (let i = 0; i < value; i++) {
    alert(`create yuor ${i+1} order`)
    u1.createOrder()

}
u1.my_order.forEach((x, i) => {
    console.log(`your ${i+1} order`)
    console.log(`coffe name= ${x.coffe_name}\n
    coffe_Addon=${x.coffe_Addon}\n
    coffe_price=${x.coffe_price}\n
    quantity=${x.quantity}\n
    sub_total=${x.sub_total}`)
    u1.final_total += x.sub_total
})
console.log(`your final bill is ${u1.final_total}`)


