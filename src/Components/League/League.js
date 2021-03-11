import React, { useEffect, useState } from 'react';
import LeagueHome from '../LeagueHome/LeagueHome';
import image from "../../Photo/MW-IH322_PL528_20200528075932_ZQ.jpg"
import "./League.css"
import {Card} from "react-bootstrap"
const League = () => {

    const [leagues, setLeagues] = useState([])

    useEffect(() => {
        const url = (`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`)
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.teams))
    }, [])

    return (
        <div className="league">
            <Card className="bg-dark text-white ">
  <Card.Img src={image} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>
        <h1 className="text">Sport mania</h1></Card.Title>
  </Card.ImgOverlay>
</Card>
<div className="row">
{
                leagues.map(league => <LeagueHome league = {league}></LeagueHome>)
            }
</div>
            
        </div>
    );
};

export default League;