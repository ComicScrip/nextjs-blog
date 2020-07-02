import fs from 'fs'

export default function (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) reject(err)
      resolve(JSON.parse(data));
    });
  })
}