// --- SKILLSET DATA ---
// (Use your PNG icons for the popup!)
const SKILL_CATEGORIES = {
  productivity: {
    title: "Productivity Tools",
    icon: "assets/logo/skillset1.gif",
    skills: [
      { name: "Canva", icon: "assets/logo/canva_logo.png", percent: 99 },
      { name: "Word", icon: "assets/logo/word_logo.png", percent: 99 },
      { name: "Excel", icon: "assets/logo/excel_logo.png", percent: 90 },
      { name: "PowerPoint", icon: "assets/logo/powerpoint_logo.png", percent: 85 },
      { name: "Publisher", icon: "assets/logo/publisher_logo.png", percent: 80 },
      { name: "Google Workspace", icon: "assets/logo/gworkspace_logo.png", percent: 75 },
    ]
  },
  programming: {
    title: "Programming Languages",
    icon: "assets/logo/skillset1.gif",
    skills: [
      { name: "HTML", icon: "assets/logo/html_logo.png", percent: 50 },
      { name: "CSS", icon: "assets/logo/css_logo.png", percent: 50 },
      { name: "JavaScript", icon: "assets/logo/js_logo.png", percent: 50 },
      { name: "PHP", icon: "assets/logo/php_logo.png", percent: 50 },
      { name: "Python", icon: "assets/logo/python_logo.png", percent: 50 },
      { name: "C#", icon: "assets/logo/csharp_logo.png", percent: 50 },
    ]
  },
  media: {
    title: "Media & Editing Tools",
    icon: "assets/logo/skillset1.gif",
    skills: [
      { name: "Photoshop", icon: "assets/logo/photoshop_logo.png", percent: 75 },
      { name: "Premiere", icon: "assets/logo/premiere_logo.png", percent: 70 },
      { name: "CapCut", icon: "assets/logo/capcut_logo.png", percent: 90 },
      { name: "OBS Studio", icon: "assets/logo/obs_logo.png", percent: 90 },
    ]
  },
  ides: {
    title: "IDEs & Platforms",
    icon: "assets/logo/skillset1.gif",
    skills: [
      { name: "Android Studio", icon: "assets/logo/androidstudio_logo.png", percent: 50 },
      { name: "VS Code", icon: "assets/logo/vscode_logo.png", percent: 50 },
      { name: "Apache NetBeans", icon: "assets/logo/netbeans_logo.png", percent: 50 },
    ]
  },
  version: {
    title: "Version Control",
    icon: "assets/logo/skillset1.gif",
    skills: [
      { name: "Git / GitHub", icon: "assets/logo/git_logo.png", percent: 50 },
    ]
  },
  collab: {
    title: "Collaboration Tools",
    icon: "assets/logo/skillset1.gif",
    skills: [
      { name: "Adobe XD", icon: "assets/logo/adobexd_logo.png", percent: 60 },
    ]
  }
};

// Modal logic (one popup at a time)
const modalBg = document.getElementById("skillsModal");
const modalContent = document.getElementById("modalContent");
const closeModalBtn = document.getElementById("closeModal");
const modalSkillsContent = document.getElementById("modalSkillsContent");
const skillCards = document.querySelectorAll(".skills-card");

skillCards.forEach(card => {
  card.addEventListener("click", () => {
    const skillType = card.dataset.skill;
    showSkillModal(skillType);
  });
});
closeModalBtn.addEventListener("click", closeModal);
modalBg.addEventListener("click", function(e) {
  if (e.target === modalBg) closeModal();
});

// Build modal popup
function showSkillModal(category) {
  const cat = SKILL_CATEGORIES[category];
  if (!cat) return;
  let html = `<div class="skill-modal-title">
    <img src="${cat.icon}" alt="" style="width:38px;height:38px;vertical-align:middle;border-radius:7px;background:#21263d;margin-right:8px;">
    ${cat.title}
  </div>
  <div class="skill-list-modal">`;
  cat.skills.forEach(s => {
    html += `<div class="skill-row">
      <span class="skill-modal-icon"><img src="${s.icon}" alt=""></span>
      <span class="skill-modal-label">${s.name}</span>
      <div class="skill-modal-bar-bg">
        <div class="skill-modal-bar-fill" data-percent="${s.percent}"></div>
      </div>
      <span class="skill-modal-percentage">${s.percent}%</span>
    </div>`;
  });
  html += `</div>`;
  modalSkillsContent.innerHTML = html;
  modalBg.classList.add("active");
  setTimeout(() => {
    document.querySelectorAll(".skill-modal-bar-fill").forEach(bar => {
      bar.style.width = bar.getAttribute("data-percent") + "%";
    });
  }, 80);
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modalBg.classList.remove("active");
  setTimeout(() => { modalSkillsContent.innerHTML = ""; }, 350);
  document.body.style.overflow = "";
}

// Scroll arrow to skills
document.querySelector('.scroll-arrow').onclick = () => {
  document.getElementById('skills').scrollIntoView({behavior: 'smooth'});
};
