import './Results.scss';

interface Props {
  onButtonClick: () => void;
}

const Results = ({ onButtonClick }: Props) => {
  return (
    <div>
      <button onClick={onButtonClick}>Back</button>
    </div>
  );
};

export default Results;
