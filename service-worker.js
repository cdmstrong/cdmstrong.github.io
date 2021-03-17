/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e0343c4b69adb6017eb5364dd0c9a70e"
  },
  {
    "url": "about/index.html",
    "revision": "328fe38d533c8f2421da8b8bb042ebb9"
  },
  {
    "url": "assets/css/0.styles.0c5ad97a.css",
    "revision": "1d834c8c168ff521b62ecefbea7d6f35"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e8a644bc.js",
    "revision": "6ddb438ddfa61b73cc0e676e0ba66fc0"
  },
  {
    "url": "assets/js/11.80047aa0.js",
    "revision": "8b17fc6ebef1aeca0ef92012666f3e63"
  },
  {
    "url": "assets/js/12.c6119b94.js",
    "revision": "c46aa60d55e0a728345c01a32740c2c9"
  },
  {
    "url": "assets/js/13.49a6963c.js",
    "revision": "a3c55e250e9e7be8d5d439f4f1449c2c"
  },
  {
    "url": "assets/js/14.e4aa1f0e.js",
    "revision": "49e43beb46ec88c070c45ed22fe10bb4"
  },
  {
    "url": "assets/js/15.39e9bdd2.js",
    "revision": "56c7c538bc3f0ade77f77714642e0f50"
  },
  {
    "url": "assets/js/16.a18f6436.js",
    "revision": "660bcaf1b54fca764eb2d3f9b272aac0"
  },
  {
    "url": "assets/js/17.1964448a.js",
    "revision": "26a40c99d6ad37cff0cec13acaa77f25"
  },
  {
    "url": "assets/js/18.cbff64de.js",
    "revision": "2a3c6e4cd5ec87df44f86f3aca5eab6e"
  },
  {
    "url": "assets/js/19.50d21a36.js",
    "revision": "125c241106f0c8ba2a4d417e5c7c55d8"
  },
  {
    "url": "assets/js/2.8378af32.js",
    "revision": "85ec72eef4cd1d64c592292b1837f1ae"
  },
  {
    "url": "assets/js/3.d750fc0b.js",
    "revision": "7af860f0e33abe638f0f1c247451ddde"
  },
  {
    "url": "assets/js/4.b2f89e29.js",
    "revision": "bf479ade86baf07d0455d25c7a657d62"
  },
  {
    "url": "assets/js/5.f052dafe.js",
    "revision": "3c051dcef8f3d7f98e669f3750b1eb80"
  },
  {
    "url": "assets/js/6.31b2ca3e.js",
    "revision": "bbd0852891a78ffdb370ef49e2ec4e5a"
  },
  {
    "url": "assets/js/7.aefeff42.js",
    "revision": "45742707d652b68664447dfeb0852875"
  },
  {
    "url": "assets/js/8.3526547d.js",
    "revision": "2cf5067fdf7b0bc5b85b97fbec87ece1"
  },
  {
    "url": "assets/js/9.f4eb60f8.js",
    "revision": "6360fcc91f1a50074917a76c6b47cfc4"
  },
  {
    "url": "assets/js/app.58924a0c.js",
    "revision": "fbbdd98c9332d99d1e923bf78930efe5"
  },
  {
    "url": "img/logo.jpeg",
    "revision": "d76114559a4051b25790e629b997acbb"
  },
  {
    "url": "index.html",
    "revision": "c87c586a7f5ddecc9677193f105a3858"
  },
  {
    "url": "life/2019-05-26.html",
    "revision": "d48a21de2a703a5c2535383584b8f1d3"
  },
  {
    "url": "life/index.html",
    "revision": "00b803d3bbcb60ecee9a2f495797a484"
  },
  {
    "url": "massage/index.html",
    "revision": "897e754505311b8c75dad096303c2486"
  },
  {
    "url": "ponder/index.html",
    "revision": "a31558258d466d184c4a032b53248681"
  },
  {
    "url": "tags/index.html",
    "revision": "edff72d4e566385fb43f3aabc8196a3a"
  },
  {
    "url": "technology/2021-03-12.html",
    "revision": "11c6bfcbe4d4abccc59b168d02cb7a2a"
  },
  {
    "url": "technology/index.html",
    "revision": "08ff91139ee8e5522060f4f2ae59d740"
  },
  {
    "url": "timeLine/index.html",
    "revision": "4d9a792ca0e59a553d4a7d0fd02ee6ba"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
