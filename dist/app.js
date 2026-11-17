const tabs = [...document.querySelectorAll('[data-tab]')];
function selectTab(name, focus = false) {
  if (!tabs.some(tab => tab.dataset.tab === name)) return;
  tabs.forEach(tab => {
    const selected = tab.dataset.tab === name;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.getElementById(`panel-${tab.dataset.tab}`).hidden = !selected;
    if (selected && focus) tab.focus();
  });
  const url = new URL(location.href);
  url.searchParams.set('secao', name);
  history.replaceState(null, '', url);
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab.dataset.tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectTab(tabs[next].dataset.tab, true); }
  });
});
document.querySelectorAll('[data-section]').forEach(link => link.addEventListener('click', () => selectTab(link.dataset.section)));
selectTab(new URLSearchParams(location.search).get('secao') || 'about');
const skills = {
  hardware: ['DO ESQUEMÁTICO AO SISTEMA', 'Hardware & sistemas embarcados', ['Projeto de PCBs', 'Eletrônica analógica', 'Eletrônica digital', 'Sistemas embarcados', 'SPI', 'PWM']],
  languages: ['CÓDIGO QUE CONSTRÓI SOLUÇÕES', 'Linguagens', ['C', 'Python', 'Java', 'SQL']],
  cad: ['PRECISÃO EM CADA DETALHE', 'EDA & CAD', ['KiCad', 'Altium Designer', 'Autodesk Fusion']],
  development: ['FERRAMENTAS DO DIA A DIA', 'Desenvolvimento', ['Git', 'GitHub', 'LaTeX']],
  systems: ['AMBIENTES DE TRABALHO', 'Sistemas operacionais', ['Linux', 'Windows']],
  prototyping: ['DO DIGITAL AO FÍSICO', 'Prototipagem', ['Impressão 3D', 'CNC']],
  people: ['CONEXÕES ALÉM DOS CIRCUITOS', 'Idiomas & competências', ['Inglês fluente', 'Trabalho em equipe', 'Resolução de problemas']]
};
document.querySelectorAll('[data-skill]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-skill]').forEach(other => {
    const active = other === button;
    other.classList.toggle('active', active);
    other.setAttribute('aria-pressed', String(active));
  });
  const [label, title, items] = skills[button.dataset.skill];
  document.getElementById('skill-label').textContent = label;
  document.getElementById('skill-title').textContent = title;
  document.getElementById('skill-items').replaceChildren(...items.map(text => {
    const item = document.createElement('span'); item.textContent = text; return item;
  }));
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('print-resume').innerHTML = `
  <h1>Luís Fernando Palhares</h1>
  <p>Engenharia de Computação · Campo Grande, MS</p>
  <p><a href="mailto:luis.palhares01@gmail.com">luis.palhares01@gmail.com</a> · +55 (67) 99244-7888</p>
  <p><a href="https://github.com/Palharesluis">github.com/Palharesluis</a> · <a href="https://www.linkedin.com/in/lu%C3%ADs-fernando-palhares">linkedin.com/in/luís-fernando-palhares</a></p>
  <section><h2>Resumo</h2><p>Estudante de Engenharia de Computação na Universidade Federal de Mato Grosso do Sul (UFMS), com experiência prática em desenvolvimento de hardware para robótica e Formula SAE. Atuação em projeto de PCBs, integração de sistemas eletrônicos e circuitos de segurança, com foco em sistemas embarcados, eletrônica e robótica.</p></section>
  <section><h2>Formação acadêmica</h2><h3>Engenharia de Computação · 2025 — Atual</h3><p>Universidade Federal de Mato Grosso do Sul (UFMS), Campo Grande, MS</p></section>
  <h2>Experiência</h2>
  <section><h3>AraraBots · Desenvolvedor de Hardware — Robótica</h3><p>2025 — Atual · Campo Grande, MS</p><ul><li>Projeto de duas PCBs para integração dos subsistemas eletrônicos dos robôs, utilizando KiCad e Autodesk Fusion, reduzindo conexões ponto a ponto e aumentando a robustez e a manutenibilidade do sistema.</li><li>Esquemáticos e layouts envolvendo SPI, PWM, alimentação e interfaces entre microcontroladores, sensores e atuadores, considerando requisitos elétricos, mecânicos e de integração.</li></ul></section>
  <section><h3>FROG Racing Team — Formula SAE · Desenvolvedor de Hardware</h3><p>2026 — Atual · Campo Grande, MS</p><ul><li>Projeto do BSPD (Brake System Plausibility Device), com lógica de segurança inteiramente em hardware, sem microcontroladores, para identificar condições incompatíveis entre frenagem e potência de tração.</li><li>Dimensionamento, seleção de componentes, esquemático e layout da PCB no KiCad, incluindo comparação, temporização e acionamento do shutdown.</li></ul></section>
  <section><h2>Competências técnicas</h2><p><strong>Linguagens:</strong> C, Python, Java, SQL.</p><p><strong>Hardware:</strong> PCBs, eletrônica analógica e digital, sistemas embarcados, SPI e PWM.</p><p><strong>EDA e CAD:</strong> KiCad, Altium Designer, Autodesk Fusion.</p><p><strong>Desenvolvimento:</strong> Git, GitHub, LaTeX. <strong>Sistemas:</strong> Linux, Windows.</p><p><strong>Prototipagem:</strong> Impressão 3D e CNC.</p><p><strong>Competências:</strong> Inglês fluente, trabalho em equipe e resolução de problemas.</p></section>`;
document.getElementById('download-cv').addEventListener('click', () => window.print());
