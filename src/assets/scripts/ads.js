(function () {
  function renderAd(el, opts) {
    var slotName = (el.getAttribute("data-slot") || "default").toLowerCase();
    var ad = document.createElement("div");
    ad.setAttribute("role", "img");
    ad.setAttribute("aria-label", "Advertisement " + slotName);
    ad.style.display = "flex";
    ad.style.alignItems = "center";
    ad.style.justifyContent = "space-between";
    ad.style.gap = "12px";
    ad.style.padding = "10px";
    ad.style.background = "#fff";
    ad.style.border = "1px solid #e6e6e6";
    ad.style.borderRadius = "8px";

    var left = document.createElement("div");
    left.textContent = "Sponsored • " + slotName;
    left.style.fontWeight = "600";

    var center = document.createElement("div");
    center.textContent = "Your Ad Here — 728×90 (demo)";
    center.style.flex = "1";
    center.style.textAlign = "center";

    var btn = document.createElement("a");
    btn.href = "#";
    btn.textContent = "Learn more";
    btn.style.textDecoration = "none";
    btn.style.border = "1px solid #cfd7e3";
    btn.style.padding = "6px 10px";
    btn.style.borderRadius = "6px";
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("[ads.js] Demo click on slot:", slotName);
    });

    ad.appendChild(left);
    ad.appendChild(center);
    ad.appendChild(btn);
    el.innerHTML = "";
    el.appendChild(ad);
  }

  function init() {
    var slots = document.querySelectorAll(".ad-slot");
    if (!slots.length) return;
    slots.forEach(function (el) { renderAd(el, {}); });
    console.log("[ads.js] Rendered", slots.length, "demo ad slot(s).");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
