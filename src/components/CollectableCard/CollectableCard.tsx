import "./styles.css";

const CollectableCard = ({
  name,
  image,
  date,
}: {
  name: string;
  image: string;
  date: Date;
}) => {
  return (
    <div
      className="collectablesCardWrapper"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <p>{name}</p>
    </div>
  );
};

export default CollectableCard;
