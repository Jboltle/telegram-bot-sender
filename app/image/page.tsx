import type { NextPage } from 'next';

const ImagePage: NextPage = () => {
  return (
    <main className="page-content">
    <h2 className="page-title">Input Images</h2>
    <button style={{margin: '10px'} } className='image-button grey-button'>Choose a file:</button>
    <input type='file' className='image-input' />
    <br />
    <br />
    <button className='image-button'>Send</button>
      </main>
  );
};

export default ImagePage;
