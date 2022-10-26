// writing instance methods that access properties of instances of a class within another class

class Customer {
  constructor(name, phoneNumber, cart = []) {
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.cart = cart;
  }
}

class Member extends Customer {
  constructor(name, phoneNumber, cart = []) {
      super(name, phoneNumber, cart);
  }
}

class Item {
  constructor(name, cost) {
      this.name = name;
      this.cost = cost;
  }
}

class Transactions {
  constructor(cust, sale = true, refund = false, items = []) {
      this.cust = cust;
      this.sale = sale;
      this.refund = refund;
      this.discount = 0;
      this.items = items;
  }

  makeSale (cust) {
      if (cust instanceof Member) {
          this.discount = 5;
      }
      let total = 0;

      this.items.forEach((item) => {
          total += item.cost;
      });

      return total - this.discount;
  }
}

let apple = new Item('apple', 3);
let petfood = new Item('petfood', 5);
let booze = new Item('booze', 2);

let cust = new Customer('idiot mcdumdum', 4443333, [apple, petfood, booze]);
let transaction = new Transactions(cust, true, false, cust.cart);

let member = new Member('Soggy McMoist', 5559876, [apple, petfood, booze]);
let memberTransaction = new Transactions(member, true, false, member.cart);

let saleFunc = transaction.makeSale;
let boundSaleFunc = saleFunc.bind(transaction);
boundSaleFunc(); //stores return value of makeSale function into a variable so we can call the variable instead of keep having to call the instance object function

let memberTrans = memberTransaction.makeSale;
boundMemberSale = memberTrans.bind(memberTransaction)
console.log(memberTransaction.makeSale());

/*
Above, we instantiate a new Transaction. In the parameters, we pass an instance of Customer class named 'cust'.
Because we've passed this instance into the Transaction class our this.cust is now equal to the instance of Customer we created.
This allows us to access all of the properties and methods of this instantiated class, including their cart array. With this information,
we're able to iterate through this particular instance of Customer's cart to tally a total cost.

! ALSO..... STUDY THIS PROGRAM!!!! VERY IMPORTANT!!!!!! This will be close to what the coding section is like.
*/
