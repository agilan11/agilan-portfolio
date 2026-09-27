const animatedElements = document.querySelectorAll(
  ".journey-card, .xometry-spotlight, .looking-ahead-card",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

animatedElements.forEach((element) => {
  element.classList.add("reveal-on-scroll");
  observer.observe(element);
});

const filterButtons = document.querySelectorAll(".work-filter-btn");
const workItems = document.querySelectorAll(".filterable-work");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      filterButton.classList.remove("active");
    });

    button.classList.add("active");

    workItems.forEach((item) => {
      const categories = item.dataset.category.split(" ");

      if (selectedFilter === "all" || categories.includes(selectedFilter)) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    });
  });
});
