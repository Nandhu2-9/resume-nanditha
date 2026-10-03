import { ResumeData } from '../data/resumeData';

export function generatePlainTextResume(data: ResumeData): string {
  const line = "==================================================";
  const subline = "--------------------------------------------------";

  const skillsBlock = data.skills
    .map(s => `${s.category}: ${s.skills.join(', ')}`)
    .join('\n');

  const expBlock = data.experience
    .map(exp => {
      const bullets = exp.description.map(d => `  * ${d}`).join('\n');
      return `${exp.title.toUpperCase()}\n${exp.company} - ${exp.location}\nPeriod: ${exp.period} (${exp.type})\nTechnologies: ${exp.technologies.join(', ')}\n${bullets}`;
    })
    .join('\n\n');

  const projBlock = data.projects
    .map(proj => {
      const bullets = proj.bullets.map(b => `  * ${b}`).join('\n');
      return `${proj.title.toUpperCase()}\n${proj.subtitle}\nTechnologies: ${proj.technologies.join(', ')}\n${bullets}\nImpact: ${proj.metrics || 'Completed prototype validation'}`;
    })
    .join('\n\n');

  const certBlock = data.certifications
    .map(cert => {
      return `* ${cert.title}\n  Issuer: ${cert.issuer} ${cert.partnerInstitution ? `in association with ${cert.partnerInstitution}` : ''}\n  Date/Period: ${cert.dateOrYear}\n  Skills: ${cert.skills.join(', ')}\n  Credential ID: ${cert.credentialId || 'Verified'}`;
    })
    .join('\n\n');

  const eduBlock = data.education
    .map(edu => `${edu.degree}\n${edu.institution} ${edu.location ? `(${edu.location})` : ''}\nPeriod: ${edu.period} | Score: ${edu.score} (${edu.status})`)
    .join('\n\n');

  return `${data.personal.name}
${data.personal.headline}
Location: ${data.personal.location}
Phone: ${data.personal.phone} | Email: ${data.personal.email}
LinkedIn: ${data.personal.linkedin} | GitHub: ${data.personal.github}

${line}
PROFESSIONAL SUMMARY
${line}
${data.summary}

${line}
TECHNICAL SKILLS
${line}
${skillsBlock}

${line}
PROFESSIONAL EXPERIENCE & HANDS-ON TRAINING
${line}
${expBlock}

${line}
KEY SOFTWARE PROJECTS
${line}
${projBlock}

${line}
CERTIFICATIONS & TECHNICAL CREDENTIALS
${line}
${certBlock}

${line}
EDUCATION
${line}
${eduBlock}

${line}
CORE STRENGTHS
${line}
${data.strengths.join(' • ')}

${line}
LANGUAGES
${line}
${data.languages.map(l => `${l.language}: ${l.proficiency}`).join('\n')}

${line}
DECLARATION
${line}
"${data.declaration.statement}"
Place: ${data.declaration.place}
Candidate: ${data.declaration.signatory}
`;
}
