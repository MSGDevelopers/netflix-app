import { Button, Modal, Rate } from 'antd';
import { PlayCircleOutlined, YoutubeOutlined } from '@ant-design/icons';
import './Results.scss';
import { useState } from 'react';

interface Props {
  movie: any;
  onBackButtonClick: () => void;
}

const Results = ({ movie, onBackButtonClick }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openNetflixNewTab = (url: string) => {
    var win = window.open(url, '_blank');
    win?.focus();
  };

  return (
    <div className="flix-results">
      <section className="flix-results-movie">
        <img
          className="flix-results-movie-image"
          alt="example"
          src={movie.poster_path}
        />
        <div className="flix-results-movie-content">
          <div className="flix-results-movie-content-details">
            <h2 className="flix-results-movie-content-details-title">
              {movie.original_title}
            </h2>
            <div className="flix-results-movie-content-details-description">
              {movie.overview}
            </div>
            {/* <div className="flix-results-movie-content-details-director">
              Director: Christopher Nolan
            </div>
            <div className="flix-results-movie-content-details-cast">
              Cast: Mark Hamill, John Travolta, Frodo Baggins, Han Solo,
              Chewbacca, R2D2, C3PO, Anakin
            </div> */}
          </div>
          {/* <div className="flix-results-movie-content-actions">
            <Button onClick={() => setModalVisible(true)}>
              Watch Trailer <YoutubeOutlined />
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => openNetflixNewTab('https://www.netflix.com')}
            >
              Play on Netflix <PlayCircleOutlined />
            </Button>
          </div> */}
          <div className="flix-results-movie-content-rating">
            <Rate allowHalf defaultValue={movie.vote_average / 2} />
          </div>
        </div>
      </section>
      <Button
        className="flix-results-button"
        ghost
        size="large"
        onClick={onBackButtonClick}
      >
        Back
      </Button>
      {/* <Modal
        className="flix-results-trailer-modal"
        centered
        width={640}
        visible={modalVisible}
        closable={false}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <iframe
          width="640"
          height="395"
          src="https://www.youtube.com/embed/EnlOhdFZSXw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal> */}
    </div>
  );
};

export default Results;
