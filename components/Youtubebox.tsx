import useGetQuery from '@/state/query/useGetQuery';
import YouTube, { YouTubeProps } from 'react-youtube';
const getYouTubeID = require('get-youtube-id');

const Youtubebox = () => {
  //SETTINGS  DATA
  const data = useGetQuery('settings', '/settings');
  const sett = data[0] || [];
  const url = sett?.youtube;

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.playVideo();
    event.target.mute();
  };

  const onPlayerEnd: YouTubeProps['onEnd'] = (event) => {
    event.target.playVideo();
  };

  const VIDEO_WIDTH = `100%`;
  const VIDEO_HEIGHT = `400`;

  const opts: YouTubeProps['opts'] = {
    height: VIDEO_HEIGHT,
    width: VIDEO_WIDTH,
    mute: 1,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      disablekb: 1,
      fs: 0,
      rel: 0,
      loop: 1,
      start: 1,
    },
  };

  if (url) {
    return (
      <div className="youtubebox">
        <div>
          <YouTube
            videoId={getYouTubeID(url)}
            opts={opts}
            onReady={onPlayerReady}
            onEnd={onPlayerEnd}
          />
        </div>
        <div
        style={{
          backgroundImage: `url(${sett?.cover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top'
        }}
        >

        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Youtubebox;
