var billAmt; // totoal bill amt
var extra; // in case tip % not in the btns
var people; // no of ppl
let btnVal;

$(".bill").keyup(function() {
  billAmt = $(this).val();

}).keyup();

$(".pplNo").keyup(function() {
  people = $(this).val();

}).keyup();

$(".additional-tip").keyup(function() {
  extra = $(this).val();

}).keyup();


$(".tip").click(function() {
  var btnValStr = $(this).text();
  btnVal = parseInt(btnValStr);

});
// $(".tipPerPerson").val(total);

$(".enter").click(function() {

  if (extra === "") {
    var tipPerPerson = parseInt(billAmt) * 0.01 * parseInt(btnVal) / parseInt(people);
    $(".tipPerPerson").val("$"+tipPerPerson);
    var totalPerPerson = tipPerPerson + parseInt(billAmt) / parseInt(people);
    $(".totalPerPerson").val("$"+totalPerPerson);
  } else {
    var tipPerPerson = parseInt(billAmt) * 0.01 * parseInt(extra) / parseInt(people);
    $(".tipPerPerson").val("$"+tipPerPerson);
    var totalPerPerson = tipPerPerson + parseInt(billAmt) / parseInt(people);
    $(".totalPerPerson").val("$"+totalPerPerson);
  }

})

$(".reset-button").click(function() {


  $(".pplNo").val(" ");
  $(".bill").val(" ");
  $(".additional-tip").val(" ");
  $(".tipPerPerson").val("");
  $(".totalPerPerson").val("");

  // if()
  // $(".tipPerPerson").val();
})
