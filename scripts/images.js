const fs = require('fs');

const imageFileNames = () => {
  const array = fs
    .readdirSync('src/res/images')
    .filter((file) => {
      return file.endsWith('.png');
    })
    .map((file) => {
      return file
        .replace('@2x.png', '.png')
        .replace('@3x.png', '.png')
        .replace('@1x.png', '.png');
    });

  return Array.from(new Set(array));
};

const generate = () => {
  let properties = imageFileNames()
    .map((name) => {
      return `${name.replace('.png', '')}: require('./images/${name}')`;
    })
    .join(',\n  ');

  const string = `const images = {
  ${properties},
};
export default images;
`;

  fs.writeFileSync('src/res/images.js', string, 'utf8');
};

generate();
