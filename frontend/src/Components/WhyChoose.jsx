import React from 'react'
import { NavLink } from 'react-router-dom';

const WhyChoose = () => {

return (
    <section className="why-choose section text-center" >
			<div className="container">
				<div className="row">
					<div className="col-lg-12 ">
						<div className="section-title">
							<h2>We Offer Different Services To Improve Your Health</h2>
							<img src="img/section-img.webp" loading='lazy' alt="#" />
							<p>Improve communication and coordination of care between members of the health care team and the person receiving care</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-12 ">
						
						<div className="choose-left">
							<h3>Who We Are</h3>
							<p className="mb-5">We provide e-health care to help the sick person for temporary consultations from his home Facilitating access to health care for people living in rural communities or remote areas. </p>
							<NavLink to="/About" className="more">Show More</NavLink>
						</div>
						
					</div>
					<div className="col-lg-6 col-12 mt-4 frame">
						<iframe width="350" height="315" src="https://www.youtube.com/embed/FC4soCjxSOQ?si=X0qvw-PV8CTRu46h"
                                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                                gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                            </iframe>
					</div>
				</div>
			</div>
		</section>
  )
}

export default WhyChoose;
