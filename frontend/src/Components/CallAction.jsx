import React from 'react'
import { NavLink } from "react-router-dom";
const CallAction = () => {



  return (
    <section className="call-action overlay mb-5" data-stellar-background-ratio="0.5">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-12">
						<div className="content">
							<h2>Need medical advice? Check out our articles and chatbot support!</h2>
							<p>if you're looking for medical guidance, our platform provides a centralized space where you can access educational articles,
								awareness resources, and chatbot assistance. While we don't connect you directly with doctors,
								our content helps you make informed health decisions.</p>
							<div className="button"> 
								<NavLink to="/About" className="btn">About Us</NavLink>
								<NavLink to="/Contact" className="btn second">Learn More<i className="fa fa-long-arrow-right"></i></NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}

export default CallAction;
