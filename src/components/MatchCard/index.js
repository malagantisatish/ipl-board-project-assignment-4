// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        className="image-size"
        alt={`competing team ${competingTeam}`}
      />
      <p className="heading">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className="status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
