// ./assets/js/custom-cursors.js
// Cursor loader and assignment.
// This script maps DOM element types and data attributes to .cur files
// and applies native .cur cursors via inline styles.
// Place this file at ./assets/js/custom-cursors.js and include it
// just before </body> in index.html using: <script src="./assets/js/custom-cursors.js"></script>

(function () {
  'use strict';

  // Base path for cursor files, relative to index.html
  // Make sure all .cur files are placed under ./assets/cursors/
  var BASE = './assets/cursors/';

  // Map logical names to filenames. Keep keys short and convenient.
  var CURSORS = {
    normal: 'normal.cur',
    unavailable: 'unavailable.cur',
    vertical_resize: 'vertical_resize.cur',
    background_run: 'background_run.cur',
    candidate: 'candidate.cur',
    precise_select: 'precise_select.cur',
    link_select: 'link_select.cur',
    busy: 'busy.cur',
    handwriting: 'handwriting.cur',
    horizontal_resize: 'horizontal_resize.cur',
    text_select: 'text_select.cur',
    diagonal1: 'diagonal_resize1.cur',
    diagonal2: 'diagonal_resize2.cur',
    move: 'move.cur',
    help: 'help.cur'
  };

  // Helper: build a cursor CSS value with a fallback keyword
  function cursorValue(fileName, fallback) {
    // some browsers accept: url(path), fallback
    // use a safe format: url(path), fallback
    return 'url(' + BASE + fileName + '), ' + (fallback || 'auto');
  }

  // Apply default (normal) cursor to the whole document
  function applyDefaultCursor() {
    if (CURSORS.normal) {
      document.documentElement.style.cursor = cursorValue(CURSORS.normal, 'auto');
    }
  }

  // Apply cursor to a single element (inline style).
  // Using inline style avoids having to reference .cur files from CSS.
  function applyCursorToElement(el, cursorKey, fallback) {
    if (!el || !cursorKey || !CURSORS[cursorKey]) return;
    try {
      el.style.cursor = cursorValue(CURSORS[cursorKey], fallback);
    } catch (e) {
      // fail silently if browser rejects the cursor
    }
  }

  // Apply mappings for commonly used selectors
  function seedStaticMappings() {
    // links: show link_select (fallback pointer)
    document.querySelectorAll('a, a *').forEach(function (el) {
      applyCursorToElement(el, 'link_select', 'pointer');
    });

    // buttons and clickable affordances
    document.querySelectorAll('button, .btn, input[type="button"], input[type="submit"]').forEach(function (el) {
      applyCursorToElement(el, 'precise_select', 'pointer');
    });

    // text inputs / contenteditable -> text selection cursor
    document.querySelectorAll('input[type="text"], input[type="search"], textarea, [contenteditable="true"]').forEach(function (el) {
      applyCursorToElement(el, 'text_select', 'text');
    });

    // draggable elements -> move cursor
    document.querySelectorAll('[draggable="true"], .draggable').forEach(function (el) {
      applyCursorToElement(el, 'move', 'move');
    });

    // resize helpers (developer can add these classes to elements)
    document.querySelectorAll('.resize-vertical').forEach(function (el) {
      applyCursorToElement(el, 'vertical_resize', 'ns-resize');
    });
    document.querySelectorAll('.resize-horizontal').forEach(function (el) {
      applyCursorToElement(el, 'horizontal_resize', 'ew-resize');
    });
    document.querySelectorAll('.resize-diag1').forEach(function (el) {
      applyCursorToElement(el, 'diagonal1', 'nwse-resize');
    });
    document.querySelectorAll('.resize-diag2').forEach(function (el) {
      applyCursorToElement(el, 'diagonal2', 'nesw-resize');
    });

    // help / info elements
    document.querySelectorAll('.help, [title]').forEach(function (el) {
      applyCursorToElement(el, 'help', 'help');
    });

    // busy state: elements with .busy class
    document.querySelectorAll('.busy, [data-busy]').forEach(function (el) {
      applyCursorToElement(el, 'busy', 'wait');
    });

    // handwriting / stylus specific elements
    document.querySelectorAll('.handwriting, .scribble-area').forEach(function (el) {
      applyCursorToElement(el, 'handwriting', 'crosshair');
    });
  }

  // Data-attribute driven API:
  // If an element has data-cursor="move" (key from CURSORS),
  // the script will set that cursor on the element.
  function seedDataCursorAPI(root) {
    root = root || document;
    var els = root.querySelectorAll('[data-cursor]');
    els.forEach(function (el) {
      var key = el.getAttribute('data-cursor');
      // optional fallback: data-cursor-fallback="pointer"
      var fallback = el.getAttribute('data-cursor-fallback') || undefined;
      if (key && CURSORS[key]) {
        applyCursorToElement(el, key, fallback);
      }
    });
  }

  // Observe DOM mutations so dynamically inserted elements will get cursors
  function observeMutations() {
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        if (m.addedNodes && m.addedNodes.length) {
          m.addedNodes.forEach(function (node) {
            if (!(node instanceof Element)) return;
            // seed data-cursor for the added node and children
            if (node.hasAttribute && node.hasAttribute('data-cursor')) {
              seedDataCursorAPI(node);
            }
            // children may carry selectors too
            seedDataCursorAPI(node);
            // some common selectors that might be added dynamically
            if (node.matches && (node.matches('a') || node.matches('button') || node.matches('[draggable]'))) {
              // re-run static mappings for that node
              try {
                // apply appropriate mapping based on node type
                if (node.matches('a')) applyCursorToElement(node, 'link_select', 'pointer');
                if (node.matches('button')) applyCursorToElement(node, 'precise_select', 'pointer');
                if (node.matches('[draggable]')) applyCursorToElement(node, 'move', 'move');
              } catch (e) { /* ignore */ }
            }
          });
        }
      });
    });

    observer.observe(document.documentElement || document.body, {
      childList: true,
      subtree: true
    });
  }

  // Public init sequence
  function init() {
    // apply default to the document
    applyDefaultCursor();

    // apply mappings to existing DOM
    seedStaticMappings();

    // apply mappings for elements that use data-cursor
    seedDataCursorAPI(document);

    // watch for future nodes
    observeMutations();

    // Expose a light API for runtime changes (optional)
    window.CustomCursorAPI = {
      setDefault: function (key, fallback) {
        if (CURSORS[key]) {
          document.documentElement.style.cursor = cursorValue(CURSORS[key], fallback || 'auto');
        }
      },
      apply: function (el, key, fallback) {
        applyCursorToElement(el, key, fallback);
      }
    };
  }

  // Wait for DOM ready, then init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
