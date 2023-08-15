// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, teamImageUrl} = teamCardDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-card-container">
        <img src={teamImageUrl} alt={name} className="team-image-size" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
