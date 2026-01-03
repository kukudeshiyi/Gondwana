// to validate the closure of fn has the higher priority than outer

function a() {
  // let name = "test";
  return {
    setName: (val) => {
      name = val;
    },
    getName: () => {
      return name;
    },
  };
}

var name;

const c = a();

console.log(c.getName());

c.setName("test12");

console.log(c.getName());
