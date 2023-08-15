// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <h1 className="heading">Latest Match</h1>
      <div className="latest-match-card">
        <div className="upper-part">
          <div>
            <h1 className="match-details-heading">{competingTeam}</h1>
            <p className="match-details">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="image-size"
          />
        </div>
        <hr className="separator" />
        <p className="match-details">First Innings</p>
        <p className="match-details">{firstInnings}</p>
        <p className="match-details">Second Innings</p>
        <p className="match-details">{secondInnings}</p>
        <p className="match-details">Man of The Match</p>
        <p className="match-details">{manOfTheMatch}</p>
        <p className="match-details">Umpires</p>
        <p className="match-details">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
