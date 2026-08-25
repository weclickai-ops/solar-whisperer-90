/* Glarenergy — shared behaviour. ~2KB, no dependencies. */
(function () {
  "use strict";
  var fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  var calm = window.matchMedia("(prefers-reduced-motion:reduce)").matches;

  /* ---- scroll reveal ---- */
  var rv = document.querySelectorAll(".rv");
  if (calm || !("IntersectionObserver" in window)) {
    for (var i = 0; i < rv.length; i++) rv[i].classList.add("in");
  } else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    for (var j = 0; j < rv.length; j++) {
      rv[j].style.transitionDelay = Math.min(j, 4) * 60 + "ms";
      io.observe(rv[j]);
    }
  }

  /* ---- mobile menu ---- */
  var burger = document.getElementById("burger"),
      menu = document.getElementById("menu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
    });
  }

  /* ---- cursor glow inside cards ---- */
  if (fine) {
    document.addEventListener("pointermove", function (e) {
      var el = e.target.closest(".card,.step,.sheet");
      if (!el) return;
      var r = el.getBoundingClientRect();
      el.style.setProperty("--mx", e.clientX - r.left + "px");
      el.style.setProperty("--my", e.clientY - r.top + "px");
    }, { passive: true });
  }

  /* ---- page-wide cursor light ---- */
  var glow = document.getElementById("glow");
  if (glow && fine && !calm) {
    var tx = innerWidth / 2, ty = innerHeight / 2, gx = tx, gy = ty, run = false;
    document.addEventListener("pointermove", function (e) {
      tx = e.clientX; ty = e.clientY;
      glow.classList.add("on");
      if (!run) { run = true; requestAnimationFrame(tick); }
    }, { passive: true });
    document.addEventListener("mouseleave", function () { glow.classList.remove("on"); });
    function tick() {
      gx += (tx - gx) * 0.12; gy += (ty - gy) * 0.12;
      glow.style.transform = "translate3d(" + gx + "px," + gy + "px,0)";
      if (Math.abs(tx - gx) > 0.4 || Math.abs(ty - gy) > 0.4) requestAnimationFrame(tick);
      else run = false;
    }
  }

  /* ---- contact dock ---- */
  var dock = document.getElementById("dock"),
      dockBtn = document.getElementById("dockBtn"), hideT;
  if (dock && dockBtn) {
    function setOpen(v) {
      dock.classList.toggle("open", v);
      dockBtn.setAttribute("aria-expanded", v);
    }
    function onScroll() {
      dock.classList.toggle("show", scrollY > Math.min(520, innerHeight * 0.6));
    }
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    dockBtn.addEventListener("click", function (e) {
      e.stopPropagation(); setOpen(!dock.classList.contains("open"));
    });
    if (fine) {
      dock.addEventListener("mouseenter", function () { clearTimeout(hideT); setOpen(true); });
      dock.addEventListener("mouseleave", function () {
        hideT = setTimeout(function () { setOpen(false); }, 260);
      });
    }
    document.addEventListener("click", function (e) {
      if (!dock.contains(e.target)) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { setOpen(false); dockBtn.focus(); }
    });
  }

  /* ---- product configuration toggle ---- */
  var CFG = {
    "2p": ["2P &mdash; HSAT", "Two modules in portrait", "Horizontal single axis",
           "10% N&ndash;S / 10% E&ndash;W", "Shared drive, efficient land use"],
    "1p": ["1P &mdash; TSAT", "One module in portrait", "Tilted single axis",
           "10% N&ndash;S / 10% E&ndash;W", "Single-row layout on tighter sites"]
  };
  var segBtns = document.querySelectorAll(".seg button[data-cfg]");
  for (var s = 0; s < segBtns.length; s++) {
    segBtns[s].addEventListener("click", function () {
      var k = this.getAttribute("data-cfg"), d = CFG[k];
      document.getElementById("cn").innerHTML = d[0];
      for (var n = 1; n <= 4; n++) document.getElementById("c" + n).innerHTML = d[n];
      for (var m = 0; m < segBtns.length; m++)
        segBtns[m].setAttribute("aria-pressed", segBtns[m] === this);
    });
  }

  /* ================================================================
     CONTACT FORM
     Replace ENDPOINT with your Formspree ID (formspree.io -> New form).
     Until you do, the form falls back to opening the visitor's mail
     client so no enquiry is ever silently lost.
     ================================================================ */
  var ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

  var form = document.getElementById("enq");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var n = document.getElementById("n"),
          em = document.getElementById("em"),
          ms = document.getElementById("ms"), ok = true;

      function mark(el, errId, valid) {
        document.getElementById(errId).style.display = valid ? "none" : "block";
        el.setAttribute("aria-invalid", !valid);
        if (!valid) ok = false;
      }
      mark(n, "en", !!n.value.trim());
      mark(em, "ee", /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em.value));
      mark(ms, "em2", !!ms.value.trim());
      if (!ok) { (n.value.trim() ? em : n).focus(); return; }

      if (document.getElementById("website").value) return;   /* honeypot */

      var btn = document.getElementById("sendBtn");
      btn.disabled = true; btn.textContent = "Sending…";

      if (ENDPOINT.indexOf("YOUR_FORM_ID") > -1) {
        var body = "Name: " + n.value + "\nCompany: " + document.getElementById("co").value +
          "\nEmail: " + em.value + "\nPhone: " + document.getElementById("ph").value +
          "\nLocation: " + document.getElementById("loc").value +
          "\nCapacity: " + document.getElementById("cap").value +
          "\nRequirement: " + document.getElementById("rq").value +
          "\n\n" + ms.value;
        location.href = "mailto:connect@glarenergy.com?subject=" +
          encodeURIComponent("Enquiry from " + (document.getElementById("co").value || n.value)) +
          "&body=" + encodeURIComponent(body);
        btn.disabled = false; btn.innerHTML = "Submit Enquiry &rarr;";
        return;
      }

      fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      }).then(function (r) {
        if (!r.ok) throw new Error();
        form.reset();
        document.getElementById("ok").hidden = false;
        document.getElementById("fail").hidden = true;
      }).catch(function () {
        document.getElementById("fail").hidden = false;
      }).finally(function () {
        btn.disabled = false; btn.innerHTML = "Submit Enquiry &rarr;";
      });
    });
  }
})();
