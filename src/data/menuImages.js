const importAll = (r) => {
  let images = [];
  for (const path in r) {
    images.push(r[path].default);
  }
  return images;
};

const BreakfastImages = importAll(
  import.meta.glob("../assets/image/breakfast/*.png", { eager: true })
);
const LunchImages = importAll(
  import.meta.glob("../assets/image/lunch/*.png", { eager: true })
);
const DinnerImages = importAll(
  import.meta.glob("../assets/image/dinner/*.png", { eager: true })
);

export { BreakfastImages, LunchImages, DinnerImages };
