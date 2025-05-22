//your JS code here. If required.
const checkAgePromise = (age,name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        resolve(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
};
const handleSubmit = (event) => {
  event.preventDefault();
  const age = document.getElementById("age")?.value;
  const name = document.getElementById("name")?.value;
  console.log(typeof age);
  if (age === "" || name === "") {
    alert("Please enter valid details.");
  } else {
    checkAgePromise(Number(age),name)
      .then((res) => alert(res))
      .catch((err) => alert(err));
  }
  console.log(name);
};
