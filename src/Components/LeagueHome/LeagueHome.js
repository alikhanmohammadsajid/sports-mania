
import { Button } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import './LeagueHome.css'

const LeagueHome = (props) => {
    const {strTeam, strSport, strTeamBadge, idTeam} = props.league
    
    
    return (
        <div className="league_home col-md-3">
            <img src={strTeamBadge} alt="" />

            <div>
                <h5>{strTeam}</h5>
                <p>Sports Type : {strSport}</p>
            </div>
            <Button variant="warning"><Link to={`/detail/${idTeam}`}>Explore</Link></Button>
            <p>
            </p>
        </div>
    );
};

export default LeagueHome;