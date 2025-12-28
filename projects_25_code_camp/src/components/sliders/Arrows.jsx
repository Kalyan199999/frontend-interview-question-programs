export const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-black text-3xl"
  >
    ❯
  </div>
);

export const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-black text-3xl"
  >
    ❮
  </div>
);