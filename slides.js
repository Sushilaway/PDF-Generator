const { pres, W, H, NAVY, NAVY_DARK, ICE, WHITE, GOLD, GRAY, LIGHTBG, FONT_HEAD, FONT_BODY, ic, bgSlide, footer, sectionTitle, iconCircle, iconRow, chip } = require('./build.js');

// ================= SLIDE 1: WELCOME =================
{
  const s = pres.addSlide();
  bgSlide(s, NAVY);
  s.addText('From Pokhara to Global Opportunities', {
    x: 0.8, y: 0.6, w: 11.7, h: 0.6, fontFace: FONT_BODY, fontSize: 16, italic: true, color: GOLD,
  });
  s.addText('How to Build Your Career\nUsing LinkedIn & Remote Jobs', {
    x: 0.8, y: 1.2, w: 11.7, h: 2.0, fontFace: FONT_HEAD, fontSize: 36, bold: true, color: WHITE,
  });
  s.addShape('line', { x: 0.8, y: 3.3, w: 3, h: 0, line: { color: GOLD, width: 3 } });
  s.addText('Presented by', {
    x: 0.8, y: 3.7, w: 5, h: 0.35, fontFace: FONT_BODY, fontSize: 13, color: ICE,
  });
  s.addText('Sushil Bastola', {
    x: 0.8, y: 4.05, w: 6, h: 0.5, fontFace: FONT_HEAD, fontSize: 22, bold: true, color: WHITE,
  });
  s.addText('Founder \u2014 AwayTechs Recruitment\nTechnical Recruiter | Content Creator', {
    x: 0.8, y: 4.6, w: 6, h: 0.8, fontFace: FONT_BODY, fontSize: 13, color: ICE,
  });
  // photo placeholder
  s.addShape('ellipse', { x: 9.5, y: 1.8, w: 3, h: 3, fill: { color: NAVY_DARK }, line: { color: GOLD, width: 2 } });
  s.addText('Your\nPhoto', {
    x: 9.5, y: 1.8, w: 3, h: 3, align: 'center', valign: 'middle',
    fontFace: FONT_BODY, fontSize: 14, italic: true, color: GOLD,
  });
  // tagline
  s.addText('"You don\u2019t need to leave Nepal to work with companies around the world."', {
    x: 0.8, y: 5.8, w: 11.7, h: 0.6, align: 'center', fontFace: FONT_BODY, fontSize: 15, italic: true, color: GOLD,
  });
}

// ================= SLIDE 2: ABOUT ME =================
{
  const s = pres.addSlide();
  bgSlide(s, WHITE);
  sectionTitle(s, 'Introduce Yourself', 'About Me');

  const items = [
    'Software Engineering Graduate',
    'Technical Recruiter (3+ Years)',
    'Founder of AwayTechs',
    'Worked with companies in: USA, Australia, Singapore, Japan',
    'Helped candidates find international opportunities',
    'WWOOF Host',
    'Content Creator',
  ];
  items.forEach((t, i) => {
    const y = 1.65 + i * 0.6;
    iconCircle(s, 'check', 0.65, y + 0.03, 0.38, NAVY, GOLD, 0.5);
    s.addText(t, { x: 1.25, y, w: 5.5, h: 0.45, valign: 'middle', fontFace: FONT_BODY, fontSize: 13.5, color: NAVY });
  });

  // Timeline
  s.addShape('roundRect', { x: 7.5, y: 1.6, w: 5.2, h: 4.8, rectRadius: 0.14, fill: { color: NAVY }, line: { type: 'none' } });
  s.addText('Timeline', { x: 7.8, y: 1.8, w: 4.6, h: 0.4, fontFace: FONT_BODY, fontSize: 16, bold: true, color: GOLD });
  const steps = [
    ['Student', '\u2193'],
    ['Recruiter', '\u2193'],
    ['Founder', '\u2193'],
    ['Global Network', ''],
  ];
  let sy = 2.4;
  steps.forEach(([label, arrow]) => {
    s.addText(label, { x: 7.8, y: sy, w: 4.6, h: 0.4, fontFace: FONT_BODY, fontSize: 14, bold: true, color: WHITE });
    sy += 0.45;
    if (arrow) {
      s.addText(arrow, { x: 7.8, y: sy, w: 4.6, h: 0.35, fontFace: FONT_BODY, fontSize: 16, color: GOLD });
      sy += 0.4;
    }
  });

  footer(s, 2, false);
}

// ================= SLIDE 3: AGENDA =================
{
  const s = pres.addSlide();
  bgSlide(s, WHITE);
  sectionTitle(s, "Today's Agenda", 'What We\u2019ll Cover');
  const agenda = [
    'What is a Remote Job?',
    'Why LinkedIn Matters',
    'Build a Professional Profile',
    'Search Jobs Like a Recruiter',
    'Google X-Ray Search',
    'AI for Job Hunting',
    'Networking',
    'Content Creation',
    'My Journey',
    'Q&A',
  ];
  const cw = 5.8;
  agenda.forEach((t, i) => {
    const col = Math.floor(i / 5), row = i % 5;
    const x = 0.6 + col * (cw + 0.4), y = 1.7 + row * 0.8;
    s.addShape('roundRect', { x, y, w: cw, h: 0.6, rectRadius: 0.08, fill: { color: i % 2 === 0 ? NAVY : LIGHTBG }, line: { type: 'none' } });
    const tc = i % 2 === 0 ? WHITE : NAVY;
    s.addText('\u2714  ' + t, { x: x + 0.15, y, w: cw - 0.3, h: 0.6, valign: 'middle', fontFace: FONT_BODY, fontSize: 13.5, color: tc });
  });
  footer(s, 3, false);
}

// ================= SLIDE 4: WHY REMOTE JOBS =================
{
  const s = pres.addSlide();
  bgSlide(s, WHITE);
  sectionTitle(s, 'Why Remote Jobs?', 'Opportunity Without Borders');
  s.addShape('roundRect', { x: 0.6, y: 1.7, w: 12.1, h: 1.4, rectRadius: 0.12, fill: { color: NAVY }, line: { type: 'none' } });
  s.addText('\U0001f30d More than millions of professionals now work remotely around the world.', {
    x: 0.9, y: 1.85, w: 11.5, h: 1.0, fontFace: FONT_BODY, fontSize: 16, bold: true, color: WHITE, valign: 'middle',
  });
  const benefits = [
    ['\U0001f4b5', 'Dollar Income'],
    ['\U0001f552', 'Flexible Hours'],
    ['\U0001f3e0', 'Work From Home'],
    ['\U0001f30d', 'International Experience'],
    ['\U0001f4c8', 'Better Career Growth'],
  ];
  benefits.forEach(([emoji, label], i) => {
    const x = 0.6 + i * 2.5;
    s.addShape('roundRect', { x, y: 3.4, w: 2.2, h: 1.6, rectRadius: 0.1, fill: { color: LIGHTBG }, line: { type: 'none' } });
    s.addText(emoji, { x, y: 3.5, w: 2.2, h: 0.6, align: 'center', fontFace: FONT_BODY, fontSize: 28 });
    s.addText(label, { x: x + 0.1, y: 4.1, w: 2.0, h: 0.8, align: 'center', valign: 'top', fontFace: FONT_BODY, fontSize: 12, color: NAVY });
  });
  s.addShape('roundRect', { x: 1.5, y: 5.4, w: 10.3, h: 1.0, rectRadius: 0.1, fill: { color: GOLD }, line: { type: 'none' } });
  s.addText('"How many of you want to work for a foreign company one day?"', {
    x: 1.8, y: 5.4, w: 9.7, h: 1.0, align: 'center', valign: 'middle',
    fontFace: FONT_HEAD, fontSize: 18, bold: true, italic: true, color: NAVY,
  });
  footer(s, 4, false);
}

// ================= SLIDE 5: WHAT SKILLS =================
{
  const s = pres.addSlide();
  bgSlide(s, WHITE);
  sectionTitle(s, 'What Skills Are Companies Looking For?', 'Not only programming');

  const colA = ['QA', 'SEO', 'Digital Marketing', 'Graphic Design', 'Video Editing', 'Content Writing', 'Virtual Assistant', 'Customer Support'];
  const colB = ['Software Development', 'AI Prompt Engineering', 'Cloud', 'Cybersecurity'];
  const soft = ['English Communication', 'Problem Solving', 'Learning Ability'];

  s.addText('Technical', { x: 0.6, y: 1.65, w: 3.5, h: 0.35, fontFace: FONT_BODY, fontSize: 14, bold: true, color: NAVY });
  colA.forEach((t, i) => {
    const y = 2.1 + i * 0.5;
    iconCircle(s, 'check', 0.65, y + 0.03, 0.3, GOLD, NAVY, 0.5);
    s.addText(t, { x: 1.1, y, w: 3.5, h: 0.4, fontFace: FONT_BODY, fontSize: 13, color: NAVY });
  });

  s.addText('Also in demand', { x: 5.0, y: 1.65, w: 3.5, h: 0.35, fontFace: FONT_BODY, fontSize: 14, bold: true, color: NAVY });
  colB.forEach((t, i) => {
    const y = 2.1 + i * 0.5;
    iconCircle(s, 'check', 5.05, y + 0.03, 0.3, GOLD, NAVY, 0.5);
    s.addText(t, { x: 5.5, y, w: 3.5, h: 0.4, fontFace: FONT_BODY, fontSize: 13, color: NAVY });
  });

  s.addText('Soft Skills', { x: 9.4, y: 1.65, w: 3.5, h: 0.35, fontFace: FONT_BODY, fontSize: 14, bold: true, color: NAVY });
  soft.forEach((t, i) => {
    const y = 2.1 + i * 0.5;
    iconCircle(s, 'check', 9.45, y + 0.03, 0.3, GOLD, NAVY, 0.5);
    s.addText(t, { x: 9.9, y, w: 3.0, h: 0.4, fontFace: FONT_BODY, fontSize: 13, color: NAVY });
  });

  s.addShape('roundRect', { x: 0.6, y: 5.0, w: 12.1, h: 1.0, rectRadius: 0.1, fill: { color: NAVY }, line: { type: 'none' } });
  s.addText('Companies hire for SKILLS, not just degrees. Even one skill can open global doors.', {
    x: 0.9, y: 5.0, w: 11.5, h: 1.0, align: 'center', valign: 'middle',
    fontFace: FONT_BODY, fontSize: 14, bold: true, italic: true, color: WHITE,
  });
  footer(s, 5, false);
}

// ================= SLIDE 6: LINKEDIN =================
{
  const s = pres.addSlide();
  bgSlide(s, NAVY);
  sectionTitle(s, 'LinkedIn', 'Your Digital Resume', { dark: true });

  s.addText('Imagine:', { x: 0.6, y: 1.7, w: 5, h: 0.35, fontFace: FONT_BODY, fontSize: 14, bold: true, color: GOLD });
  const imgs = [
    ['Facebook', 'Friends'],
    ['Instagram', 'Photos'],
    ['LinkedIn', 'Career'],
  ];
  imgs.forEach(([a, b], i) => {
    const y = 2.2 + i * 0.65;
    s.addText(a, { x: 0.8, y, w: 2.2, h: 0.4, fontFace: FONT_HEAD, fontSize: 16, bold: true, color: WHITE });
    s.addText('=', { x: 3.1, y, w: 0.4, h: 0.4, fontFace: FONT_HEAD, fontSize: 18, bold: true, color: GOLD, align: 'center' });
    s.addText(b, { x: 3.6, y, w: 3, h: 0.4, fontFace: FONT_BODY, fontSize: 15, italic: true, color: ICE });
  });

  s.addShape('roundRect', { x: 7.0, y: 1.7, w: 5.8, h: 3.6, rectRadius: 0.14, fill: { color: NAVY_DARK }, line: { type: 'none' } });
  s.addText('Companies search LinkedIn\nevery day.', {
    x: 7.3, y: 1.9, w: 5.2, h: 0.9, fontFace: FONT_HEAD, fontSize: 18, bold: true, color: WHITE,
  });
  s.addText('A good profile works\neven while you\u2019re sleeping.', {
    x: 7.3, y: 3.0, w: 5.2, h: 0.9, fontFace: FONT_BODY, fontSize: 16, italic: true, color: GOLD,
  });
  s.addShape('ellipse', { x: 11.0, y: 3.8, w: 1.2, h: 1.2, fill: { color: GOLD }, line: { type: 'none' } });
  s.addText('Zzz', { x: 11.0, y: 3.8, w: 1.2, h: 1.2, align: 'center', valign: 'middle', fontFace: FONT_BODY, fontSize: 18, bold: true, color: NAVY });

  footer(s, 6, true);
}

// ================= SLIDE 7: BUILD PROFILE =================
{
  const s = pres.addSlide();
  bgSlide(s, WHITE);
  sectionTitle(s, 'Build a Powerful LinkedIn Profile', 'Your digital resume needs attention');

  const items = [
    ['Profile Photo', 'Professional'],
    ['Headline', 'Instead of "Student" \u2192 write "QA Engineer | Software Engineering Student" or "SEO Specialist | Digital Marketing Learner"'],
    ['Banner', 'Show your skills'],
    ['About Section', 'Tell your story'],
    ['Experience', 'List projects, internships, volunteer work'],
    ['Certificates', 'Add relevant certifications'],
    ['Skills', 'Add skills recruiters search for'],
    ['Recommendations', 'Ask mentors and peers'],
  ];
  items.forEach(([label, desc], i) => {
    const y = 1.65 + i * 0.62;
    iconCircle(s, 'check', 0.65, y + 0.02, 0.35, NAVY, GOLD, 0.5);
    s.addText(label, { x: 1.2, y, w: 2.5, h: 0.35, fontFace: FONT_BODY, fontSize: 12.5, bold: true, color: NAVY });
    s.addText(desc, { x: 3.8, y, w: 9.0, h: 0.45, fontFace: FONT_BODY, fontSize: 11.5, color: GRAY, valign: 'top' });
  });
  footer(s, 7, false);
}

// ================= SLIDE 8: CHOOSE NICHE =================
{
  const s = pres.addSlide();
  bgSlide(s, WHITE);
  sectionTitle(s, 'Choose One Niche', 'Become known for ONE thing first');

  s.addShape('roundRect', { x: 0.6, y: 1.7, w: 5.5, h: 3.0, rectRadius: 0.12, fill: { color: '#FFE5E5' }, line: { type: 'none' } });
  s.addText('Don\u2019t write', { x: 0.9, y: 1.85, w: 5, h: 0.4, fontFace: FONT_BODY, fontSize: 15, bold: true, color: '#CC0000' });
  ['Developer', 'Designer', 'SEO', 'QA', 'Marketing', 'Everything'].forEach((t, i) => {
    const y = 2.4 + i * 0.38;
    s.addText('\u2717  ' + t, { x: 1.0, y, w: 4, h: 0.35, fontFace: FONT_BODY, fontSize: 12.5, color: '#CC0000' });
  });

  s.addShape('roundRect', { x: 7.2, y: 1.7, w: 5.5, h: 3.0, rectRadius: 0.12, fill: { color: '#E5FFE5' }, line: { type: 'none' } });
  s.addText('Instead choose', { x: 7.5, y: 1.85, w: 5, h: 0.4, fontFace: FONT_BODY, fontSize: 15, bold: true, color: '#006600' });
  ['QA Tester', 'Digital Marketing', 'Frontend Developer', 'Graphic Designer', 'Recruiter', 'Data Analyst'].forEach((t, i) => {
    const y = 2.4 + i * 0.38;
    s.addText('\u2714  ' + t, { x: 7.6, y, w: 5, h: 0.35, fontFace: FONT_BODY, fontSize: 12.5, color: '#006600' });
  });

  s.addShape('roundRect', { x: 0.6, y: 5.1, w: 12.1, h: 1.0, rectRadius: 0.1, fill: { color: GOLD }, line: { type: 'none' } });
  s.addText('Tip:  Pick ONE skill. Master it. Show it. Get hired for it.', {
    x: 0.9, y: 5.1, w: 11.5, h: 1.0, align: 'center', valign: 'middle',
    fontFace: FONT_HEAD, fontSize: 16, bold: true, color: NAVY,
  });
  footer(s, 8, false);
}

// ================= SLIDE 9: SEARCH JOBS ON LINKEDIN =================
{
  const s = pres.addSlide();
  bgSlide(s, WHITE);
  sectionTitle(s, 'Searching Jobs on LinkedIn', 'Use filters to find the right opportunities');

  const filters = ['Remote', 'Easy Apply', 'Experience Level', 'Location', 'Date Posted', 'Keywords'];
  const cw9 = 1.85, gap9 = 0.2;
  filters.forEach((t, i) => {
    const x = 0.6 + i * (cw9 + gap9);
    chip(s, t, x, 1.7, cw9, 0.5, NAVY, GOLD);
  });

  s.addText('Keywords', { x: 0.6, y: 2.5, w: 5, h: 0.35, fontFace: FONT_BODY, fontSize: 14, bold: true, color: NAVY });
  const kws = ['QA Engineer', 'SEO Executive', 'Frontend Developer', 'Marketing Intern', 'Virtual Assistant', 'Recruiter'];
  let kx = 0.6, ky = 2.95;
  kws.forEach((t) => {
    const w = 0.4 + t.length * 0.1;
    if (kx + w > 6.5) { kx = 0.6; ky += 0.55; }
    chip(s, t, kx, ky, w, 0.45, WHITE, NAVY);
    kx += w + 0.12;
  });

  s.addShape('roundRect', { x: 7.2, y: 2.5, w: 5.5, h: 2.5, rectRadius: 0.14, fill: { color: NAVY }, line: { type: 'none' } });
  s.addText('Daily Habit', { x: 7.5, y: 2.65, w: 5, h: 0.4, fontFace: FONT_BODY, fontSize: 16, bold: true, color: GOLD });
  s.addText('Apply to 10 jobs\nevery day.', {
    x: 7.5, y: 3.2, w: 5, h: 1.2, fontFace: FONT_HEAD, fontSize: 28, bold: true, color: WHITE,
  });
  s.addText('Consistency > Intensity', {
    x: 7.5, y: 4.2, w: 5, h: 0.5, fontFace: FONT_BODY, fontSize: 13, italic: true, color: ICE,
  });

  footer(s, 9, false);
}

// ================= SLIDE 10: SEARCH OUTSIDE =================
{
  const s = pres.addSlide();
  bgSlide(s, WHITE);
  sectionTitle(s, 'Searching Jobs Outside LinkedIn', 'Not all jobs are on LinkedIn');

  const columns = [
    ['Career Websites', ['Wellfound', 'Remote OK', 'We Work Remotely', 'FlexJobs', 'Indeed', 'Glassdoor']],
    ['Company Career Pages', ['Many companies post jobs only on their own websites']],
    ['Remote Job Platforms', ['Upwork', 'Fiverr', 'Toptal', 'AngelList']],
  ];
  columns.forEach(([title, items], i) => {
    const x = 0.6 + i * 4.2;
    s.addShape('roundRect', { x, y: 1.7, w: 3.9, h: 3.2, rectRadius: 0.12, fill: { color: i % 2 === 0 ? NAVY : LIGHTBG }, line: { type: 'none' } });
    const tc = i % 2 === 0 ? WHITE : NAVY;
    s.addText(title, { x: x + 0.2, y: 1.85, w: 3.5, h: 0.4, fontFace: FONT_BODY, fontSize: 14, bold: true, color: GOLD });
    items.forEach((t, j) => {
      const y = 2.45 + j * 0.5;
      s.addText('\u2022  ' + t, { x: x + 0.3, y, w: 3.4, h: 0.4, fontFace: FONT_BODY, fontSize: 12, color: tc });
    });
  });

  s.addShape('roundRect', { x: 0.6, y: 5.2, w: 12.1, h: 0.8, rectRadius: 0.1, fill: { color: GOLD }, line: { type: 'none' } });
  s.addText('Tip:  Many companies post jobs only on their own websites. Follow your target companies!', {
    x: 0.9, y: 5.2, w: 11.5, h: 0.8, align: 'center', valign: 'middle',
    fontFace: FONT_BODY, fontSize: 13, bold: true, color: NAVY,
  });
  footer(s, 10, false);
}

// ================= SLIDE 11: GOOGLE X-RAY =================
{
  const s = pres.addSlide();
  bgSlide(s, WHITE);
  sectionTitle(s, 'Google X-Ray Search', 'Instead of searching manually \u2014 use Google.');

  const examples = [
    { label: 'Find QA professionals', query: 'site:linkedin.com/in "QA Engineer" Nepal' },
    { label: 'Find SEO jobs', query: 'site:linkedin.com/jobs "SEO"' },
    { label: 'Find remote jobs', query: 'site:company.com careers remote developer' },
  ];
  examples.forEach((ex, i) => {
    const y = 1.7 + i * 1.3;
    iconCircle(s, 'globe', 0.65, y + 0.1, 0.45, NAVY, GOLD, 0.5);
    s.addText(ex.label, { x: 1.35, y, w: 4, h: 0.35, fontFace: FONT_BODY, fontSize: 14, bold: true, color: NAVY });
    s.addShape('roundRect', { x: 0.6, y: y + 0.4, w: 12.1, h: 0.6, rectRadius: 0.08, fill: { color: LIGHTBG }, line: { type: 'none' } });
    s.addText(ex.query, { x: 0.85, y: y + 0.4, w: 11.6, h: 0.6, valign: 'middle', fontFace: 'Courier New', fontSize: 13, color: NAVY });
  });

  s.addShape('roundRect', { x: 0.6, y: 5.3, w: 12.1, h: 0.8, rectRadius: 0.1, fill: { color: NAVY }, line: { type: 'none' } });
  s.addText('X-Ray search helps you find jobs and people that don\u2019t show up in normal searches.', {
    x: 0.9, y: 5.3, w: 11.5, h: 0.8, align: 'center', valign: 'middle',
    fontFace: FONT_BODY, fontSize: 13, italic: true, color: WHITE,
  });
  footer(s, 11, false);
}

// ================= SLIDE 12: AI FOR JOB HUNTING =================
{
  const s = pres.addSlide();
  bgSlide(s, WHITE);
  sectionTitle(s, 'AI Makes It Easy', 'Use ChatGPT to speed up your job search');

  const prompts = [
    'Create Google search links to find remote QA Engineer jobs in Australia.',
    'Generate Boolean search for SEO Specialist.',
    'Generate LinkedIn search strings for a Frontend Developer.',
  ];
  prompts.forEach((p, i) => {
    const y = 1.7 + i * 1.2;
    s.addShape('roundRect', { x: 0.6, y, w: 12.1, h: 0.9, rectRadius: 0.1, fill: { color: LIGHTBG }, line: { type: 'none' } });
    s.addText('Prompt ' + (i + 1), { x: 0.8, y: y + 0.05, w: 1.5, h: 0.3, fontFace: FONT_BODY, fontSize: 10, bold: true, color: GOLD });
    s.addText(p, { x: 0.8, y: y + 0.3, w: 11.6, h: 0.5, fontFace: FONT_BODY, fontSize: 13, color: NAVY });
  });

  s.addShape('roundRect', { x: 0.6, y: 5.0, w: 12.1, h: 1.0, rectRadius: 0.12, fill: { color: NAVY }, line: { type: 'none' } });
  s.addText('\U0001f916  Show students live during class.', {
    x: 0.9, y: 5.0, w: 11.5, h: 1.0, align: 'center', valign: 'middle',
    fontFace: FONT_BODY, fontSize: 16, bold: true, color: GOLD,
  });

  footer(s, 12, false);
}

// ================= SLIDE 13: NETWORKING =================
{
  const s = pres.addSlide();
  bgSlide(s, WHITE);
  sectionTitle(s, 'Networking', 'Your Network = Your Net Worth');

  const targets = ['Recruiters', 'HR', 'Founders', 'Developers', 'Managers', 'Industry Experts'];
  const cw13 = 1.85, gap13 = 0.2;
  targets.forEach((t, i) => {
    const x = 0.6 + i * (cw13 + gap13);
    chip(s, t, x, 1.7, cw13, 0.5, WHITE, NAVY);
  });

  s.addText('Always send a short note', { x: 0.6, y: 2.5, w: 5, h: 0.35, fontFace: FONT_BODY, fontSize: 14, bold: true, color: NAVY });

  s.addShape('roundRect', { x: 0.6, y: 3.0, w: 12.1, h: 2.2, rectRadius: 0.12, fill: { color: LIGHTBG }, line: { type: 'none' } });
  s.addText('Example Message', { x: 0.9, y: 3.15, w: 4, h: 0.35, fontFace: FONT_BODY, fontSize: 12, bold: true, color: GRAY });
  s.addText('Hello Sarah,\n\nI\u2019m learning QA Testing and really enjoy your content.\nI\u2019d love to connect.', {
    x: 0.9, y: 3.6, w: 11.5, h: 1.4, fontFace: FONT_BODY, fontSize: 14, italic: true, color: NAVY,
  });

  footer(s, 13, false);
}

// ================= SLIDE 14: CONTENT =================
{
  const s = pres.addSlide();
  bgSlide(s, NAVY);
  sectionTitle(s, 'Content Creates Opportunities', "Don't only consume. Share.", { dark: true });

  const ideas = [
    'Learning Journey',
    'Projects',
    'Certificates',
    'Internship Experience',
    'Coding Tips',
    'SEO Tips',
    'QA Tips',
    'Class Notes',
  ];
  const cw14 = 2.85, gap14 = 0.2;
  ideas.forEach((t, i) => {
    const col = i % 4, row = Math.floor(i / 4);
    const x = 0.6 + col * (cw14 + gap14);
    const y = 1.7 + row * 1.5;
    s.addShape('roundRect', { x, y, w: cw14, h: 1.2, rectRadius: 0.1, fill: { color: i % 2 === 0 ? NAVY_DARK : LIGHTBG }, line: { type: 'none' } });
    const tc = i % 2 === 0 ? WHITE : NAVY;
    s.addText('\u2714  ' + t, { x: x + 0.15, y, w: cw14 - 0.3, h: 1.2, valign: 'middle', fontFace: FONT_BODY, fontSize: 14, bold: true, color: tc });
  });

  s.addText('Even beginners can create valuable content. Start today.', {
    x: 0.6, y: 5.0, w: 12.1, h: 0.6, align: 'center', fontFace: FONT_HEAD, fontSize: 16, italic: true, color: GOLD,
  });
  footer(s, 14, true);
}

// ================= SLIDE 15: HASHTAGS & LINKS =================
{
  const s = pres.addSlide();
  bgSlide(s, WHITE);
  sectionTitle(s, 'Visibility', 'Hashtags & Links');

  s.addText('Example Hashtags', { x: 0.6, y: 1.6, w: 5, h: 0.35, fontFace: FONT_BODY, fontSize: 14, bold: true, color: NAVY });
  const tags = ['#LinkedIn', '#OpenToWork', '#Hiring', '#QA', '#SEO', '#DigitalMarketing', '#SoftwareEngineering', '#RemoteJobs', '#Nepal', '#Career'];
  let tx = 0.6, ty = 2.05;
  tags.forEach((t) => {
    const w = 0.42 + t.length * 0.1;
    if (tx + w > 6.2) { tx = 0.6; ty += 0.55; }
    chip(s, t, tx, ty, w, 0.46, NAVY, GOLD);
    tx += w + 0.15;
  });

  s.addText('Always', { x: 0.6, y: 4.5, w: 5, h: 0.35, fontFace: FONT_BODY, fontSize: 14, bold: true, color: NAVY });
  const always = ['Tag companies', 'Tag mentors'];
  let ay = 4.95;
  always.forEach((t) => {
    s.addImage({ path: ic('check', 'gold'), x: 0.62, y: ay + 0.02, w: 0.28, h: 0.28 });
    s.addText(t, { x: 1.05, y: ay, w: 4.5, h: 0.4, fontFace: FONT_BODY, fontSize: 13.5, color: NAVY });
    ay += 0.48;
  });

  s.addShape('roundRect', { x: 7.15, y: 1.6, w: 5.55, h: 4.55, rectRadius: 0.14, fill: { color: NAVY }, line: { type: 'none' } });
  s.addText('Add Portfolio Links', { x: 7.5, y: 1.85, w: 5, h: 0.4, fontFace: FONT_BODY, fontSize: 15, bold: true, color: GOLD });
  const links = [['code', 'GitHub'], ['palette', 'Behance'], ['globe', 'Personal Website'], ['linkedin', 'LinkedIn']];
  let ly2 = 2.45;
  links.forEach(([icon, txt]) => {
    iconRow(s, 7.5, ly2, 4.9, icon, txt, null, { d: 0.5, circleColor: NAVY_DARK, iconColor: GOLD });
    ly2 += 0.72;
  });
  footer(s, 15, false);
}

// ================= SLIDE 16: MY JOURNEY =================
{
  const s = pres.addSlide();
  bgSlide(s, NAVY);
  sectionTitle(s, 'Personal Story', 'My Journey', { dark: true });
  s.addText('Share your real story.', { x: 0.6, y: 1.55, w: 8, h: 0.35, fontFace: FONT_BODY, fontSize: 13, italic: true, color: ICE });

  const steps = [
    'Started as a student.',
    'Learned Recruiting.',
    'Connected with people worldwide.',
    'Worked with international companies.',
    'Started AwayTechs.',
    'Helping candidates get opportunities globally.',
    'Teaching students today.',
  ];
  const startY = 2.05, rowH = 0.58;
  steps.forEach((t, i) => {
    const y = startY + i * rowH;
    s.addShape('ellipse', { x: 0.7, y: y + 0.03, w: 0.32, h: 0.32, fill: { color: GOLD }, line: { type: 'none' } });
    s.addText(String(i + 1), { x: 0.7, y: y + 0.03, w: 0.32, h: 0.32, align: 'center', valign: 'middle', fontFace: FONT_BODY, fontSize: 11, bold: true, color: NAVY });
    s.addText(t, { x: 1.25, y, w: 10.8, h: 0.4, fontFace: FONT_BODY, fontSize: 14.5, color: WHITE, valign: 'middle' });
    if (i < steps.length - 1) {
      s.addShape('line', { x: 0.86, y: y + 0.38, w: 0, h: rowH - 0.35, line: { color: ICE, width: 1.25, dashType: 'dash' } });
    }
  });
  s.addText('This personal story will be your strongest slide.', {
    x: 0.6, y: startY + steps.length * rowH + 0.1, w: 12.1, h: 0.4, align: 'center', fontFace: FONT_HEAD, fontSize: 14, italic: true, color: GOLD,
  });
  footer(s, 16, true);
}

// ================= SLIDE 17: BEYOND RECRUITMENT =================
{
  const s = pres.addSlide();
  bgSlide(s, WHITE);
  sectionTitle(s, 'Bigger Picture', 'Beyond Recruitment');
  s.addText('I also build connections through', { x: 0.6, y: 1.55, w: 8, h: 0.35, fontFace: FONT_BODY, fontSize: 13.5, italic: true, color: GRAY });

  const items = [
    ['building', 'AwayTechs'],
    ['pen', 'Content Creation'],
    ['seedling', 'WWOOF Hosting'],
    ['laptop', 'Technology Community'],
    ['handshake', 'Helping Startups Hire Talent'],
    ['globe', 'Meeting People from Different Countries'],
  ];
  const cw5 = 5.9;
  items.forEach(([icon, txt], i) => {
    const col = Math.floor(i / 3), row = i % 3;
    iconRow(s, 0.6 + col * (cw5 + 0.5), 2.05 + row * 0.85, cw5, icon, txt, null, { d: 0.55 });
  });
  s.addShape('roundRect', { x: 0.6, y: 5.0, w: 12.1, h: 1.1, rectRadius: 0.14, fill: { color: GOLD }, line: { type: 'none' } });
  s.addText("Lesson:  Your career isn\u2019t limited to one skill.", {
    x: 0.9, y: 5.0, w: 11.5, h: 1.1, valign: 'middle', fontFace: FONT_HEAD, fontSize: 18, bold: true, italic: true, color: NAVY,
  });
  footer(s, 17, false);
}

// ================= SLIDE 18: SUCCESS FORMULA =================
{
  const s = pres.addSlide();
  bgSlide(s, WHITE);
  sectionTitle(s, 'The Formula', 'Success Formula');

  const steps = ['Learn', 'Build Skills', 'Build LinkedIn', 'Network', 'Create Content', 'Apply Consistently', 'Keep Learning', 'Get Opportunities'];
  const cols = 4, cw6 = 2.85, ch6 = 1.5, gapx = 0.2, gapy = 0.5;
  const totalW = cols * cw6 + (cols - 1) * gapx;
  const startX = (W - totalW) / 2;
  steps.forEach((label, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    const x = startX + col * (cw6 + gapx);
    const y = 1.85 + row * (ch6 + gapy);
    const isLast = i === steps.length - 1;
    s.addShape('roundRect', {
      x, y, w: cw6, h: ch6, rectRadius: 0.12,
      fill: { color: isLast ? GOLD : (i % 2 === 0 ? NAVY : LIGHTBG) },
      line: { type: 'none' },
    });
    const textColor = isLast ? NAVY : (i % 2 === 0 ? WHITE : NAVY);
    s.addText(String(i + 1), {
      x: x + 0.15, y: y + 0.1, w: 0.6, h: 0.4, fontFace: FONT_HEAD, fontSize: 15, bold: true,
      color: isLast ? NAVY_DARK : (i % 2 === 0 ? GOLD : GOLD),
    });
    s.addText(label, { x: x + 0.15, y: y + 0.5, w: cw6 - 0.3, h: 0.9, fontFace: FONT_BODY, fontSize: 15, bold: true, color: textColor, valign: 'top' });
    if (col < cols - 1) {
      s.addImage({ path: ic('arrowdown', 'gold'), x: x + cw6 + 0.02, y: y + ch6 / 2 - 0.12, w: 0.24, h: 0.24, rotate: 270 });
    }
  });
  footer(s, 18, false);
}

// ================= SLIDE 19: ACTION PLAN =================
{
  const s = pres.addSlide();
  bgSlide(s, WHITE);
  sectionTitle(s, 'Take Action', 'Action Plan');

  const plan = [
    ['calendar', 'Today', ['Create LinkedIn']],
    ['calendar', 'Tomorrow', ['Complete Profile']],
    ['calendar', 'This Week', ['Connect with 30 professionals']],
    ['calendar', 'This Month', ['Publish 4 posts', 'Apply to 50 jobs', 'Build one project']],
  ];
  const cw7 = 2.95, gap7 = 0.15;
  plan.forEach(([icon, label, tasks], i) => {
    const x = 0.6 + i * (cw7 + gap7);
    const bg = i === 3 ? NAVY : LIGHTBG;
    s.addShape('roundRect', { x, y: 1.7, w: cw7, h: 4.5, rectRadius: 0.14, fill: { color: bg }, line: { type: 'none' } });
    iconCircle(s, icon, x + cw7 / 2 - 0.35, 1.95, 0.7, i === 3 ? GOLD : NAVY, i === 3 ? NAVY : WHITE, 0.5);
    const tc = i === 3 ? WHITE : NAVY;
    s.addText(label, { x: x + 0.15, y: 2.8, w: cw7 - 0.3, h: 0.4, align: 'center', fontFace: FONT_BODY, fontSize: 15, bold: true, color: tc });
    let ty2 = 3.35;
    tasks.forEach((t) => {
      s.addText('\u2022  ' + t, { x: x + 0.2, y: ty2, w: cw7 - 0.4, h: 0.7, fontFace: FONT_BODY, fontSize: 11.5, color: i === 3 ? ICE : GRAY, valign: 'top' });
      ty2 += 0.75;
    });
  });
  footer(s, 19, false);
}

// ================= SLIDE 20: FINAL MESSAGE =================
{
  const s = pres.addSlide();
  bgSlide(s, NAVY);
  s.addShape('ellipse', { x: -2, y: 4.2, w: 6, h: 6, fill: { color: NAVY_DARK }, line: { type: 'none' } });

  s.addText("Don't wait until graduation.\nStart today.", {
    x: 0.8, y: 0.9, w: 11.7, h: 1.6, align: 'center', fontFace: FONT_HEAD, fontSize: 34, bold: true, color: WHITE,
  });
  s.addText('Your next employer may be sitting in', {
    x: 0.8, y: 2.65, w: 11.7, h: 0.4, align: 'center', fontFace: FONT_BODY, fontSize: 15, italic: true, color: ICE,
  });
  const countries = ['USA', 'Australia', 'Singapore', 'Japan', 'Europe'];
  const cw8 = 1.95, gap8 = 0.2;
  const totalW2 = countries.length * cw8 + (countries.length - 1) * gap8;
  let cx3 = (W - totalW2) / 2;
  countries.forEach((c) => {
    chip(s, c, cx3, 3.2, cw8, 0.55, GOLD, NAVY);
    cx3 += cw8 + gap8;
  });
  s.addText("while you\u2019re sitting in Pokhara.", {
    x: 0.8, y: 4.0, w: 11.7, h: 0.6, align: 'center', fontFace: FONT_HEAD, fontSize: 22, italic: true, color: WHITE,
  });
  iconCircle(s, 'globe', W / 2 - 0.55, 4.95, 1.1, NAVY_DARK, GOLD, 0.55);
  footer(s, 20, true);
}

// ================= SLIDE 21: BONUS - LIVE DEMO =================
{
  const s = pres.addSlide();
  bgSlide(s, WHITE);
  sectionTitle(s, 'Bonus', 'Live Demo');

  const demo = [
    'Create a LinkedIn profile from scratch',
    'Optimize a headline with AI',
    'Search for remote jobs on LinkedIn',
    'Search company career pages',
    'Use Google X-Ray search',
    'Ask ChatGPT to generate Google dorks',
    'Send a connection request',
    'Publish a simple LinkedIn post',
  ];
  const colW2 = 5.9;
  demo.forEach((t, i) => {
    const col = Math.floor(i / 4), row = i % 4;
    const x = 0.6 + col * (colW2 + 0.5), y = 1.65 + row * 0.72;
    iconCircle(s, 'check', x, y, 0.45, GOLD, NAVY, 0.5);
    s.addText(t, { x: x + 0.6, y: y - 0.05, w: colW2 - 0.6, h: 0.55, valign: 'middle', fontFace: FONT_BODY, fontSize: 13, color: NAVY });
  });

  s.addShape('roundRect', { x: 0.6, y: 5.0, w: 8.1, h: 1.9, rectRadius: 0.14, fill: { color: NAVY }, line: { type: 'none' } });
  s.addText('Scan to connect with me on LinkedIn', {
    x: 0.95, y: 5.25, w: 5.4, h: 0.4, fontFace: FONT_BODY, fontSize: 14, bold: true, color: WHITE,
  });
  s.addText('Sushil Bastola \u2014 Founder, AwayTechs Recruitment', {
    x: 0.95, y: 5.7, w: 5.4, h: 0.9, fontFace: FONT_BODY, fontSize: 11.5, italic: true, color: ICE, valign: 'top',
  });
  s.addShape('roundRect', { x: 6.6, y: 5.2, w: 1.5, h: 1.5, rectRadius: 0.08, fill: { color: WHITE }, line: { type: 'none' } });
  s.addImage({ path: ic('qrcode', 'navy'), x: 6.85, y: 5.45, w: 1.0, h: 1.0 });

  s.addShape('roundRect', { x: 8.95, y: 5.0, w: 3.75, h: 1.9, rectRadius: 0.14, fill: { color: LIGHTBG }, line: { type: 'none' } });
  s.addText('Design note', { x: 9.2, y: 5.2, w: 3.3, h: 0.35, fontFace: FONT_BODY, fontSize: 12, bold: true, color: NAVY });
  s.addText('Dark blue & white theme. One idea per slide. Live screenshots encouraged.', {
    x: 9.2, y: 5.55, w: 3.3, h: 1.25, fontFace: FONT_BODY, fontSize: 10.5, italic: true, color: GRAY, valign: 'top',
  });
  footer(s, 21, false);
}

pres.writeFile({ fileName: 'output/LinkedIn_Career_Guide.pptx' }).then(() => {
  console.log('Presentation saved to output/LinkedIn_Career_Guide.pptx');
}).catch((err) => {
  console.error('Error:', err);
});

module.exports = {};
