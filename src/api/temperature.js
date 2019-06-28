const formatter = new Intl.NumberFormat("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 4 });

export function kelvinToCelsius(k) {
  return k - 273.15;
}

export function kelvinToFahrenheit(k) {
  return (k * (9 / 5)) - 459.67;
}

export function getAllTemperatures(k) {
  const c = kelvinToCelsius(k);
  const f = kelvinToFahrenheit(k);
  return {
    k: `${formatter.format(k)} K`,
    c: `${formatter.format(c)}°C`,
    f: `${formatter.format(f)}°F`
  };
}