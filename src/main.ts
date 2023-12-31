const check = document.querySelector("#check-btn") as HTMLButtonElement;
const clear = document.querySelector("#clear-btn") as HTMLButtonElement;
const form = document.querySelector("#form") as HTMLFormElement;
const input = document.querySelector("#user-input") as HTMLInputElement;
const result = document.querySelector("#results-div") as HTMLDivElement;

const handleCheck = (e: Event) => {
  e.preventDefault();
  const value = input.value;

  if (!value) {
    alert("Please provide a phone number");
    return;
  }

  const phoneRegex =
    /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;

  if (phoneRegex.test(value)) {
    result.insertAdjacentHTML("afterbegin", `<p>Valid US number: ${value}</p>`);
  } else {
    result.insertAdjacentHTML(
      "afterbegin",
      `<p>Invalid US number: ${value}</p>`,
    );
  }

  console.log("clicked");
};

const handleClear = (e: Event) => {
  e.preventDefault();
  input.value = "";
  result.innerHTML = "";
};

form?.addEventListener("submit", handleCheck);
check?.addEventListener("click", handleCheck);
clear?.addEventListener("click", handleClear);
