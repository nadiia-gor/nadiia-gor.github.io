import './ReadMoreCard.scss';

const ReadMoreCard = ({ headerText, bodyText }) => {
  return (
    <div className="readMoreCard--container">
      <h4 className="readMoreCard--header" style={{ textAlign: 'center' }}>
        {headerText}
      </h4>
      <p className="readMoreCard--body" style={{ textAlign: 'center' }}>
        {bodyText}
      </p>
      <span className="readMoreCard--button-wrapper">
        <a className="readMoreCard--button--text">Read More</a>
        <img
          className="readMoreCard--button--arrow"
          src="src\assets\images\icons\arrow-right.svg"
        />
      </span>
    </div>
  );
};

export default ReadMoreCard;