// Replace <link rel="apple-touch-icon" sizes="192x192"> with local PNG
const appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"][sizes="192x192"]');
if (appleTouchIcon) {
    appleTouchIcon.href = chrome.runtime.getURL('icons8-twitter-bird-480.png');
}

// Replace <link rel="mask-icon" sizes="any"> with local SVG
const maskIcon = document.querySelector('link[rel="mask-icon"][sizes="any"]');
if (maskIcon) {
    maskIcon.href = chrome.runtime.getURL('icons8-twitter-bird.svg');
}

// Replace <link rel="shortcut icon"> with local ICO
const shortcutIcon = document.querySelector('link[rel="shortcut icon"]');
if (shortcutIcon) {
    shortcutIcon.href = chrome.runtime.getURL('icons8-twitter-bird-32.ico');
}

// Fallback: If icons are not present at load, observe for DOM changes and try again
const observer = new MutationObserver(() => {
    const appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"][sizes="192x192"]');
    if (appleTouchIcon) {
        appleTouchIcon.href = chrome.runtime.getURL('icons8-twitter-bird-480.png');
    }
    const maskIcon = document.querySelector('link[rel="mask-icon"][sizes="any"]');
    if (maskIcon) {
        maskIcon.href = chrome.runtime.getURL('icons8-twitter-bird.svg');
    }
    const shortcutIcon = document.querySelector('link[rel="shortcut icon"]');
    if (shortcutIcon) {
        shortcutIcon.href = chrome.runtime.getURL('icons8-twitter-bird-32.ico');
    }
});

observer.observe(document.head || document.documentElement, { childList: true, subtree: true });

// 替换 aria-label 为 X 的 a 标签下的 div 下的 svg 为 img
function replaceXLogoSvg() {
    const aTags = document.querySelectorAll('a[aria-label="X"]');
    aTags.forEach(a => {
        const div = a.querySelector('div');
        if (div) {
            const svg = div.querySelector('svg');
            if (svg) {
                const img = document.createElement('img');
                img.src = chrome.runtime.getURL('icons8-twitter-bird-480.png');
                img.style.width = '2rem';
                // img.style.height = '2rem';
                img.style.display = svg.style.display;
                svg.replaceWith(img);
            }
        }
    });
}

// 初始执行一次
replaceXLogoSvg();
// 监听 DOM 变化，动态替换
observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
const svgObserver = new MutationObserver(replaceXLogoSvg);
svgObserver.observe(document.body || document.documentElement, { childList: true, subtree: true });

// 替换 aria-label 为 Premium 的 a 标签下的 div 下的 div 下的 svg 为 img
function replacePremiumLogoSvg() {
    const aTags = document.querySelectorAll('a[aria-label="Premium"]');
    aTags.forEach(a => {
        const div1 = a.querySelector('div');
        if (div1) {
            const div2 = div1.querySelector('div');
            if (div2) {
                const svg = div2.querySelector('svg');
                if (svg) {
                    const img = document.createElement('img');
                    img.src = chrome.runtime.getURL('icons8-twitter-bird-50.png');
                    img.style.height = '1.75rem';
                    img.style.display = svg.style.display;
                    svg.replaceWith(img);
                }
            }
        }
    });
}

// 初始执行一次
replacePremiumLogoSvg();
// 监听 DOM 变化，动态替换
const premiumSvgObserver = new MutationObserver(replacePremiumLogoSvg);
premiumSvgObserver.observe(document.body || document.documentElement, { childList: true, subtree: true }); 