import React from 'react'
import { NavLink } from "react-router-dom";
const BreadCrumbs = () => {
  return (
    <div>
      <div className="breadcrumbs overlay">
		<div className="container">
			<div className="bread-inner">
				<div className="row">
					<div className="col-12">
						<h2>Contact Us</h2>
						<ul className="bread-list">
							<li><NavLink to="/Home">Home</NavLink></li>
							<li><i className="icofont-simple-right"></i></li>
							<li className="active">Contact Us</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default BreadCrumbs
