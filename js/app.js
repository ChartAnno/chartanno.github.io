/* ============================================================
   ChartAnno project page — leaderboard rendering
   Data: Table 1 (Code / Code + Image) and the Image-only
   ablation table from the paper.
   Each level is [Exec, Struct, Sem, Design].
   ============================================================ */

const RESULTS = [
  {
    name: "GPT-5.4", group: "prop",
    code: {
      intent: [0.992, 0.870, 3.562, 3.429],
      operation: [0.996, 0.854, 3.674, 3.767],
      implementation: [0.991, 0.903, 4.045, 4.126],
    },
    codeimage: {
      intent: [0.987, 0.856, 3.553, 3.421],
      operation: [0.988, 0.841, 3.603, 3.697],
      implementation: [0.993, 0.897, 4.057, 4.137],
    },
    image: {
      intent: [0.976, 0.140, 3.000, 3.127],
      operation: [0.965, 0.360, 2.796, 3.175],
      implementation: [0.952, 0.395, 2.938, 3.307],
    },
  },
  {
    name: "Gemini 3.1 Pro Preview", group: "prop",
    code: {
      intent: [0.994, 0.922, 3.688, 3.641],
      operation: [0.991, 0.873, 3.777, 3.907],
      implementation: [0.998, 0.919, 4.128, 4.206],
    },
    codeimage: {
      intent: [0.995, 0.917, 3.680, 3.639],
      operation: [0.993, 0.876, 3.780, 3.909],
      implementation: [0.997, 0.916, 4.148, 4.230],
    },
    image: {
      intent: [0.947, 0.137, 3.080, 3.239],
      operation: [0.941, 0.375, 2.874, 3.273],
      implementation: [0.938, 0.409, 2.958, 3.373],
    },
  },
  {
    name: "Gemini 3 Flash Preview", group: "prop",
    code: {
      intent: [0.990, 0.730, 3.590, 3.556],
      operation: [0.985, 0.816, 3.612, 3.801],
      implementation: [0.990, 0.887, 4.005, 4.134],
    },
    codeimage: {
      intent: [0.996, 0.696, 3.600, 3.596],
      operation: [0.988, 0.815, 3.643, 3.816],
      implementation: [0.992, 0.885, 4.006, 4.144],
    },
    image: {
      intent: [0.953, 0.113, 3.062, 3.203],
      operation: [0.957, 0.372, 2.882, 3.292],
      implementation: [0.955, 0.410, 3.070, 3.469],
    },
  },
  {
    name: "Claude Sonnet 4.6", group: "prop",
    code: {
      intent: [0.975, 0.864, 3.493, 3.385],
      operation: [0.963, 0.828, 3.461, 3.571],
      implementation: [0.984, 0.903, 3.999, 4.098],
    },
    codeimage: {
      intent: [0.984, 0.885, 3.512, 3.421],
      operation: [0.974, 0.843, 3.498, 3.646],
      implementation: [0.988, 0.906, 4.020, 4.112],
    },
    image: {
      intent: [0.957, 0.053, 2.897, 3.149],
      operation: [0.945, 0.308, 2.604, 3.131],
      implementation: [0.950, 0.349, 2.683, 3.211],
    },
  },
  {
    name: "Kimi K2.5", group: "open",
    code: {
      intent: [0.973, 0.860, 3.315, 3.267],
      operation: [0.964, 0.812, 3.307, 3.422],
      implementation: [0.969, 0.877, 3.869, 3.959],
    },
    codeimage: {
      intent: [0.983, 0.877, 3.310, 3.280],
      operation: [0.965, 0.818, 3.333, 3.455],
      implementation: [0.972, 0.878, 3.878, 3.961],
    },
    image: {
      intent: [0.942, 0.104, 2.695, 3.028],
      operation: [0.936, 0.337, 2.433, 3.048],
      implementation: [0.928, 0.366, 2.548, 3.114],
    },
  },
  {
    name: "Gemma 4 31B", group: "open",
    code: {
      intent: [0.948, 0.806, 3.200, 3.108],
      operation: [0.929, 0.796, 3.206, 3.292],
      implementation: [0.922, 0.831, 3.624, 3.737],
    },
    codeimage: {
      intent: [0.959, 0.787, 3.159, 3.107],
      operation: [0.940, 0.796, 3.220, 3.334],
      implementation: [0.938, 0.840, 3.681, 3.777],
    },
    image: {
      intent: [0.860, 0.041, 2.373, 2.631],
      operation: [0.857, 0.292, 2.165, 2.658],
      implementation: [0.838, 0.309, 2.188, 2.663],
    },
  },
  {
    name: "Qwen3.5-397B-A17B", group: "open",
    code: {
      intent: [0.933, 0.802, 3.082, 3.012],
      operation: [0.905, 0.752, 3.000, 3.086],
      implementation: [0.948, 0.841, 3.617, 3.736],
    },
    codeimage: {
      intent: [0.953, 0.832, 3.035, 2.988],
      operation: [0.945, 0.780, 3.051, 3.201],
      implementation: [0.945, 0.838, 3.656, 3.770],
    },
    image: {
      intent: [0.821, 0.053, 2.220, 2.415],
      operation: [0.807, 0.269, 1.970, 2.399],
      implementation: [0.820, 0.300, 2.019, 2.474],
    },
  },
  {
    name: "Qwen3.5-122B-A10B", group: "open",
    code: {
      intent: [0.919, 0.800, 2.928, 2.833],
      operation: [0.909, 0.757, 2.886, 2.964],
      implementation: [0.914, 0.818, 3.442, 3.561],
    },
    codeimage: {
      intent: [0.929, 0.808, 2.843, 2.822],
      operation: [0.918, 0.768, 2.885, 3.012],
      implementation: [0.921, 0.819, 3.458, 3.599],
    },
    image: {
      intent: [0.781, 0.052, 1.998, 2.230],
      operation: [0.764, 0.249, 1.738, 2.151],
      implementation: [0.764, 0.279, 1.840, 2.261],
    },
  },
  {
    name: "Qwen3.5-27B", group: "open",
    code: {
      intent: [0.935, 0.828, 2.966, 2.896],
      operation: [0.896, 0.750, 2.830, 2.934],
      implementation: [0.904, 0.813, 3.432, 3.552],
    },
    codeimage: {
      intent: [0.939, 0.828, 2.959, 2.900],
      operation: [0.894, 0.746, 2.837, 2.960],
      implementation: [0.914, 0.821, 3.440, 3.550],
    },
    image: {
      intent: [0.700, 0.055, 1.813, 2.017],
      operation: [0.676, 0.211, 1.593, 1.984],
      implementation: [0.677, 0.224, 1.660, 2.032],
    },
  },
  {
    name: "Qwen3.5-9B", group: "open",
    code: {
      intent: [0.828, 0.676, 2.311, 2.287],
      operation: [0.764, 0.601, 2.158, 2.263],
      implementation: [0.828, 0.719, 2.865, 3.017],
    },
    codeimage: {
      intent: [0.865, 0.732, 2.285, 2.330],
      operation: [0.810, 0.639, 2.238, 2.366],
      implementation: [0.832, 0.715, 2.841, 2.991],
    },
    image: {
      intent: [0.646, 0.018, 1.393, 1.663],
      operation: [0.578, 0.167, 1.164, 1.501],
      implementation: [0.611, 0.197, 1.287, 1.706],
    },
  },
];

const LEVELS = ["intent", "operation", "implementation"];

/* ---------- helpers ---------- */

function fmt(v) {
  return v.toFixed(3);
}

/* Per-column min/max over the visible models, for heatmap shading. */
function columnRanges(models, setting) {
  const ranges = [];
  for (let col = 0; col < 12; col++) {
    let min = Infinity, max = -Infinity;
    for (const m of models) {
      const li = Math.floor(col / 4);
      const k = col % 4;
      const v = m[setting][LEVELS[li]][k];
      if (v < min) min = v;
      if (v > max) max = v;
    }
    ranges.push({ min, max });
  }
  return ranges;
}

/* Single-hue sequential heatmap: paper annogreen, light -> dark with value. */
function heatColor(norm) {
  const alpha = norm * 0.32;
  return "rgba(35, 140, 110, " + alpha.toFixed(3) + ")";
}

function renderBoard(setting) {
  const body = document.getElementById("board-body");
  const frag = document.createDocumentFragment();

  /* Visible models: group filter first, then optional sort. */
  let models = RESULTS.filter((m) => filterValue === "all" || m.group === filterValue);
  if (sortState.col !== null) {
    models = models.slice().sort((a, b) => {
      const va = cellValue(a, sortState.col, setting);
      const vb = cellValue(b, sortState.col, setting);
      const cmp = va < vb ? -1 : va > vb ? 1 : 0;
      return sortState.dir === 1 ? -cmp : cmp;
    });
  }

  const ranges = columnRanges(models, setting);

  /* Column best over the visible set, for bolding. */
  const best = new Array(12).fill(-Infinity);
  for (const m of models) {
    LEVELS.forEach((lv, li) => {
      for (let k = 0; k < 4; k++) {
        const idx = li * 4 + k;
        const v = m[setting][lv][k];
        if (v > best[idx]) best[idx] = v;
      }
    });
  }

  for (const m of models) {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.className = "td-model";
    tdName.textContent = m.name;
    tr.appendChild(tdName);

    LEVELS.forEach((lv, li) => {
      for (let k = 0; k < 4; k++) {
        const td = document.createElement("td");
        td.className = "grp-" + ["a", "b", "c"][li];
        const idx = li * 4 + k;
        const v = m[setting][lv][k];
        td.textContent = fmt(v);
        const r = ranges[idx];
        const norm = r.max > r.min ? (v - r.min) / (r.max - r.min) : 0;
        td.style.backgroundColor = heatColor(norm);
        if (v === best[idx]) td.classList.add("best");
        tr.appendChild(td);
      }
    });
    frag.appendChild(tr);
  }

  body.innerHTML = "";
  body.appendChild(frag);
}

/* ---------- sorting & filtering ---------- */

/* col 0 = model name; cols 1-12 = metric columns. dir: 1 = desc, 2 = asc. */
const sortState = { col: null, dir: 1 };
let filterValue = "all";
let currentSetting = "code";

function cellValue(m, col, setting) {
  if (col === 0) return m.name;
  const li = Math.floor((col - 1) / 4);
  const k = (col - 1) % 4;
  return m[setting][LEVELS[li]][k];
}

function updateSortHeaders() {
  document.querySelectorAll("#board thead .sortable").forEach((th) => {
    const col = Number(th.dataset.col);
    if (sortState.col === col && sortState.dir !== 0) {
      th.dataset.dir = sortState.dir === 1 ? "desc" : "asc";
      th.setAttribute("aria-sort", sortState.dir === 1 ? "descending" : "ascending");
    } else {
      delete th.dataset.dir;
      th.removeAttribute("aria-sort");
    }
  });
}

document.querySelectorAll("#board thead .sortable").forEach((th) => {
  th.addEventListener("click", () => {
    const col = Number(th.dataset.col);
    if (sortState.col === col) {
      sortState.dir += 1;
      if (sortState.dir > 2) {
        sortState.col = null;
        sortState.dir = 1;
      }
    } else {
      sortState.col = col;
      /* Model name sorts A->Z first; metric columns sort high->low first. */
      sortState.dir = col === 0 ? 2 : 1;
    }
    updateSortHeaders();
    renderBoard(currentSetting);
  });
});

/* ---------- tabs ---------- */

const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      const active = t === tab;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", String(active));
    });
    currentSetting = tab.dataset.setting;
    renderBoard(currentSetting);
  });
});

/* ---------- model group filter ---------- */

document.querySelectorAll(".fbtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".fbtn").forEach((b) => b.classList.toggle("active", b === btn));
    filterValue = btn.dataset.filter;
    renderBoard(currentSetting);
  });
});

/* ---------- BibTeX copy ---------- */

const copyBtn = document.getElementById("copy-bibtex");
const copyLabel = document.getElementById("copy-bibtex-label");
if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    const text = document.getElementById("bibtex").textContent;
    const done = () => {
      copyLabel.textContent = "Copied!";
      setTimeout(() => (copyLabel.textContent = "Copy"), 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(done);
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) { /* no-op */ }
      document.body.removeChild(ta);
      done();
    }
  });
}

/* ---------- init ---------- */

/* Optional deep link: index.html?setting=code|codeimage|image */
const params = new URLSearchParams(window.location.search);
const initial = params.get("setting");
const valid = ["code", "codeimage", "image"];
currentSetting = valid.includes(initial) ? initial : "code";

tabs.forEach((t) => {
  const active = t.dataset.setting === currentSetting;
  t.classList.toggle("active", active);
  t.setAttribute("aria-selected", String(active));
});
updateSortHeaders();
renderBoard(currentSetting);

/* ============================================================
   Error cases — metric-level failure showcase.
   EC_CASES (from js/ec-data.js): per metric, four shots —
   input (GT w/o anno), ground truth, high- and low-scored
   model outputs for the same instruction.
   ============================================================ */

const EC_ASSET = "assets/error_cases/";
const EC_SHOTS = [
  { key: "input", label: "Ground Truth\nChart without Annotation", dot: "neutral" },
  { key: "gt", label: "Ground Truth\nChart", dot: "gt" },
  { key: "high", label: "High-score Output", dot: "high" },
  { key: "low", label: "Low-score Output", dot: "low" },
];

let ecIndex = 0;
let ecZoom = -1; /* index into EC_SHOTS while the viewer is open */

function ecCurrent() {
  return EC_CASES[ecIndex];
}

function ecRenderChips() {
  const box = document.getElementById("ec-chips");
  box.innerHTML = "";
  let row = null;
  let lastGroup = null;
  EC_CASES.forEach((c, i) => {
    if (c.group !== lastGroup) {
      row = document.createElement("div");
      row.className = "ec-chip-row";
      const label = document.createElement("span");
      label.className = "grp-label";
      label.textContent = c.group;
      row.appendChild(label);
      box.appendChild(row);
      lastGroup = c.group;
    }
    const chip = document.createElement("button");
    chip.className = "ec-chip" + (i === ecIndex ? " active" : "");
    chip.type = "button";
    chip.setAttribute("role", "tab");
    chip.setAttribute("aria-selected", String(i === ecIndex));
    chip.textContent = c.name;
    chip.addEventListener("click", () => {
      ecIndex = i;
      ecRenderChips();
      ecRenderCase();
    });
    row.appendChild(chip);
  });
}

function ecRenderCase() {
  const c = ecCurrent();
  document.getElementById("ec-name").textContent = c.name;
  const setting = c.setting.replace("Input: ", "");
  document.getElementById("ec-meta").innerHTML =
    '<span class="ec-tag">Sample ID: ' + c.sample + "</span>" +
    '<span class="ec-tag">Chart Input Setting: ' +
    setting.charAt(0).toUpperCase() + setting.slice(1) + "</span>" +
    '<span class="ec-tag">Instruction Level: ' + c.level + "</span>";
  document.getElementById("ec-desc").innerHTML =
    "<b>Definition</b>: " + c.metric + "<br><b>Case</b>: " + c.case;
  document.getElementById("ec-instruction").textContent = c.instruction;

  const strip = document.getElementById("ec-strip");
  strip.innerHTML = "";
  EC_SHOTS.forEach((shot, i) => {
    const cell = document.createElement("figure");
    cell.className = "ec-cell";

    const btn = document.createElement("button");
    btn.className = "shot";
    btn.type = "button";
    btn.setAttribute("aria-label", "Enlarge " + shot.label);
    const img = document.createElement("img");
    img.src = EC_ASSET + c.key + "/" + shot.key + ".jpg";
    img.alt = c.name + " — " + shot.label + " (" + c.sample + ")";
    img.loading = "lazy";
    btn.appendChild(img);
    btn.addEventListener("click", () => ecOpenViewer(i));
    cell.appendChild(btn);

    const cap = document.createElement("figcaption");
    const dot = document.createElement("span");
    dot.className = "ec-dot " + shot.dot;
    cap.appendChild(dot);
    cap.appendChild(document.createTextNode(shot.label));
    if (c[shot.key]) {
      const sub = document.createElement("span");
      sub.className = "ec-sub";
      sub.textContent = c[shot.key].model + " · " + c[shot.key].score;
      cap.appendChild(sub);
    }
    cell.appendChild(cap);

    strip.appendChild(cell);
  });

  const prompt = document.querySelector(".ec-prompt");
  if (prompt) prompt.open = false;
}

/* ---------- full-size viewer ---------- */

function ecOpenViewer(shotIndex) {
  ecZoom = shotIndex;
  const lb = document.getElementById("ec-lightbox");
  lb.hidden = false;
  document.body.style.overflow = "hidden";
  ecRenderViewer();
}

function ecCloseViewer() {
  ecZoom = -1;
  document.getElementById("ec-lightbox").hidden = true;
  document.body.style.overflow = "";
}

function ecRenderViewer() {
  const c = ecCurrent();
  const shot = EC_SHOTS[ecZoom];
  document.getElementById("ec-lb-img").src = EC_ASSET + c.key + "/" + shot.key + ".jpg";
  document.getElementById("ec-lb-img").alt = c.name + " — " + shot.label + " (" + c.sample + ")";
  let cap = c.name + " · " + shot.label;
  if (c[shot.key]) cap += " — " + c[shot.key].model + " (" + c[shot.key].score + ")";
  cap += " (" + (ecZoom + 1) + "/" + EC_SHOTS.length + ") — " + c.sample;
  document.getElementById("ec-lb-cap").textContent = cap;
}

function ecStepViewer(delta) {
  ecZoom = (ecZoom + delta + EC_SHOTS.length) % EC_SHOTS.length;
  ecRenderViewer();
}

function ecStepCase(delta) {
  ecIndex = (ecIndex + delta + EC_CASES.length) % EC_CASES.length;
  ecRenderChips();
  ecRenderCase();
}

document.getElementById("ec-lb-prev").addEventListener("click", () => ecStepViewer(-1));
document.getElementById("ec-lb-next").addEventListener("click", () => ecStepViewer(1));
document.getElementById("ec-lb-close").addEventListener("click", ecCloseViewer);
document.getElementById("ec-lightbox").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) ecCloseViewer();
});

document.addEventListener("keydown", (e) => {
  if (document.getElementById("ec-lightbox").hidden) {
    if (e.key === "ArrowLeft") ecStepCase(-1);
    if (e.key === "ArrowRight") ecStepCase(1);
    return;
  }
  if (e.key === "Escape") ecCloseViewer();
  if (e.key === "ArrowLeft") ecStepViewer(-1);
  if (e.key === "ArrowRight") ecStepViewer(1);
});

ecRenderChips();
ecRenderCase();
