const projects = [
    {
        title: 'System Core',
        description:
            'A full CRUD web application for a laptop company to add, view, edit, and delete warehouse inventory.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/YousefAlznefer/SystemCore',
        demo: '',
    },
    {
        title: 'Car Dealership Website',
        description:
            'A front-end website for a car dealership, showcasing vehicle models with a clean, responsive layout.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/YousefAlznefer/Subaru',
        demo: '',
    },
    {
        title: 'Todo List App',
        description:
            'A task management app for creating, completing, and deleting tasks.',
        tech: ['node.js', 'express', 'html', 'css', 'js'],
        github: 'https://github.com/YousefAlznefer/todo-app',
        demo: '',
    },
]

function Projects() {
    return (
        <section id="projects" className="section">
            <h2 className="section-title">Projects</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.title} className="card project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        <div className="tags">
                            {project.tech.map((t) => (
                                <span key={t} className="tag">{t}</span>
                            ))}
                        </div>

                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noreferrer">
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects