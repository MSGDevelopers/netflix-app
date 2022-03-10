import { Button, Card } from 'antd';
import {
  EllipsisOutlined,
  PlayCircleOutlined,
  YoutubeOutlined
} from '@ant-design/icons';
import './Results.scss';
import Meta from 'antd/lib/card/Meta';

interface Props {
  onButtonClick: () => void;
}

const Results = ({ onButtonClick }: Props) => {
  return (
    <div className="flix-results">
      <section className="flix-results-movie">
        <img
          className="flix-results-movie-image"
          alt="example"
          src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9ada75bf-aba2-4259-b1ca-16d33469a46f/14.jpg"
        />
        <div className="flix-results-movie-content">
          <div className="flix-results-movie-content-details">
            <h2 className="flix-results-movie-content-details-title">
              Star Wars: Return of the Jedi
            </h2>
            <div className="flix-results-movie-content-details-description">
              When the menace known as the Joker wreaks havoc and chaos on the
              people of Gotham, Batman must accept one of the greatest
              psychological and physical tests of his ability to fight
              injustice. When the menace known as the Joker wreaks havoc and
              chaos on the people of Gotham, Batman must accept one of the
              greatest psychological and physical tests of his ability to fight
              injustice.
            </div>
            <div className="flix-results-movie-content-details-director">
              Director: Christopher Nolan
            </div>
            <div className="flix-results-movie-content-details-cast">
              Cast: Mark Hamill, John Travolta, Frodo Baggins, Han Solo,
              Chewbacca, R2D2, C3PO, Anakin
            </div>
          </div>
          <div className="flix-results-movie-content-actions">
            <Button onClick={onButtonClick}>
              Watch Trailer <YoutubeOutlined />
            </Button>
            <Button type="primary" danger onClick={onButtonClick}>
              Play on Netflix <PlayCircleOutlined />
            </Button>
          </div>
        </div>
      </section>
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
