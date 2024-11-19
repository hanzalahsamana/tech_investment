import React from 'react';
import TeamMember1 from '../../img/team-1.jpg';
import TeamMember2 from '../../img/team-2.jpg';
import TeamMember3 from '../../img/team-3.jpg';
import TeamMember4 from '../../img/team-4.jpg';
import '../../css/style.css';
// import '../../css/bootstrap.css'

const TeamSection = () => {
  const teamMembers = [
    { id: 1, name: 'Full Name', designation: 'Designation', imgSrc: TeamMember1 },
    { id: 2, name: 'Full Name', designation: 'Designation', imgSrc: TeamMember2 },
    { id: 3, name: 'Full Name', designation: 'Designation', imgSrc: TeamMember3 },
    { id: 4, name: 'Full Name', designation: 'Designation', imgSrc: TeamMember4 },
  ];

  return (
    <div className="container-xxl py-5 team-section">
      <div className="container py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-secondary text-uppercase">Our Team</h6>
          <h1 className="mb-5">Expert Team Members</h1>
        </div>
        <div className="row g-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-lg-3 col-md-6 wow fadeInUp " data-wow-delay={member.id * 0.2 + 's'} >
              <div className="team-item p-4" >
                <div className="overflow-hidden mb-4">
                  <img className="img-fluid" src={member.imgSrc} alt="" />
                </div>
                <h5 className="mb-0">{member.name}</h5>
                <p>{member.designation}</p>
                <div className="btn-slide mt-1" >
                  <i className="fa fa-share"></i>
                  <span>
                    <a href="#about"><i className="fab fa-facebook-f"></i></a>
                    <a href="#about"><i className="fab fa-twitter"></i></a>
                    <a href="#about"><i className="fab fa-instagram"></i></a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
