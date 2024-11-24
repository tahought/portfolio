document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  let isScrolling = false;

  container.addEventListener('wheel', (e) => {
    if (isScrolling) return; // 二重スクロールを防止

    e.preventDefault();
    isScrolling = true;

    const currentScroll = container.scrollTop;
    const sectionHeight = window.innerHeight;
    const direction = e.deltaY > 0 ? 1 : -1; // スクロール方向を判断
    const targetScroll = currentScroll + direction * sectionHeight;

    container.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });

    setTimeout(() => (isScrolling = false), 1000); // スクロール完了まで待機
  });
});
