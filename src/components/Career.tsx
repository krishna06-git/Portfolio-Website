import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Education</span>
          <br /> Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in Computer Engineering</h4>
                <h5>Shree L.R. Tiwari College Of Engineering</h5>
              </div>
              <h3>Curr.</h3>
            </div>
            <p>
              T.E. (6th Sem) with a current CGPA of 7.7. Focusing on core Computer Science subjects such as Data Structures, Object-Oriented Programming, and advanced application development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>12th Board</h4>
                <h5>S.D.S.M College, Palghar</h5>
              </div>
              <h3>20XX</h3>
            </div>
            <p>
              Completed Higher Secondary Education scoring 70%. Built a strong foundation in Mathematics, Physics, and analytical problem solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>10th Board</h4>
                <h5>C.T.E.S English Medium School</h5>
              </div>
              <h3>20XX</h3>
            </div>
            <p>
              Completed Secondary Education scoring 84%. Participated actively in various academic and extracurricular activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
