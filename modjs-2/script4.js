// const string = "Curabitur ligula sapien, tincidunt non."
// let symbol = string.split("")
// console.log(symbol);

const formatString = function(string) {
  if (string.length > 40) {
    return console.log(string.slice(0, 40) + "...");
  } else {
    return string;
  }
};
formatString(
  "asdfghjhgfdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccs"
);
formatString("acccccccccccccccccccccccccccccccccccccccccs");
