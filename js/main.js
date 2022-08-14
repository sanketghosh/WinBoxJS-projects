const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    modal: true,
    title: "about me",
    background: "#5a5aff",
    width: "600px",
    height: "400px",
    mount: aboutContent,
  });
});
contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    modal: true,
    title: "contact me",
    background: "#5a5aff",
    width: "600px",
    height: "400px",
    mount: contactContent,
  });
});
