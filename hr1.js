// Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

// For example, assume the bill has the following prices: . Anna declines to eat item  which costs . If Brian calculates the bill correctly, Anna will pay . If he includes the cost of , he will calculate . In the second case, he should refund  to Anna.
var x = [3, 10, 2, 9];
var y = 1;
function bonAppetit(bill, k, b) {
  var total = 0;
  for (var i = 0; i < bill.length; i++) {
    total += bill[i];
  }
  var a = (total - bill[k]) / 2;
  // console.log(b)
  // console.log(total)
  if (b != a) {
    console.log(b - a);
  }
  if (a == b) {
    console.log("Bon Appetit");
  }
}

console.log(bonAppetit(x, y));
