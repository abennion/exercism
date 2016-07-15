module.exports = i => {
  /*
    I : 1 to 3
    V : 4 to 8
    X : 9 to 13
    L :  

    divided by 10
    divided by 50
    divided by 100
    ...


  */

  let digits = Array.from(i.toString());
  return digits.map((d, i) => {
    console.log('d: ' + d + ', i: ' + i + ', l: ' + digits.length);
    switch (digits.length) {
      // 0 - 9
      case 1:
        
        // 9
        // 1 - 3
        // 4 - 8
    }
  }, digits.length).join('');
};
