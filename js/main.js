document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const pagePath = window.location.pathname.split("/").pop() || "index.html";
  const templeDetails = {
    tirumala: {
      title: "Tirumala Temple",
      image: "Images/temples/Tirumala Temple.jpg",
      summary: "Sri Venkateswara Swamy Temple at Tirumala is the most visited spiritual destination in the region and the central pilgrimage landmark for visitors staying in Tirupati.",
      distance: "22-24 km",
      travel: "45-55 min"
    },
    tiruchanur: {
      title: "Tiruchanur Padmavathi Temple",
      image: "Images/temples/Tiruchanur Padmavathi Temple.jpg",
      summary: "This temple is dedicated to Goddess Padmavathi Devi and is one of the most important companion pilgrim visits for families visiting Tirupati.",
      distance: "5-6 km",
      travel: "15-20 min"
    },
    govindaraja: {
      title: "Govinda Raja Swamy Temple",
      image: "Images/temples/Govinda Raja Swamy Temple.jpeg",
      summary: "Govindaraja Swamy Temple is a historic Vaishnavite temple in Tirupati city, known for its grand gopuram and strong connection to the local temple heritage.",
      distance: "3-4 km",
      travel: "10-15 min"
    },
    iskcon: {
      title: "ISKCON Temple",
      image: "Images/temples/ISKCON Temple.jpg",
      summary: "ISKCON Tirupati offers a serene devotional setting with beautiful architecture, regular aartis, and a calm spiritual atmosphere for families and visitors.",
      distance: "4-5 km",
      travel: "12-18 min"
    },
    kapila: {
      title: "Kapila Theertham",
      image: "Images/temples/Kapila Theertham.jpg",
      summary: "Kapila Theertham is a well-known Shiva temple and sacred waterfall destination at the base of the Tirumala hills, popular for both darshan and scenic surroundings.",
      distance: "5-6 km",
      travel: "15-20 min"
    },
    srikalahasti: {
      title: "Srikalahasti Temple",
      image: "Images/temples/Srikalahasti Temple.jpg",
      summary: "Srikalahasti Temple is one of the prominent Shiva temples near Tirupati, especially known for Rahu-Ketu pooja and strong religious importance.",
      distance: "38-42 km",
      travel: "55-70 min"
    },
    mangapuram: {
      title: "Srinivasa Mangapuram Temple",
      image: "Images/temples/Srinivasa Mangapuram Temple.jpg",
      summary: "Srinivasa Mangapuram Temple is a significant Venkateswara temple visited by devotees seeking a peaceful darshan experience outside the Tirumala hill route.",
      distance: "14-16 km",
      travel: "25-35 min"
    },
    kanipakam: {
      title: "Kanipakam Temple",
      image: "Images/temples/Kanipakam Temple.jpeg",
      summary: "Kanipakam Vinayaka Temple is a highly regarded Ganesh temple near Tirupati and a common day-trip destination for pilgrims and family travelers.",
      distance: "70-75 km",
      travel: "1 hr 30 min - 1 hr 45 min"
    },
    nagalapuram: {
      title: "Nagalapuram Temple",
      image: "Images/temples/Nagalapuram Temple.jpg",
      summary: "Nagalapuram Temple is known for its historic setting and is associated with Lord Vedanarayana Swamy, drawing visitors interested in temple architecture and heritage.",
      distance: "65-75 km",
      travel: "1 hr 35 min - 1 hr 50 min"
    },
    narayanavanam: {
      title: "Narayanavanam Temple",
      image: "Images/temples/Narayanavanam Temple.jpg",
      summary: "Narayanavanam Temple is traditionally linked with the divine wedding of Lord Venkateswara and Goddess Padmavathi, making it a meaningful pilgrimage stop.",
      distance: "38-45 km",
      travel: "55-70 min"
    },
    golden: {
      title: "Golden Temple",
      image: "Images/temples/Golden Temple.jpg",
      summary: "The Golden Temple image in this collection refers to a popular extended spiritual visit often added to regional temple travel plans from Tirupati.",
      distance: "110-120 km",
      travel: "2 hr 15 min - 2 hr 45 min"
    },
    vakula: {
      title: "Vakula Matha Temple",
      image: "Images/temples/Vakula Matha Temple.jpg",
      summary: "Vakula Matha Temple is associated with the revered mother figure of Lord Venkateswara and is a meaningful spiritual stop around the Tirupati pilgrimage circuit.",
      distance: "18-20 km",
      travel: "35-45 min"
    }
  };

  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === pagePath) {
      link.classList.add("active");
    }
  });

  const toggleNavbarState = () => {
    if (!navbar) return;
    navbar.classList.toggle("sticky", window.scrollY > 24);
  };

  toggleNavbarState();
  window.addEventListener("scroll", toggleNavbarState);

  if (window.AOS) {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      disable: window.innerWidth < 768
    });
  }

  const templeModal = document.getElementById("templeInfoModal");
  if (templeModal) {
    const title = document.getElementById("templeInfoTitle");
    const image = document.getElementById("templeInfoImage");
    const summary = document.getElementById("templeInfoSummary");
    const distance = document.getElementById("templeInfoDistance");
    const travel = document.getElementById("templeInfoTravel");

    const setTempleContent = (templeKey) => {
      const data = templeDetails[templeKey];
      if (!data) return;
      title.textContent = data.title;
      image.src = data.image;
      image.alt = data.title;
      summary.textContent = data.summary;
      distance.textContent = data.distance;
      travel.textContent = data.travel;
    };

    document.querySelectorAll(".temple-trigger[data-temple]").forEach((card) => {
      card.addEventListener("click", () => setTempleContent(card.dataset.temple));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setTempleContent(card.dataset.temple);
          if (window.bootstrap) {
            window.bootstrap.Modal.getOrCreateInstance(templeModal).show();
          }
        }
      });
    });
  }
});
