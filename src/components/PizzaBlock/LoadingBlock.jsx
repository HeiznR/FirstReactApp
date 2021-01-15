import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
    className='pizza-block'
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="138" cy="134" r="119" />
      <rect x="0" y="268" rx="3" ry="3" width="280" height="26" />
      <rect x="0" y="308" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="404" rx="3" ry="3" width="91" height="28" />
      <rect x="148" y="398" rx="20" ry="20" width="133" height="43" />
    </ContentLoader>
  );
}

export default LoadingBlock;
