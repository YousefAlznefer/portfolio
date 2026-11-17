const experiences = [
    {
        role: 'QA Tester',
        company: 'YallaGo',
        date: 'Aug 2026 – Present',
        tasks: [
            'Test new features across the customer and driver mobile apps and the operations dashboard before release.',
            'Write clear bug reports in Jira and follow up with developers until issues are resolved.',
            'Monitor and triage production issues reported by the Operations team, turning them into actionable tickets.',
            'Collaborate with developers to verify fixes and prevent repeat issues.',
        ],
    },
]

function Experience() {
    return (
        <section id="experience" className="section">
            <h2 className="section-title">Experience</h2>

            {experiences.map((exp) => (
                <div key={exp.company} className="card">
                    <div className="card-header">
                        <h3>
                            {exp.role} <span>@ {exp.company}</span>
                        </h3>
                        <small>{exp.date}</small>
                    </div>
                    <ul>
                        {exp.tasks.map((task) => (
                            <li key={task}>{task}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}

export default Experience