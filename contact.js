let contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Send email

let sendMail = () => {
  let info = {
    from_name: document.querySelector("#name").value,
    email_id: document.querySelector("#email").value,
    message: document.querySelector("#msg").value,
  };
  emailjs.send("service_d2eedio","template_plffa2i",info).then(function (res) {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your message is sent successfully!",
        showConfirmButton: false,
        timer: 1500
      });
  } )
};
