/*
 * Type in the commandline:
 * node ./script.js
 */

const fs = require('fs');

const pngFileNames = () => {
  const array = fs
    .readdirSync('./')
    .filter(file => {
      return file.endsWith('.png');
    })
    .map(file => {
      return file
        .replace('@2x.png', '')
        .replace('@3x.png', '')
        .replace('.png', '');
    });

  return Array.from(new Set(array));
};

const jpgFileNames = () => {
  const array = fs
    .readdirSync('./')
    .filter(file => {
      return file.endsWith('.jpg');
    })
    .map(file => {
      return file
        .replace('@2x.jpg', '')
        .replace('@3x.jpg', '')
        .replace('.jpg', '');
    });

  return Array.from(new Set(array));
};

const generate = () => {
  let jpgs = jpgFileNames().map(name => {
    return `${name.replace('.png', '')}: require('./img/${name}.jpg')`;
  });
  let pngs = pngFileNames().map(name => {
    return `${name.replace('.png', '')}: require('./img/${name}.png')`;
  });
  let properties = jpgs.concat(pngs).join(',\n  ');

  const string = `export default {
  ${properties},
};
`;

  fs.writeFileSync(`${__dirname}/../img.ts`, string, 'utf8');
};

generate();
