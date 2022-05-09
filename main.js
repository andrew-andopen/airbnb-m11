const index = document.getElementById("index");

if (index) {
  const addressTwoTag = document.getElementById("address-two");
  const addressTwoLabeltag = document.getElementById("address-two-label");

  const emailTag = document.getElementById("email");
  const emailLabeltag = document.getElementById("email-label");

  const checkValue = function (text, label) {
    const value = text.value.trim();
    if (value) {
      label.classList.add("valid-form");
    } else {
      label.classList.remove("valid-form");
    }
  };

  addressTwoTag.addEventListener("focus", (evt) => {
    addressTwoLabeltag.classList.add("valid-form");
  });

  addressTwoTag.addEventListener("blur", (evt) => {
    addressTwoLabeltag.classList.remove("valid-form");
    checkValue(addressTwoTag, addressTwoLabeltag);
  });

  addressTwoTag.addEventListener("input", (evt) => {
    checkValue(addressTwoTag, addressTwoLabeltag);
  });

  emailTag.addEventListener("focus", (evt) => {
    emailLabeltag.classList.add("valid-form");
  });

  emailTag.addEventListener("blur", (evt) => {
    emailLabeltag.classList.remove("valid-form");
    checkValue(emailTag, emailLabeltag);
  });

  emailTag.addEventListener("input", (evt) => {
    checkValue(emailTag, emailLabeltag);
  });
}

const headertag = document.querySelector("header");

document.addEventListener("scroll", () => {
  const pixels = window.pageYOffset;
  console.log(pixels);

  pixels > 10
    ? (headertag.style.animation = `fadeIn 1s both`)
    : (headertag.style.animation = null);
});
