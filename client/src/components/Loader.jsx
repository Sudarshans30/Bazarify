// import { Spinner } from 'react-bootstrap';

// const Loader = () => {
//   return (
//     <Spinner
//       animation='border'
//       role='status'
//       style={{
//         width: '100px',
//         height: '100px',
//         margin: 'auto',
//         display: 'block',
//       }}
//     ></Spinner>
//   );
// };

// export default Loader;





import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return showSpinner ? (
    <div className='d-flex justify-content-center align-items-center'>
      <FontAwesomeIcon icon={faSpinner} size='3x' spin />
    </div>
  ) : null;
};

export default Loader;
