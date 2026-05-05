document.querySelectorAll('.collapsedpreview').forEach(header => {
  header.addEventListener('click', () => {
    header.closest('.projectcard').classList.toggle('open');
  });
});
