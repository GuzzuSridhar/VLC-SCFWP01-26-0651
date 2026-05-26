import cardstyle from "../styles/card.module.css";

export default function Card({ headText, paraText, buttonText }) {
  return (
    <div className={cardstyle.cardContainer}>
      <h2 className={cardstyle.title}>{headText}</h2>
      <p className={cardstyle.description}>{paraText}</p>
      <button className={cardstyle.button}>{buttonText}</button>
    </div>
  );
}

// export default Card;
