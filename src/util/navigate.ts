import React from "react";

export function navigateToFragment(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.href;
  if (href.endsWith("#")) {
    window.scrollTo(0, 0);
    e.preventDefault();
  } else if (href.includes("#")) {
    const id = href.substring(href.indexOf("#") + 1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    e.preventDefault();
  }
}
