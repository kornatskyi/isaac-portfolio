//Adds styling for pseudo elements and just elements take 2 param
export const addRule = (function (style) {
    const sheet = document.head.appendChild(style).sheet;
    return function (selector, css) {
      const propText =
        typeof css === "string"
          ? css
          : Object.keys(css)
              .map(function (p) {
                return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
              })
              .join(";");
      sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
    };
  })(document.createElement("style"));
