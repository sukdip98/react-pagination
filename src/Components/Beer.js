const Beer = ({ image_url, name, tagline }) => {
  return (
    <div className="beer">
      <div className="image">
        <img src={image_url} alt={name} />
      </div>
      <h2>{name}</h2>
      <p>{tagline}</p>
    </div>
  );
};

export default Beer;
