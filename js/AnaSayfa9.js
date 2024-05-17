function logoHover(element, enter) {
    const logo = element.querySelector('img');
    if (enter) {
      logo.style.transform = 'scale(1.3)';
    } else {
      logo.style.transform = 'scale(1)';
    }
  }