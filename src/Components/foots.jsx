let cities = ["Canada", "Malaysia", "Mumbai", "Cairo", "chicago"];
const Footer = () => {
  return (
    <div>
      <p>
        {cities.map((title, index) => (
          <b key={index}> {title} </b>
        ))}
      </p>
    </div>
  );
};

export default Footer