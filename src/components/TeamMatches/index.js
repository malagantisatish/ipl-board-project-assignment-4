// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesList: {}, isLoading: true}

  componentDidMount() {
    this.getEachMatchDetails()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getEachMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()

    const updatedData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatchDetails: this.getFormattedData(
        fetchedData.latest_match_details,
      ),
      recentMatches: fetchedData.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }
    console.log(fetchedData.latest_match_details)

    this.setState({teamMatchesList: updatedData, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  renderTheRecentMatchCard = () => {
    const {teamMatchesList} = this.state
    const {recentMatches} = teamMatchesList
    return (
      <ul className="card-container">
        {recentMatches.map(eachCard => (
          <MatchCard matchDetails={eachCard} key={eachCard.id} />
        ))}
      </ul>
    )
  }

  renderTheLatestMatches = () => {
    const {teamMatchesList} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamMatchesList
    return (
      <div className="bg-container">
        <img
          src={teamBannerUrl}
          alt="team-banner"
          className="team-banner-image-size"
        />
        <LatestMatch latestMatchData={latestMatchDetails} />
        {this.renderTheRecentMatchCard()}
      </div>
    )
  }

  getTheBackgroundImage = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state
    const className = `team-matches-container ${this.getTheBackgroundImage()}`

    return (
      <div className={className}>
        {isLoading ? this.renderLoader() : this.renderTheLatestMatches()}
      </div>
    )
  }
}

export default TeamMatches
