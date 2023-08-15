// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
  return (
    <li className="match-card">
      <img src={competingTeamLogo} className="image-size" alt={competingTeam} />
      <h1 className="heading">{competingTeam}</h1>
      <p className="result">{result}</p>
      <p className="status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
