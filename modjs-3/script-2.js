`use strict`;
function script2() {
  const countProps = function(obj) {
    const values = Object.keys(obj);
    return values.length;   
  };
  console.log(countProps({})); // 0

  console.log(countProps({ name: "Mango", age: 2 })); // 2

  console.log(
    countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
  ); // 3

  //Проще:

  // let countProps = function(obj) {
  //   return Object.keys(obj).length;
  // };

  // console.log(countProps({})); // 0

  // console.log(countProps({ name: 'Mango', age: 2 })); // 2

  // console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
}
