import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';
import './styles/BadgeList.css';

function useChangesBadges(badges) {
  const [ query, setQuery] = React.useState('');
  const [ filteredBadges, setFilteredBadges ] = React.useState(badges)

  React.useMemo(() => {
    const results = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName} ${badge.jobTitle}`
        .toLowerCase()
        .includes(query.toLowerCase())
    });

    setFilteredBadges(results)
  }, [badges, query]);

  return { query, setQuery, filteredBadges }
}


function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useChangesBadges(badges)
  
  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>
            Filter Badges
          </label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Nombre, Apellido, Trabajo" 
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />
        </div>
        <h3>No hay registros. Se el primero!!!</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create New Badge
        </Link>
      </div>
    )
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label>
          Filter Badges
        </label>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Nombre, Apellido, Trabajo" 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
              <li className="list" key={badge.id}>
                  <Gravatar className="list__avatar" email={badge.email} alt="avatar"/>
                  <div>
                    <div className="list__names font-weight-bold">
                      <span>{badge.firstName}</span>
                      <span>{badge.lastName}</span>
                    </div>
                    <div className="list__twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                        <path className="twitter__logo" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                      <span className="p-1">@{badge.twitter}</span>
                    </div>
                    <div>
                      <span className="font-weight-light">{badge.jobTitle}</span>
                    </div>
                  </div>
              </li>
            </Link>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

export default BadgesList;
