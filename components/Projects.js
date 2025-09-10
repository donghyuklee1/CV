// src/Projects.js

import React from 'react';


// ⭐️ 이 부분에 자신의 프로젝트 정보를 채워넣으세요!
const projectData = [
  {
    title: '개인 포트폴리오 웹사이트',
    description: 'React를 사용하여 제작한 개인 포트폴리오 웹사이트입니다. 이 사이트를 통해 저의 프로젝트와 기술 스택을 소개합니다.',
    skills: ['React', 'JavaScript', 'CSS', 'HTML'],
    link: 'https://github.com/your-repo/portfolio' // 실제 GitHub 리포지토리 주소로 바꾸세요.
  },
  {
    title: '프로젝트 2 (예시)',
    description: '팀원들과 함께 만든 프로젝트입니다. 저는 백엔드 개발을 담당했으며, Node.js와 Express를 사용했습니다.',
    skills: ['Node.js', 'Express', 'MongoDB'],
    link: '#' // 프로젝트 링크가 없다면 '#'으로 두세요.
  },
  // 원하는 만큼 프로젝트를 추가할 수 있습니다.
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <a href={project.link} key={index} className="project-card" target="_blank" rel="noopener noreferrer">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-skills">
                {project.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;