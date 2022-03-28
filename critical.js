const critical = require('critical');

critical.generate(
  {
    inline: true,
    base: 'purse-banking/',
    src: 'public/index.html',
    target: 'public/index.html',
    dimensions: [
      {
        width: 300,
        height: 500,
      },
      {
        width: 1280,
        height: 720,
      },
    ],
  },
  (error, output) => {
    if (error) {
      console.log(error);
    } else if (output) {
      console.log('Generated critical CSS');
    }
  }
);
