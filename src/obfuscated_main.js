function _0x183e() {
  const _0x4dd187 = [
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "10864399YtPTef",
    "textContent",
    "8kDjnTb",
    "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>",
    "9670Onlhhx",
    "overview",
    "2IdeQdh",
    "#search-input",
    "display",
    "Bearer\x20eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NThhODc2ZTY5NDA4NWY4YTA1MmQyNjc5MTRhY2RlMiIsInN1YiI6IjYxYzNjZjY5MzdiM2E5MDBjMzQ2YzYyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pPkre3BdMQtujbkqtPmW7TC_022A-ZR2M_ZShzd_kDU",
    "focus",
    "innerHTML",
    "results",
    "GET",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>",
    "parentNode",
    "indexOf",
    "poster_path",
    "962334CBjIok",
    "click",
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&include_adult=false",
    ">\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://image.tmdb.org/t/p/w500",
    "174bNqdZw",
    "5877027cNMxFZ",
    "addEventListener",
    "application/json",
    "style",
    "json",
    "none",
    "matches",
    "title",
    "DOMContentLoaded",
    "142741GOEPWf",
    "\x22\x20alt=\x22",
    "7601FqhXeu",
    "value",
    "join",
    "영화\x20id:\x20",
    "12ItMPCg",
    "263018LMggQX",
    ".movie-card",
    "5VoHLJW",
    "3623588cARhZM",
    "querySelectorAll",
    "toLowerCase",
    "map",
    "querySelector",
    "block",
  ];
  _0x183e = function () {
    return _0x4dd187;
  };
  return _0x183e();
}
function _0x4753(_0x56419d, _0x180086) {
  const _0x183ee7 = _0x183e();
  return (
    (_0x4753 = function (_0x475348, _0x1bdb76) {
      _0x475348 = _0x475348 - 0xe4;
      let _0x38756d = _0x183ee7[_0x475348];
      return _0x38756d;
    }),
    _0x4753(_0x56419d, _0x180086)
  );
}
const _0x144359 = _0x4753;
(function (_0x2630f8, _0x37b3ec) {
  const _0x3c34ec = _0x4753,
    _0xb1506c = _0x2630f8();
  while (!![]) {
    try {
      const _0x71d257 =
        (-parseInt(_0x3c34ec(0xe5)) / 0x1) * (parseInt(_0x3c34ec(0xfc)) / 0x2) +
        -parseInt(_0x3c34ec(0x108)) / 0x3 +
        (-parseInt(_0x3c34ec(0xef)) / 0x4) *
          (-parseInt(_0x3c34ec(0xee)) / 0x5) +
        (parseInt(_0x3c34ec(0x10c)) / 0x6) * (parseInt(_0x3c34ec(0xec)) / 0x7) +
        (-parseInt(_0x3c34ec(0xf8)) / 0x8) *
          (-parseInt(_0x3c34ec(0x10d)) / 0x9) +
        (parseInt(_0x3c34ec(0xfa)) / 0xa) * (-parseInt(_0x3c34ec(0xe7)) / 0xb) +
        (parseInt(_0x3c34ec(0xeb)) / 0xc) * (-parseInt(_0x3c34ec(0xf6)) / 0xd);
      if (_0x71d257 === _0x37b3ec) break;
      else _0xb1506c["push"](_0xb1506c["shift"]());
    } catch (_0x862d5b) {
      _0xb1506c["push"](_0xb1506c["shift"]());
    }
  }
})(_0x183e, 0xa6493),
  window["addEventListener"](_0x144359(0xe4), () => {
    const _0x35a442 = _0x144359,
      _0x809068 = document[_0x35a442(0xf3)]("#search-input");
    _0x809068[_0x35a442(0x100)]();
  });
const handleSearch = (_0x17297e) => {
    const _0x11737e = _0x144359;
    _0x17297e["preventDefault"]();
    const _0x508f87 = document[_0x11737e(0xf3)](_0x11737e(0xfd)),
      _0x348a64 = _0x508f87[_0x11737e(0xe8)][_0x11737e(0xf1)](),
      _0x5c8420 = document[_0x11737e(0xf0)](_0x11737e(0xed));
    _0x5c8420["forEach"]((_0x587807) => {
      const _0x9515a = _0x11737e,
        _0x55fb5c =
          _0x587807[_0x9515a(0xf3)]("h3")[_0x9515a(0xf7)]["toLowerCase"]();
      _0x55fb5c[_0x9515a(0x106)](_0x348a64) !== -0x1
        ? (_0x587807[_0x9515a(0x110)][_0x9515a(0xfe)] = _0x9515a(0xf4))
        : (_0x587807[_0x9515a(0x110)][_0x9515a(0xfe)] = _0x9515a(0x112));
    });
  },
  fetchMovieData = async () => {
    const _0x55df24 = _0x144359,
      _0x50d625 = {
        method: _0x55df24(0x103),
        headers: { accept: _0x55df24(0x10f), Authorization: _0x55df24(0xff) },
      },
      _0x364c88 = await fetch(_0x55df24(0x10a), _0x50d625),
      _0x30fb7b = await _0x364c88[_0x55df24(0x111)]();
    return _0x30fb7b[_0x55df24(0x102)];
  },
  createMovieCards = async () => {
    const _0x42c2a1 = _0x144359,
      _0xeebc97 = await fetchMovieData(),
      _0x4296c2 = document[_0x42c2a1(0xf3)](".card-list");
    (_0x4296c2[_0x42c2a1(0x101)] = _0xeebc97[_0x42c2a1(0xf2)](
      (_0x2e4596) =>
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22movie-card\x22\x20id=" +
        _0x2e4596["id"] +
        _0x42c2a1(0x10b) +
        _0x2e4596[_0x42c2a1(0x107)] +
        _0x42c2a1(0xe6) +
        _0x2e4596[_0x42c2a1(0x114)] +
        _0x42c2a1(0x104) +
        _0x2e4596[_0x42c2a1(0x114)] +
        _0x42c2a1(0xf9) +
        _0x2e4596[_0x42c2a1(0xfb)] +
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Rating:\x20" +
        _0x2e4596["vote_average"] +
        _0x42c2a1(0xf5)
    )[_0x42c2a1(0xe9)]("")),
      _0x4296c2[_0x42c2a1(0x10e)](_0x42c2a1(0x109), ({ target: _0x4c8df3 }) => {
        const _0x5d71a1 = _0x42c2a1;
        _0x4c8df3 !== _0x4296c2 &&
          (_0x4c8df3[_0x5d71a1(0x113)](_0x5d71a1(0xed))
            ? alert(_0x5d71a1(0xea) + _0x4c8df3["id"])
            : alert(_0x5d71a1(0xea) + _0x4c8df3[_0x5d71a1(0x105)]["id"]));
      });
  };
createMovieCards();
