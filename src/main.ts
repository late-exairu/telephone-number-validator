const check = document.querySelector("#check-btn") as HTMLButtonElement;
const clear = document.querySelector("#clear-btn") as HTMLButtonElement;
const form = document.querySelector("#form") as HTMLButtonElement;
const input = document.querySelector("#user-input") as HTMLInputElement;
const result = document.querySelector("#results-div") as HTMLParagraphElement;

const handleCheck = (e: Event) => {
  e.preventDefault();

  console.log("clicked");
};

form?.addEventListener("submit", handleCheck);
check?.addEventListener("click", handleCheck);
