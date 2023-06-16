/* 实现加载图片，要求：传入一个url数组，设置加载时长为1000ms，
如果存在一个图片加载失败就输出“相应的url load fail”；如果图片加载超时就输出“相应的url timeout”。 */
function loadImg(url, timeout) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    const timeoutId = setTimeout(() => {
      reject(`${url} 超时${timeout}ms`);
    }, timeout);

    img.onerror = () => {
      clearTimeout(timeoutId);
      reject(`${url} load fail`);
    };

    img.onload = () => {
      clearTimeout(timeoutId);
      resolve(url);
    };

    img.src = url;
  });
}

function preLoadImage(urls, timeout) {
  const promises = urls.map(loadImg, timeout);
  return Promise.all(promises);
}

const imgUrls = [
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg",
  "https://example.com/image3.jpg",
];

preLoadImage(imgUrls, 1000);
