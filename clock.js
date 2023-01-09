const displaytime = () => {
  setInterval(() => {
    console.clear();

    const date = new Date();

    const time =
      String(date.getHours()).padStart(2, "0") +
      ":" +
      String(date.getMinutes()).padStart(2, "0") +
      ":" +
      String(date.getSeconds()).padStart(2, "0");
    console.log("----------");
    console.log("|" + time + "|");
    console.log("----------");
    console.log(" casio :D ");
    console.log("----------");
  }, 1000);
};

displaytime();
