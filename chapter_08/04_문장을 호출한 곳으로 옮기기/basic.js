function renderPerson1(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhotos(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write('<div>\n');
      emitPhotoData(outStream, p);
      outStream.write('</div>\n');
    });
}

const recentDateCutoff = () => {
  return;
}

const renderPhotos = (o, p) => {
  return '사진'
}

function emitPhotoData2(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>`);
  outStream.write(`<p>제목: ${photo.date.toString()}</p>`);
  outStream.write(`<p>제목: ${photo.location}</p>`);
}