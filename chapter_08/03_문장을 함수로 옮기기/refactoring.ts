{
  function renderPerson0(outStream, person) {
    const result = [];
  
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(emitPhotoData(person.photo, location));
    return result.join('\n');
  }
  
  function renderPhoto(p) {
    return '사진';
  }
  
  function photoDiv(p) {
    return ['<div>', emitPhotoData(p, location), '</div>'].join('\n');
  }
  
  function emitPhotoData0(p, aPhoto) {
    return [`<p>제목: ${p.title}</p>`, `<p>제목: ${aPhoto.location}</p>`, `<p>제목: ${aPhoto.date.toString()}</p>`].join(
      '\n'
    );
  }
}
