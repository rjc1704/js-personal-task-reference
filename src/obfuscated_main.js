const _0x8ab89e = _0xd66e;
function _0x3152() {
  const _0x3154ed = [
    "vote_average",
    "#search-input",
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&include_adult=false",
    "style",
    "7TofYeR",
    "121335MehTuj",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Rating:\x20",
    "results",
    "join",
    "영화\x20id:\x20",
    "display",
    "application/json",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22movie-card\x22\x20id=",
    "click",
    "querySelector",
    "title",
    "movie-card",
    ">\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://image.tmdb.org/t/p/w500",
    "GET",
    "overview",
    "block",
    "addEventListener",
    "124aQtVbE",
    "parentNode",
    "value",
    "10IHFLal",
    "forEach",
    "DOMContentLoaded",
    "2116407qcHCZv",
    "425228cDnMEz",
    "2941422grpcSk",
    "poster_path",
    "1505992yexiQr",
    "innerHTML",
    "544311QUlpkW",
    ".movie-card",
    "none",
    "\x22\x20alt=\x22",
    "2vYKknH",
    "16325089OCWkZQ",
    "indexOf",
    "json",
    "className",
    "map",
    "toLowerCase",
    "focus",
  ];
  _0x3152 = function () {
    return _0x3154ed;
  };
  return _0x3152();
}
(function (_0x30e4e2, _0x3e7b01) {
  const _0x59e6fb = _0xd66e,
    _0x94d9b7 = _0x30e4e2();
  while (!![]) {
    try {
      const _0x301d1d =
        (parseInt(_0x59e6fb(0x166)) / 0x1) *
          (-parseInt(_0x59e6fb(0x15d)) / 0x2) +
        -parseInt(_0x59e6fb(0x15c)) / 0x3 +
        (parseInt(_0x59e6fb(0x156)) / 0x4) *
          (parseInt(_0x59e6fb(0x173)) / 0x5) +
        -parseInt(_0x59e6fb(0x15e)) / 0x6 +
        (parseInt(_0x59e6fb(0x172)) / 0x7) *
          (-parseInt(_0x59e6fb(0x160)) / 0x8) +
        parseInt(_0x59e6fb(0x162)) / 0x9 +
        (parseInt(_0x59e6fb(0x159)) / 0xa) * (parseInt(_0x59e6fb(0x167)) / 0xb);
      if (_0x301d1d === _0x3e7b01) break;
      else _0x94d9b7["push"](_0x94d9b7["shift"]());
    } catch (_0x5713f5) {
      _0x94d9b7["push"](_0x94d9b7["shift"]());
    }
  }
})(_0x3152, 0x770f8),
  window[_0x8ab89e(0x155)](_0x8ab89e(0x15b), () => {
    const _0x4bb852 = _0x8ab89e,
      _0x43dbbc = document[_0x4bb852(0x14e)]("#search-input");
    _0x43dbbc[_0x4bb852(0x16d)]();
  });
function _0xd66e(_0x474624, _0x32ecd1) {
  const _0x315277 = _0x3152();
  return (
    (_0xd66e = function (_0xd66e5c, _0x40c784) {
      _0xd66e5c = _0xd66e5c - 0x145;
      let _0x3df2e4 = _0x315277[_0xd66e5c];
      return _0x3df2e4;
    }),
    _0xd66e(_0x474624, _0x32ecd1)
  );
}
const handleSearch = (_0x1f9f76) => {
    const _0x1d7be7 = _0x8ab89e;
    _0x1f9f76["preventDefault"]();
    const _0x1b6a96 = document[_0x1d7be7(0x14e)](_0x1d7be7(0x16f)),
      _0x2f81fc = _0x1b6a96[_0x1d7be7(0x158)][_0x1d7be7(0x16c)](),
      _0x5ee7c5 = document["querySelectorAll"](_0x1d7be7(0x163));
    _0x5ee7c5[_0x1d7be7(0x15a)]((_0x4847b8) => {
      const _0x4fffca = _0x1d7be7,
        _0xc2c3ae =
          _0x4847b8[_0x4fffca(0x14e)]("h3")["textContent"][_0x4fffca(0x16c)]();
      _0xc2c3ae[_0x4fffca(0x168)](_0x2f81fc) !== -0x1
        ? (_0x4847b8[_0x4fffca(0x171)]["display"] = _0x4fffca(0x154))
        : (_0x4847b8[_0x4fffca(0x171)][_0x4fffca(0x14a)] = _0x4fffca(0x164));
    });
  },
  fetchMovieData = async () => {
    const _0x50c69e = _0x8ab89e,
      _0x4a9534 = {
        method: _0x50c69e(0x152),
        headers: {
          accept: _0x50c69e(0x14b),
          Authorization:
            "Bearer\x20eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NThhODc2ZTY5NDA4NWY4YTA1MmQyNjc5MTRhY2RlMiIsInN1YiI6IjYxYzNjZjY5MzdiM2E5MDBjMzQ2YzYyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pPkre3BdMQtujbkqtPmW7TC_022A-ZR2M_ZShzd_kDU",
        },
      },
      _0x16dea6 = await fetch(_0x50c69e(0x170), _0x4a9534),
      _0xfd52fb = await _0x16dea6[_0x50c69e(0x169)]();
    return _0xfd52fb[_0x50c69e(0x147)];
  },
  createMovieCards = async () => {
    const _0x598c8a = _0x8ab89e,
      _0x116588 = await fetchMovieData(),
      _0x418762 = document[_0x598c8a(0x14e)](".card-list");
    (_0x418762[_0x598c8a(0x161)] = _0x116588[_0x598c8a(0x16b)](
      (_0x4c2453) =>
        _0x598c8a(0x14c) +
        _0x4c2453["id"] +
        _0x598c8a(0x151) +
        _0x4c2453[_0x598c8a(0x15f)] +
        _0x598c8a(0x165) +
        _0x4c2453[_0x598c8a(0x14f)] +
        "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>" +
        _0x4c2453["title"] +
        "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>" +
        _0x4c2453[_0x598c8a(0x153)] +
        _0x598c8a(0x146) +
        _0x4c2453[_0x598c8a(0x16e)] +
        _0x598c8a(0x145)
    )[_0x598c8a(0x148)]("")),
      _0x418762[_0x598c8a(0x155)](_0x598c8a(0x14d), ({ target: _0x302f47 }) => {
        const _0x24b35d = _0x598c8a;
        _0x302f47 !== _0x418762 &&
          (_0x302f47[_0x24b35d(0x16a)] === _0x24b35d(0x150)
            ? alert(_0x24b35d(0x149) + _0x302f47["id"])
            : alert(_0x24b35d(0x149) + _0x302f47[_0x24b35d(0x157)]["id"]));
      });
  };
createMovieCards();
