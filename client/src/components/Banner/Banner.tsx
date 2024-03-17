function Banner() {
  return (
    <section className="banner">
      <img
        src="https://picsum.photos/id/10/1440/500"
        alt=""
        className="banner__img"
        style={{ width: "100%", height: "500px", objectFit: "cover" }}
      />
    </section>
  );
}

export default Banner;
