const PptxGenJS = require("pptxgenjs");

const pres = new PptxGenJS();
pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
pres.author = "Sushil Bastola";
pres.title = "LinkedIn & Career Guide";

const W = 13.333;
const H = 7.5;

const NAVY = "1B2A4A";
const NAVY_DARK = "0F1A33";
const ICE = "D6E4F0";
const WHITE = "FFFFFF";
const GOLD = "F5C518";
const GRAY = "666666";
const LIGHTBG = "F0F4F8";

const FONT_HEAD = "Calibri";
const FONT_BODY = "Calibri";

// --- SVG icons as data URIs ---
const fs = require("fs");
const path = require("path");

const ICON_DIR = path.resolve(__dirname, "icons");
if (!fs.existsSync(ICON_DIR)) {
  fs.mkdirSync(ICON_DIR, { recursive: true });
}

const SVG_MAP = {
  check: `<polyline points="20 6 9 17 4 12"/>`,
  code: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
  palette: `<circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="10.5" r="1.5"/><circle cx="10.5" cy="17.5" r="1.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.52-4.48-10-10-10z"/>`,
  globe: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
  linkedin: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>`,
  building: `<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><line x1="8" y1="6" x2="10" y2="6"/><line x1="14" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="10" y2="14"/><line x1="14" y1="14" x2="16" y2="14"/>`,
  pen: `<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>`,
  seedling: `<path d="M12 22v-9"/><path d="M12 13c-2.5 0-4.5-2-5-4 0-2 1-4 3-5 1-1 3-1 5-1 1 0 3 .3 4 1 1.5 1 2.5 3 2.5 5 0 2-1 4-4.5 5 1.5 0 3-1 4-2"/>`,
  laptop: `<path d="M20 7v10H4V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/><path d="M1 17h22v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1z"/>`,
  handshake: `<path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>`,
  calendar: `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`,
  arrowdown: `<line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>`,
  qrcode: `<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="4" height="4"/><line x1="3" y1="21" x2="3" y2="21"/><line x1="21" y1="3" x2="21" y2="3"/>`,
};

const COLOR_MAP = {
  navy: "1B2A4A",
  gold: "F5C518",
  white: "FFFFFF",
  black: "000000",
};

function ic(name, color = "1B2A4A") {
  color = COLOR_MAP[color] || color;
  const filename = `${name}_${color}.svg`;
  const filepath = path.join(ICON_DIR, filename);
  if (!fs.existsSync(filepath)) {
    const svg = SVG_MAP[name] || "";
    const content = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><g fill="none" stroke="#${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svg}</g></svg>`;
    fs.writeFileSync(filepath, content, "utf-8");
  }
  return filepath;
}

// --- Helpers ---

function bgSlide(s, color) {
  s.background = { fill: color };
}

function sectionTitle(s, subtitle, title, opts = {}) {
  const isDark = opts.dark;
  const tc = isDark ? WHITE : NAVY;
  const sc = isDark ? ICE : GRAY;
  s.addText(subtitle, {
    x: 0.6,
    y: 0.3,
    w: 8,
    h: 0.4,
    fontFace: FONT_BODY,
    fontSize: 13,
    color: sc,
  });
  s.addText(title, {
    x: 0.6,
    y: 0.65,
    w: 12,
    h: 0.55,
    fontFace: FONT_HEAD,
    fontSize: 26,
    bold: true,
    color: tc,
  });
  s.addShape("line", {
    x: 0.6,
    y: 1.3,
    w: 1.5,
    h: 0,
    line: { color: GOLD, width: 3 },
  });
}

function chip(s, text, x, y, w, h, textColor, bgColor) {
  s.addShape("roundRect", {
    x,
    y,
    w,
    h,
    rectRadius: 0.08,
    fill: { color: bgColor },
    line: { type: "none" },
  });
  s.addText(text, {
    x,
    y,
    w,
    h,
    align: "center",
    valign: "middle",
    fontFace: FONT_BODY,
    fontSize: 11,
    bold: true,
    color: textColor,
  });
}

function iconCircle(s, icon, x, y, d, bg, iconColor, iconSize) {
  s.addShape("ellipse", {
    x,
    y,
    w: d,
    h: d,
    fill: { color: bg },
    line: { type: "none" },
  });
  const pad = d * 0.22;
  s.addImage({
    path: ic(icon, iconColor),
    x: x + pad,
    y: y + pad,
    w: d - pad * 2,
    h: d - pad * 2,
  });
}

function iconRow(s, x, y, w, icon, label, desc, opts = {}) {
  const d = opts.d || 0.55;
  const circleColor = opts.circleColor || NAVY;
  const iconColor = opts.iconColor || WHITE;
  iconCircle(s, icon, x, y + (0.55 - d) / 2, d, circleColor, iconColor, 0.45);
  s.addText(label, {
    x: x + d + 0.2,
    y: y + 0.02,
    w: w - d - 0.2,
    h: 0.5,
    valign: "middle",
    fontFace: FONT_BODY,
    fontSize: 13.5,
    color: NAVY,
  });
}

function footer(s, num, isDark) {
  const color = isDark ? ICE : GRAY;
  s.addShape("line", {
    x: 0.6,
    y: 7.0,
    w: 12.1,
    h: 0,
    line: { color: isDark ? NAVY_DARK : "E0E0E0", width: 1 },
  });
  s.addText(String(num), {
    x: 12.4,
    y: 6.85,
    w: 0.6,
    h: 0.5,
    align: "center",
    valign: "middle",
    fontFace: FONT_BODY,
    fontSize: 10,
    color,
  });
}

module.exports = {
  pres,
  W,
  H,
  NAVY,
  NAVY_DARK,
  ICE,
  WHITE,
  GOLD,
  GRAY,
  LIGHTBG,
  FONT_HEAD,
  FONT_BODY,
  ic,
  bgSlide,
  footer,
  sectionTitle,
  iconCircle,
  iconRow,
  chip,
};
