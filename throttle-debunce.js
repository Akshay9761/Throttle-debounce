let throttle = (fn, timedelay) => {
    let pass = true;
    return (...args) => {
      if (pass) {
        setTimeout(() => {
          fn.apply(this, args);
          pass = true;
        }, timedelay);

        pass = false;
      }
    };
  };

  let debounce = (fn, timedelay) => {
    let timerid = null;
    return (...args) => {
      clearTimeout(timerid);
      timerid = setTimeout(() => fn.apply(this, args), timedelay);
    };
  };
