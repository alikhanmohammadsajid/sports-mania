import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import "./LeagueDetail.css"
import logo1 from "../../Icon/found 1.png"
import logo2 from "../../Icon/flag (1) 1.png"
import logo3 from "../../Icon/football (1) 1.png"
import logo4 from "../../Icon/male-gender-sign 1.png"
import image from "../../Photo/Rectangle 28.png"
import facebook from "../../Icon/Facebook.png"
import twitter from "../../Icon/Twitter.png"
import youtube from "../../Icon/YouTube.png"

const LeagueDetail = () => {
    const { idTeam } = useParams()
    const [detail, setDetail] = useState({})
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setDetail(data.teams[0]))
    }, [])

    return (
        <div>
            <div>
                <Card className="bg-dark">
                    <div>
                        <Card.Img src={detail.strTeamBadge} alt="Card image" />
                    </div>

                </Card>
            </div>
            <div className="team_data row">
                <div className="col-md-6 team_detail">
                    <h1>{detail.strTeam}</h1>
                    <h3> <img src={logo1} alt="" /> Founded : {detail.intFormedYear} </h3>
                    <h3> <img src={logo2} alt="" /> Country : {detail.strCountry}</h3>
                    <h3> <img src={logo3} alt="" /> Sports Type : {detail.strSport}</h3>
                    <h3> <img src={logo4} alt="" /> Gender : {detail.strGender}</h3>
                </div>
                <div className="image col-md-6"><img src={image} alt="" /></div>

            </div>
            <div className="container">
                <p>{detail.strDescriptionEN}</p>
                <br />
                <p>{detail.strDescriptionJP}</p>
            </div>
            <div className="footer container">
                
                   <a href="https://www.facebook.com/profile.php?id=100013329240176"> <img src={facebook} alt=""/> </a>
                   <a href="https://twitter.com/MDSajidChowdhu1"> <img src={twitter} alt=""/> </a>
                   <a href="https://www.youtube.com/channel/UCUUJs44Dc1AxgGmLPEmPMzA"> <img src={youtube} alt=""/> </a> 
            
                
            </div>
        </div>
    );
};

export default LeagueDetail;