import React from "react";

const styles = {
  img: {
    width: "100%",
    padding: "10px",
  },
  card: {
    backgroundColor: "white",
    padding: "10px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  project: {
    padding: "15px",
  },
};
function ProjectCard({ project }) {
  const { name, image, technologies, deployed, github } = project
  return (
    <div className="project col-sm-6" style={styles.project}>
      <div className="card" style={styles.card}>
        <img
          className="card-img-top img-responsive"
          src={image}
          alt="deployed app"
          style={styles.img}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">🛠️ {technologies}</p>
          <div className="card-links">
            <a
              href={deployed}
              target="_blank"
              className="btn btn-success btn-app"
            >
              Deployed Application
            </a>
            <a
              href={github}
              target="_blank"
              className="btn btn-success btn-app"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
