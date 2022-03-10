import { Button } from 'antd';
import './Results.scss';

interface Props {
  onButtonClick: () => void;
}

const Results = ({ onButtonClick }: Props) => {
  return (
    <div className="flix-results">
      <Button
        className="flix-results-button"
        ghost
        size="large"
        onClick={onButtonClick}
      >
        Back
      </Button>
    </div>
  );
};

export default Results;
