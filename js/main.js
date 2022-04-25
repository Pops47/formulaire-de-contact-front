$ = document;

$.addEventListener("DOMContentLoaded", () => {
  $.querySelector("#form").addEventListener("submit", async (e) => {
    // e.preventDefault();
    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#message").value,
    };
    const response = await axios.post("http://localhost:3000/form", data);
    if (response.message === "Queued. Thank you.") {
      alert("Votre message a bien été envoyé !");
    } else {
      alert("Erreur : Le message n'a pas pu être envoyé !");
    }
  });
});
