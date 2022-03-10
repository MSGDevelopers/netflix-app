import './MovieFilter.scss';

interface Props {
  onFilterClick: () => void;
}

const MovieFilter = ({ onFilterClick }: Props) => {
  return (
    <div>
      <button onClick={onFilterClick}>Flix Me</button>
    </div>
  );
};

export default MovieFilter;
