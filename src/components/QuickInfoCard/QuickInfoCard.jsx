import "./quickinfocard.css"

function QuickInfoCard({ infoCard }) {
  return (
    <section className="experince-card">
                <i className={`${infoCard.iconClass}`}></i>
                <h2 className="experience-title">{infoCard.title}</h2>
                <p className="experience-subtitle">{infoCard.description}</p>
                
                <p className="experience-subsubtitle">{infoCard.skillsTitle}</p>
                <section className="icons-experience">
                    {infoCard.skills.map((skill, index) => (
                        <i key={index} className={`${skill.iconClass} skill-icon`} title={skill.name}></i>
                    ))}
                </section>
                    
                <p className="experience-subsubtitle"> {infoCard.toolsTitle}</p>
                <ul className="devtool-list">
                    {infoCard.tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
        
            </section>
  )
}

export default QuickInfoCard