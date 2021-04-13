import React from 'react';
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';
import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function useIncreaseCount(max) {
  const [ count, setCount ] = React.useState(0);

  if (count > max) {
    setCount(0);
  }

  return [count, setCount]; 
}


function BadgeDetails(props) {
  const [ count, setCount ] = useIncreaseCount(4);

  const badge = props.badge;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={confLogo} alt="Logo"/>
            </div>
            <div className="col BadgeDetails__hero-attendant-name">
              <h1>{badge.firstName} {badge.lastName}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col mb-4">
            <Badge
              firstName={badge.firstName} 
              lastName={badge.lastName}
              email={badge.email}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
                />
          </div>
          <div className="col BadgeDetails__content">
            <div className="BadgeDetails__buttons">
              <h2 className="py-2 font-weight-bold">Actions</h2>
                <div>
                  <button onClick={() => {
                    setCount(count + 1)
                  }} className="btn btn-primary mr-4">
                    Incrementar Cuenta: {count}
                  </button>
                  <Link className="btn btn-primary mb-2" to={`/badges/${badge.id}/edit`}>
                    Edit
                  </Link>
                </div>
                <div>
                  <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                  <DeleteBadgeModal 
                    isOpen={props.modalIsOpen} 
                    onClose={props.onCloseModal}
                    onDeleteBadge={props.onDeleteBadge}
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BadgeDetails;