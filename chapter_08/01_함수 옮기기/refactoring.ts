function trackSummary(points: number) {
  const totalTime = calculateTime();
  const totalDistanceCache = totalDistance(points);
  const pace = Number(totalTime) / 60 / totalDistanceCache;

  return {
    time: totalTime,
    distance: totalDistanceCache,
    pace: pace,
  };
}

function totalDistance(points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }

  return result;
}

function distance(p1, p2) {
  const EARTH_RADIUS = 3959;
  const dLat = radians(p2.lat) - radians(p1.lat);
  const dLon = radians(p2.lon) - radians(p1.lon);
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.cos(radians(p2.lat)) +
    Math.cos(radians(p1.lat)) +
    Math.pow(Math.sin(dLon / 2), 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
}

function radians(degrees) {
  return (degrees * Math.PI) / 180;
}

function calculateTime(): number {
  return 10;
}