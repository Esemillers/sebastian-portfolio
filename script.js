const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");
const lightbox = document.querySelector(".lightbox");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const languageToggle = document.querySelector(".language-toggle");
const imageTitleField = document.querySelector("input[name='image_title']");
const lightboxPrintLink = document.querySelector(".lightbox-print-link");
const year = document.querySelector("#year");
const panels = document.querySelectorAll(".site-panel");
const sectionLinks = document.querySelectorAll("[data-section-link]");

if (year) {
  year.textContent = new Date().getFullYear();
}

function showSection(id, updateHash = true) {
  const target = document.getElementById(id);
  if (!target || !target.classList.contains("site-panel")) {
    showSection("home", updateHash);
    return;
  }

  panels.forEach((panel) => {
    panel.classList.toggle("active-panel", panel.id === id);
    if (panel.id === id) panel.scrollTop = 0;
  });

  sectionLinks.forEach((link) => {
    link.classList.toggle("active-link", link.dataset.sectionLink === id);
  });

  document.body.dataset.activeSection = id;
  if (updateHash) {
    history.replaceState(null, "", `#${id}`);
  }
}

function applyFilter(selected) {
  showSection("work");
  filters.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === selected);
  });

  projects.forEach((project) => {
    const categories = project.dataset.category || "";
    project.classList.toggle("hidden", selected !== "all" && !categories.includes(selected));
  });
}

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    applyFilter(filter.dataset.filter);
  });
});

document.querySelectorAll("[data-jump-filter]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    applyFilter(link.dataset.jumpFilter);
  });
});

sectionLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showSection(link.dataset.sectionLink);
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
    }
    if (nav) {
      nav.classList.remove("open");
    }
    document.body.classList.remove("no-scroll");
  });
});

function slideRail(id, direction) {
  const rail = document.getElementById(id);
  if (!rail) return;
  const visibleCards = Array.from(rail.querySelectorAll(".project:not(.hidden)"));
  const card = visibleCards[0] || rail.querySelector(".project");
  const distance = card ? card.getBoundingClientRect().width + 18 : rail.clientWidth * 0.8;
  rail.scrollBy({ left: distance * direction, behavior: "smooth" });
}

document.querySelectorAll("[data-slide-prev]").forEach((button) => {
  button.addEventListener("click", () => {
    slideRail(button.dataset.slidePrev, -1);
  });
});

document.querySelectorAll("[data-slide-next]").forEach((button) => {
  button.addEventListener("click", () => {
    slideRail(button.dataset.slideNext, 1);
  });
});

if (lightbox) {
  document.querySelectorAll(".project-open").forEach((button) => {
    button.addEventListener("click", () => {
      const image = lightbox.querySelector("img");
      const title = lightbox.querySelector("h3");
      const meta = lightbox.querySelector("p");
      image.src = button.dataset.image;
      image.alt = button.querySelector("img").alt;
      title.textContent = button.dataset.title;
      meta.textContent = button.dataset.meta;
      lightboxPrintLink.dataset.title = button.dataset.title;
      lightbox.showModal();
      document.body.classList.add("no-scroll");
    });
  });

  document.querySelector(".lightbox-close").addEventListener("click", () => {
    lightbox.close();
  });

  lightbox.addEventListener("close", () => {
    document.body.classList.remove("no-scroll");
  });
}

if (lightboxPrintLink) {
  lightboxPrintLink.addEventListener("click", () => {
    const title = lightboxPrintLink.dataset.title || "";
    const image = lightbox.querySelector("img");
    lightbox.close();
    image.src = "";
    if (imageTitleField && title) {
      imageTitleField.value = title;
    }
  });
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("open", !isOpen);
    document.body.classList.toggle("no-scroll", !isOpen);
  });
}

if (nav) {
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
      }
      nav.classList.remove("open");
      document.body.classList.remove("no-scroll");
    });
  });
}

showSection(location.hash ? location.hash.replace("#", "") : "home", false);

window.addEventListener("hashchange", () => {
  showSection(location.hash ? location.hash.replace("#", "") : "home", false);
});

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    alert("Spanish translation can be added next. Print Requests is ready in English first.");
  });
}
