document.addEventListener("DOMContentLoaded", () => {
  if (window.flatpickr) {
    const checkout = flatpickr("#checkout", {
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
      minDate: "today"
    });

    flatpickr("#checkin", {
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
      minDate: "today",
      onChange: ([selectedDate]) => {
        if (selectedDate) {
          checkout.set("minDate", selectedDate.fp_incr(1));
        }
      }
    });
  }
});

function sendBooking() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const checkin = document.getElementById("checkin").value.trim();
  const checkout = document.getElementById("checkout").value.trim();
  const guests = document.getElementById("guests").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !email || !checkin || !checkout || !guests) {
    alert("Please complete all required booking details.");
    return;
  }

  const whatsappMessage = [
    "New Booking Request",
    "",
    `Guest Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Check In: ${checkin}`,
    `Check Out: ${checkout}`,
    `Guests: ${guests}`,
    `Message: ${message || "N/A"}`
  ].join("\n");

  const url = `https://wa.me/918686722555?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, "_blank", "noopener");
}
