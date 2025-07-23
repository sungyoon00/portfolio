window.addEventListener('resize', stretchTitle);
window.addEventListener('DOMContentLoaded', stretchTitle);

function stretchTitle() {
  const title = document.getElementById('stretch-title');
  if (!title) return;
  const container = title.parentElement;
  title.style.letterSpacing = 'normal';

  // Get computed padding values
  const computedStyle = getComputedStyle(container);
  const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
  const paddingRight = parseFloat(computedStyle.paddingRight) || 0;
  // Subtract paddings from clientWidth to get true available width
  const containerWidth = container.clientWidth - paddingLeft - paddingRight;
  const textWidth = title.scrollWidth;
  const charCount = title.textContent.length - 1;

  if (charCount > 0) {
    const extraSpace = containerWidth - textWidth;
    const spacing = extraSpace / charCount;
    title.style.letterSpacing = spacing + 'px';
  }
}
