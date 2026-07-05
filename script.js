const gift = {
  recipient: "Jonas",
  giver: "Fabian",
  whatsappDisplay: "0163 9094889",
  whatsappInternational: "491639094889",
  message: "Hi Fabian, ich löse meinen Squash-Gutschein ein. Lass uns einen Termin finden."
};

document.querySelectorAll("[data-recipient]").forEach(el => el.textContent = gift.recipient);
document.querySelectorAll("[data-giver]").forEach(el => el.textContent = gift.giver);
document.querySelectorAll("[data-whatsapp-display]").forEach(el => el.textContent = gift.whatsappDisplay);

document.querySelectorAll("[data-whatsapp-link]").forEach(link => {
  const location = link.dataset.location;
  const message = location
    ? `Hi Fabian, ich löse meinen Squash-Gutschein ein. Ich wäre für ${location}. Lass uns einen Termin finden.`
    : gift.message;

  link.href = `https://wa.me/${gift.whatsappInternational}?text=${encodeURIComponent(message)}`;
});

document.querySelectorAll("[data-message]").forEach(el => el.textContent = gift.message);

const page = document.body.dataset.page;
document.querySelectorAll(".links a").forEach(link => {
  if (link.dataset.page === page) link.classList.add("active");
});
