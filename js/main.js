var qoutes = [
  {
    qoute: "“Be yourself; everyone else is already taken.”",
    auther: "― Oscar Wilde",
  },
  { qoute: "“So many books, so little time.”", auther: "― Frank Zappa" },
  {
    qoute:
      "“Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.”",
    auther: "― Albert Einstein",
  },
  {
    qoute: "“A room without books is like a body without a soul.”",
    auther: "― Marcus Tullius Cicero",
  },
  {
    qoute:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    auther: "― Bernard M. Baruch",
  },
  {
    qoute: `“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”`,
    auther: "― William W. Purkey",
  },
  {
    qoute:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    auther: "― Dr. Seuss",
  },
  {
    qoute: "“You only live once, but if you do it right, once is enough.”",
    auther: "― Mae West",
  },
  {
    qoute: "“Be the change that you wish to see in the world.”",
    auther: "― Mahatma Gandhi",
  },
];

function randomQoutes() {
  var random = Number.parseInt(Math.random() * qoutes.length + 0);
  document.getElementById("demo").innerHTML = qoutes[random].qoute;
  document.getElementById("demo2").innerHTML = qoutes[random].auther;
}
