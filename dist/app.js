'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  navigation?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 701px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});

const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const solutionPanels = document.querySelector('#solution-panels');
const solutionsMotion = document.querySelector('#solutions-motion');
let serviceAutoplay = !motionPreference.matches;
let serviceTimer;
let servicesInView = false;
let servicesHovered = false;
let servicesFocused = false;

function scheduleServiceRotation() {
  window.clearTimeout(serviceTimer);
  if (!serviceAutoplay || !servicesInView || servicesHovered || servicesFocused || document.hidden) return;
  serviceTimer = window.setTimeout(() => {
    const current = tabs.findIndex(tab => tab.getAttribute('aria-selected') === 'true');
    activateTab(tabs[(current + 1) % tabs.length], false, true);
    scheduleServiceRotation();
  }, 8000);
}

function setServiceAutoplay(enabled) {
  serviceAutoplay = enabled;
  solutionsMotion.setAttribute('aria-pressed', String(!enabled));
  solutionsMotion.querySelector('.motion-symbol').textContent = enabled ? 'Ⅱ' : '▷';
  solutionsMotion.querySelector('.motion-label').textContent = enabled ? 'Pausar recorrido' : 'Activar recorrido';
  scheduleServiceRotation();
}

function activateTab(tab, focus = false, automatic = false) {
  if (!automatic) setServiceAutoplay(false);
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      activateTab(tabs[next], true);
    }
  });
});

if (solutionPanels && solutionsMotion) {
  solutionsMotion.hidden = false;
  setServiceAutoplay(serviceAutoplay);
  solutionsMotion.addEventListener('click', () => setServiceAutoplay(!serviceAutoplay));
  const servicesObserver = new IntersectionObserver(entries => {
    servicesInView = entries[0].isIntersecting;
    scheduleServiceRotation();
  }, { threshold: 0.15 });
  servicesObserver.observe(solutionPanels);
  solutionPanels.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'mouse') return;
    servicesHovered = true;
    scheduleServiceRotation();
  });
  solutionPanels.addEventListener('pointerleave', event => {
    if (event.pointerType !== 'mouse') return;
    servicesHovered = false;
    scheduleServiceRotation();
  });
  solutionPanels.addEventListener('focusin', () => {
    servicesFocused = true;
    scheduleServiceRotation();
  });
  solutionPanels.addEventListener('focusout', event => {
    servicesFocused = solutionPanels.contains(event.relatedTarget);
    scheduleServiceRotation();
  });
  document.addEventListener('visibilitychange', scheduleServiceRotation);
}

const clientViewport = document.querySelector('#client-viewport');
const clientTrack = document.querySelector('.client-track');
const clientGroup = document.querySelector('#client-logos');
const clientMotion = document.querySelector('#client-motion');
if (clientTrack && clientGroup && clientMotion) {
  const copy = clientGroup.cloneNode(true);
  copy.removeAttribute('id');
  copy.setAttribute('aria-hidden', 'true');
  copy.querySelectorAll('a').forEach(link => link.tabIndex = -1);
  clientTrack.append(copy);
  clientTrack.classList.add('is-animated');
  clientMotion.hidden = motionPreference.matches;
  const sizeObserver = new ResizeObserver(entries => {
    clientViewport.style.setProperty('--clients-width', `${entries[0].contentRect.width}px`);
  });
  sizeObserver.observe(clientViewport);
  clientMotion.addEventListener('click', () => {
    const paused = clientMotion.getAttribute('aria-pressed') !== 'true';
    clientMotion.setAttribute('aria-pressed', String(paused));
    clientTrack.classList.toggle('is-paused', paused);
    clientMotion.querySelector('.motion-symbol').textContent = paused ? '▷' : 'Ⅱ';
    clientMotion.querySelector('.motion-label').textContent = paused ? 'Activar movimiento' : 'Pausar movimiento';
  });
}

motionPreference.addEventListener('change', event => {
  setServiceAutoplay(!event.matches);
  if (clientMotion) clientMotion.hidden = event.matches;
});

const form = document.querySelector('#contact-form');
const result = document.querySelector('#local-result');
const serviceSelect = document.querySelector('#service-select');
const summary = document.querySelector('#consultation-summary');
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    result.hidden = true;
    form.hidden = false;
    serviceSelect.value = link.dataset.service;
  });
});

if (form) {
  form.querySelector('[type="submit"]').disabled = false;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const value = key => String(values.get(key) || '').trim();
    if (!value('nombre') || !value('mensaje')) {
      document.querySelector('#form-status').textContent = 'Complete su nombre y el detalle de su consulta.';
      return;
    }
    document.querySelector('#form-status').textContent = '';
    const lines = [
      'Hola Olger, vi la página de STM y me gustaría conversar.',
      '',
      `Nombre: ${value('nombre')}`,
      ...(value('empresa') ? [`Empresa: ${value('empresa')}`] : []),
      ...(value('correo') ? [`Correo: ${value('correo')}`] : []),
      ...(value('telefono') ? [`Teléfono: ${value('telefono')}`] : []),
      `Me interesa: ${value('servicio')}`,
      '',
      value('mensaje'),
    ];
    const message = lines.join('\n');
    summary.textContent = message;
    document.querySelector('#send-whatsapp').href = `https://wa.me/50683735850?text=${encodeURIComponent(message)}`;
    document.querySelector('#send-email').href = `mailto:olgermr@stmcomputadores.com?subject=${encodeURIComponent('Consulta STM · ' + value('servicio'))}&body=${encodeURIComponent(message)}`;
    form.hidden = true;
    result.hidden = false;
    document.querySelector('#copy-status').textContent = '';
    result.querySelector('h3').setAttribute('tabindex', '-1');
    result.querySelector('h3').focus({ preventScroll: true });
    if (window.matchMedia('(max-width: 700px)').matches) result.scrollIntoView({ block: 'center', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });
  document.querySelector('#edit-consultation').addEventListener('click', () => {
    result.hidden = true;
    form.hidden = false;
    form.querySelector('[name="nombre"]').focus({ preventScroll: true });
  });
  document.querySelector('#copy-consultation').addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText(summary.textContent);
      status.textContent = 'Consulta copiada. Puede pegarla en su conversación o correo.';
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(summary);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'El mensaje está seleccionado. Cópielo desde el menú de su navegador.';
    }
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
