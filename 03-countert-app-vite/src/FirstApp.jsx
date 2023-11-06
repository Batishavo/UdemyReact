import PropTypes from 'prop-types';

export const FirstApp = ({title ,subtitle }) => {
  // console.log(props);

  return (
    <>
      <h1>{title}</h1>
      {/* <code>{newMessage}</code> */}
      <p>{subtitle+1}</p>
    </>
  );
};


FirstApp.prototype = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

FirstApp.defaultProps = {
  title:'No hay titulo',
  subtitle:'No hay subtitulo',
}