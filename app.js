// Skill set data for each category
const SKILL_CATEGORIES = {
  productivity: {
    title: "Productivity Tools",
    icon: "canva_logo.png",
    skills: [
      { name: "Canva", icon: "canva_logo.png", percent: 99 },
      { name: "Word", icon: "word_logo.png", percent: 99 },
      { name: "Excel", icon: "excel_logo.png", percent: 90 },
      { name: "PowerPoint", icon: "powerpoint_logo.png", percent: 85 },
      { name: "Publisher", icon: "publisher_logo.png", percent: 80 },
      { name: "Google Workspace", icon: "gworkspace_logo.png", percent: 75 },
    ]
  },
  programming: {
    title: "Programming Languages",
    icon: "html_logo.png",
    skills: [
      { name: "HTML", icon: "html_logo.png", percent: 50 },
      { name: "CSS", icon: "css_logo.png", percent: 50 },
      { name: "JavaScript", icon: "js_logo.png", percent: 50 },
      { name: "PHP", icon: "php_logo.png", percent: 50 },
      { name: "Python", icon: "python_logo.png", percent: 50 },
      { name: "C#", icon: "csharp_logo.png", percent: 50 },
    ]
  },
  media: {
    title: "Media & Editing Tools",
    icon: "photoshop_logo.png",
    skills: [
      { name: "Photoshop", icon: "photoshop_logo.png", percent: 75 },
      { name: "Premiere", icon: "premiere_logo.png", percent: 70 },
      { name: "CapCut", icon: "capcut_logo.png", percent: 90 },
      { name: "OBS Studio", icon: "obs_logo.png", percent: 90 },
    ]
  },
  ides: {
    title: "IDEs & Platforms",
    icon: "vscode_logo.png",
    skills: [
      { name: "Android Studio", icon: "androidstudio_logo.png", percent: 50 },
      { name: "VS Code", icon: "vscode_logo.png", percent: 50 },
      { name: "Apache NetBeans", icon: "netbeans_logo.png", percent: 50 },
    ]
  },
  version: {
    title: "Version Control",
    icon: "git_logo.png",
    skills: [
      { name: "Git / GitHub", icon: "git_logo.png", percent: 50 },
    ]
  },
  collab: {
    title: "Collaboration Tools",
    icon: "adobexd_logo.png",
    skills: [
      { name: "Adobe XD", icon: "adobexd_logo.png", percent: 60 },
    ]
  }
};

// Modal open/close
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

// Modal logic
function showSkillModal(category) {
  const cat = SKILL_CATEGORIES[category];
  if (!cat) return;
  // Build HTML
  let html = `<div class="skill-modal-title">
    <img src="${cat.icon}" alt="" style="width:38px;height:38px;vertical-align:middle;border-radius:7px;background:#21263d;margin-right:8px;">
    ${cat.title}
  </div>
  <div class="skill-list-modal">`;
  cat.skills.forEach(s => {
    html += `<div class="skill-row">
      <img src="${s.icon}" class="skill-modal-icon" alt="">
      <span class="skill-modal-label">${s.name}</span>
      <div class="skill-modal-bar-bg">
        <div class="skill-modal-bar-fill" data-percent="${s.percent}"></div>
      </div>
      <span class="skill-modal-percentage">${s.percent}%</span>
    </div>`;
  });
  html += `</div>`;
  modalSkillsContent.innerHTML = html;
  // Show modal
  modalBg.classList.add("active");
  // Animate bars after a tick
  setTimeout(() => {
    document.querySelectorAll(".skill-modal-bar-fill").forEach(bar => {
      bar.style.width = bar.getAttribute("data-percent") + "%";
    });
  }, 80);
  // Prevent scroll
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modalBg.classList.remove("active");
  setTimeout(() => { modalSkillsContent.innerHTML = ""; }, 350);
  document.body.style.overflow = "";
}

// NAVBAR active and smooth scroll for Contact
document.querySelectorAll(".navbar-links a").forEach(link => {
  link.addEventListener("click", function(e) {
    // highlight nav
    document.querySelectorAll(".navbar-links a").forEach(l => l.classList.remove("active"));
    this.classList.add("active");
    // smooth scroll to contact if Contact Info
    if (this.getAttribute("href") === "#contact") {
      e.preventDefault();
      document.getElementById("contact").scrollIntoView({behavior: "smooth"});
    }
  });
});

// If you want more hover animations, you can expand here!

