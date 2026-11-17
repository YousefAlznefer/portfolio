const skillGroups = [
    {
        title: 'Testing',
        skills: ['Manual Testing', 'Automation Testing', 'Bug Reporting', 'Jira'],
    },
    {
        title: 'Front-end',
        skills: ['React', 'JavaScript', 'HTML', 'CSS'],
    },
    {
        title: 'Back-end',
        skills: ['Node.js', 'Express', 'C#'],
    },
    {
        title: 'Database',
        skills: ['SQLite'],
    },
]

function Skills() {
    return (
        <section id="skills" className="section">
            <h2 className="section-title">Skills</h2>

            <div className="skills-grid">
                {skillGroups.map((group) => (
                    <div key={group.title} className="card">
                        <h3>{group.title}</h3>
                        <div className="tags">
                            {group.skills.map((skill) => (
                                <span key={skill} className="tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <p className="languages">
                <strong>Languages:</strong> Arabic (Native) · English
            </p>
        </section>
    )
}

export default Skills