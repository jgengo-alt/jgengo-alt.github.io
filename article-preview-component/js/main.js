const toggle_share = () => {
  const b = document.querySelector('#share');
  const s = document.querySelector('#tooltip');

  const isDisplayed = b.dataset.toggle == 1;

  if (isDisplayed) {
    b.dataset.toggle = 0;

    b.style.backgroundColor = "var(--clr-4)"
    s.style.display = 'none';
  } else {
    b.dataset.toggle = 1;

    b.style.backgroundColor = "var(--clr-1)";
    s.style.display = 'grid';
  }
}