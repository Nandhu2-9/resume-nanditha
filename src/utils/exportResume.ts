import { ResumeData } from '../data/resumeData';
import { generatePlainTextResume } from './generatePlainText';

export function downloadFile(filename: string, content: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function exportAsTxt(data: ResumeData) {
  const plainText = generatePlainTextResume(data);
  downloadFile('Nanditha_H_Resume.txt', plainText, 'text/plain;charset=utf-8');
}

export function exportAsDoc(data: ResumeData) {
  const content = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset='utf-8'>
      <title>${data.personal.name} - Resume</title>
      <style>
        body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; line-height: 1.4; color: #1e293b; margin: 20mm; }
        h1 { font-size: 20pt; font-weight: bold; margin-bottom: 2pt; color: #0f172a; text-transform: uppercase; }
        .headline { font-size: 11pt; font-weight: bold; color: #334155; margin-bottom: 6pt; }
        .contact { font-size: 9.5pt; color: #475569; margin-bottom: 14pt; border-bottom: 1.5pt solid #0f172a; padding-bottom: 6pt; }
        h2 { font-size: 12pt; font-weight: bold; color: #0f172a; text-transform: uppercase; border-bottom: 1pt solid #cbd5e1; margin-top: 14pt; margin-bottom: 6pt; padding-bottom: 2pt; }
        .item-title { font-weight: bold; font-size: 10.5pt; }
        .item-meta { font-size: 9.5pt; color: #64748b; font-style: italic; }
        ul { margin-top: 3pt; margin-bottom: 6pt; padding-left: 18pt; }
        li { margin-bottom: 2pt; font-size: 10pt; }
        .skills-table td { padding: 3pt 6pt; font-size: 10pt; }
      </style>
    </head>
    <body>
      <h1>${data.personal.name}</h1>
      <div class="headline">${data.personal.headline}</div>
      <div class="contact">
        ${data.personal.location} | Phone: ${data.personal.phone} | Email: ${data.personal.email}<br/>
        LinkedIn: ${data.personal.linkedin} | GitHub: ${data.personal.github}
      </div>

      <h2>Professional Summary</h2>
      <p style="font-size: 10pt; text-align: justify;">${data.summary}</p>

      <h2>Technical Skills</h2>
      <table class="skills-table" style="width: 100%; border-collapse: collapse;">
        ${data.skills.map(s => `<tr><td style="font-weight: bold; width: 30%;">${s.category}:</td><td>${s.skills.join(', ')}</td></tr>`).join('')}
      </table>

      <h2>Professional Experience & Hands-On Training</h2>
      ${data.experience.map(exp => `
        <div style="margin-bottom: 10pt;">
          <div style="display: flex; justify-content: space-between;">
            <span class="item-title">${exp.title}</span>
            <span style="font-size: 9.5pt; font-weight: bold;">${exp.period}</span>
          </div>
          <div class="item-meta">${exp.company} - ${exp.location} (${exp.type})</div>
          <ul>
            ${exp.description.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      `).join('')}

      <h2>Key Software Projects</h2>
      ${data.projects.map(proj => `
        <div style="margin-bottom: 10pt;">
          <div style="display: flex; justify-content: space-between;">
            <span class="item-title">${proj.title}</span>
            <span class="item-meta">Academic Prototype</span>
          </div>
          <div style="font-size: 9.5pt; color: #334155; font-weight: 600;">Technologies: ${proj.technologies.join(', ')}</div>
          <ul>
            ${proj.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      `).join('')}

      <h2>Certifications & Technical Credentials</h2>
      <ul>
        ${data.certifications.map(c => `
          <li>
            <strong>${c.title}</strong> - ${c.issuer} (${c.dateOrYear})<br/>
            <span style="font-size: 9pt; color: #475569;">${c.description}</span>
          </li>
        `).join('')}
      </ul>

      <h2>Education</h2>
      <ul>
        ${data.education.map(e => `
          <li>
            <strong>${e.degree}</strong> - ${e.institution} (${e.period})<br/>
            <span style="font-size: 9pt; color: #475569;">Score: ${e.score} | ${e.status}</span>
          </li>
        `).join('')}
      </ul>

      <h2>Core Strengths</h2>
      <p style="font-size: 10pt;">${data.strengths.join(' • ')}</p>

      <h2>Languages</h2>
      <p style="font-size: 10pt;">${data.languages.map(l => `${l.language} (${l.proficiency})`).join(' • ')}</p>

      <h2>Declaration</h2>
      <p style="font-size: 9.5pt; font-style: italic;">"${data.declaration.statement}"</p>
      <p style="font-size: 9.5pt;">Place: ${data.declaration.place}<br/>Candidate: <strong>${data.declaration.signatory}</strong></p>
    </body>
    </html>
  `;
  downloadFile('Nanditha_H_Resume.doc', content, 'application/msword');
}

export function exportAsHtml(data: ResumeData) {
  const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.personal.name} - Software Developer Resume</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #0f172a; background: #f8fafc; padding: 20px; font-size: 13px; line-height: 1.5; }
    .page { max-width: 820px; margin: 0 auto; background: #ffffff; padding: 36px 44px; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
    h1 { font-size: 26px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: -0.5px; }
    .headline { font-size: 14px; font-weight: 600; color: #334155; margin-top: 4px; }
    .contact-bar { display: flex; flex-wrap: wrap; gap: 8px 12px; margin-top: 10px; padding-top: 10px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #475569; }
    .section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #1e3a8a; border-left: 3px solid #2563eb; padding-left: 8px; margin-top: 20px; margin-bottom: 8px; }
    p, li { color: #334155; font-size: 12.5px; }
    ul { list-style: square; padding-left: 18px; margin-top: 4px; margin-bottom: 8px; }
    li { margin-bottom: 3px; }
    .exp-item, .proj-item { margin-bottom: 14px; }
    .item-header { display: flex; justify-content: space-between; font-weight: 700; font-size: 13px; color: #0f172a; }
    .item-sub { font-size: 12px; color: #475569; }
    .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 16px; margin-top: 6px; }
    .skill-cat { font-weight: 700; color: #1e293b; }
    .no-print-bar { max-width: 820px; margin: 0 auto 16px auto; display: flex; justify-content: space-between; align-items: center; background: #0f172a; color: white; padding: 10px 16px; border-radius: 8px; font-size: 13px; }
    .btn { background: #2563eb; color: white; border: none; padding: 6px 14px; border-radius: 6px; font-weight: 600; cursor: pointer; }
    .btn:hover { background: #1d4ed8; }
    @media print {
      body { background: white; padding: 0; }
      .no-print-bar { display: none; }
      .page { box-shadow: none; border: none; padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print-bar">
    <span>${data.personal.name} — Standalone Resume</span>
    <button class="btn" onclick="window.print()">Print or Save as PDF</button>
  </div>

  <div class="page">
    <header>
      <h1>${data.personal.name}</h1>
      <div class="headline">${data.personal.headline}</div>
      <div class="contact-bar">
        <span>📍 ${data.personal.location}</span> ·
        <span>📞 ${data.personal.phone}</span> ·
        <span>✉️ ${data.personal.email}</span> ·
        <span>🔗 ${data.personal.linkedin}</span> ·
        <span>💻 ${data.personal.github}</span>
      </div>
    </header>

    <section>
      <div class="section-title">Professional Summary</div>
      <p style="text-align: justify;">${data.summary}</p>
    </section>

    <section>
      <div class="section-title">Technical Skills</div>
      <div class="skills-grid">
        ${data.skills.map(s => `<div><span class="skill-cat">${s.category}:</span> ${s.skills.join(', ')}</div>`).join('')}
      </div>
    </section>

    <section>
      <div class="section-title">Professional Experience & Industrial Training</div>
      ${data.experience.map(e => `
        <div class="exp-item">
          <div class="item-header">
            <span>${e.title}</span>
            <span>${e.period}</span>
          </div>
          <div class="item-sub">${e.company} · ${e.location} (${e.type})</div>
          <ul>
            ${e.description.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </section>

    <section>
      <div class="section-title">Key Software Projects</div>
      ${data.projects.map(p => `
        <div class="proj-item">
          <div class="item-header">
            <span>${p.title}</span>
            <span style="font-weight: 500; font-size: 11px; color: #64748b;">Academic Capstone</span>
          </div>
          <div class="item-sub" style="font-style: italic;">${p.subtitle}</div>
          <div style="font-size: 11.5px; font-weight: 600; color: #334155; margin-top: 2px;">Technologies: ${p.technologies.join(' · ')}</div>
          <ul>
            ${p.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </section>

    <section>
      <div class="section-title">Certifications & Technical Credentials</div>
      ${data.certifications.map(c => `
        <div style="margin-bottom: 8px;">
          <div style="display: flex; justify-content: space-between; font-weight: 600;">
            <span>${c.title} — ${c.issuer}</span>
            <span style="color: #64748b;">${c.dateOrYear}</span>
          </div>
          <div style="font-size: 11.5px; color: #475569;">${c.description}</div>
        </div>
      `).join('')}
    </section>

    <section>
      <div class="section-title">Education</div>
      ${data.education.map(ed => `
        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
          <div>
            <strong>${ed.degree}</strong> · ${ed.institution}
            <div style="font-size: 11px; color: #64748b;">${ed.status}</div>
          </div>
          <div style="text-align: right; font-weight: 600;">
            Score: ${ed.score}
          </div>
        </div>
      `).join('')}
    </section>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 14px;">
      <section>
        <div class="section-title">Core Strengths</div>
        <p>${data.strengths.join(' · ')}</p>
      </section>

      <section>
        <div class="section-title">Languages</div>
        <p>${data.languages.map(l => `${l.language} (${l.proficiency})`).join(' · ')}</p>
      </section>
    </div>

    <section style="margin-top: 24px; padding-top: 12px; border-top: 1px solid #cbd5e1;">
      <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: #64748b;">Declaration</div>
      <p style="font-style: italic; font-size: 11.5px; margin-top: 4px;">"${data.declaration.statement}"</p>
      <div style="display: flex; justify-content: space-between; margin-top: 12px; font-size: 11px;">
        <div>Place: <strong>${data.declaration.place}</strong></div>
        <div style="text-align: right;"><strong>${data.declaration.signatory}</strong><br><span style="color: #64748b;">Signature of Applicant</span></div>
      </div>
    </section>
  </div>
</body>
</html>`;
  downloadFile('Nanditha_H_Resume.html', content, 'text/html;charset=utf-8');
}
