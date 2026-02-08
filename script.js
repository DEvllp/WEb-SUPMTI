$('.counter').each(function () {
  let target = $(this).data('target');
  let count = 0;
  let increment = target / 100;

  let interval = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    $(this).text(Math.floor(count));
  }, 20);
});
