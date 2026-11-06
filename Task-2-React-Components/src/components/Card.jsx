
function Card({ title, description, category }) {
  return (
    <div className="card">
      <span>{category}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
