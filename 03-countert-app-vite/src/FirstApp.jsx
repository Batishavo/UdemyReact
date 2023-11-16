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



FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: 'Fernando Herrera',
  subTitle: 'No hay subtítulo',
  // title: 'No hay título',
}