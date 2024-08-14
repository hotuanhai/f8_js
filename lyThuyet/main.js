function varScoping() {
    var x = 1;
  
    if (true) {
      var x = 2;
      console.log(x); // will print 2
    }
  
    console.log(x); // will print 2
  }
  
  function letScoping() {
    let x = 1;
  
    if (true) {
      let x = 2;
      console.log(x); // will print 2
    }
  
    console.log(x); // will print 1
  }
  varScoping()
  letScoping()
  let x = "tom"
  let y = "boi"
  console.log('aaa')
  console.log(`im ${x} ${y}`)
// let nhu C
