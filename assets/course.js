(function(){
  var L = window.LESSONS || [];
  var here = location.pathname.split('/').pop();
  var nav = document.querySelector('[data-lesson-nav]');
  if (nav) {
    var i = L.findIndex(function(l){ return here === l.slug + '.html'; });
    var prev = L[i-1], next = L[i+1];
    function link(l, label){ return l && l.status === 'ready' ? '<a href="' + l.slug + '.html">' + label + ' ' + l.title + '</a>' : '<span class="meta">' + (l ? label + ' ' + l.title + ' (coming soon)' : '') + '</span>'; }
    nav.innerHTML = '<span>' + (prev ? link(prev, '\u2190') : '<a href="../index.html">\u2190 Course home</a>') + '</span><span>' + link(next, '\u2192') + '</span>';
  }
  var dataEl = document.getElementById('quiz-data');
  if (dataEl) {
    var qs = JSON.parse(dataEl.textContent), root = document.getElementById('quiz'), score = 0, done = 0;
    var summary = document.createElement('p'); summary.className = 'fb';
    qs.forEach(function(q){
      var f = document.createElement('fieldset'); f.className = 'q';
      var lg = document.createElement('legend'); lg.textContent = q.q; f.appendChild(lg);
      var fb = document.createElement('p'); fb.className = 'fb';
      q.options.forEach(function(o, oi){
        var b = document.createElement('button'); b.type = 'button'; b.textContent = o;
        b.onclick = function(){
          if (f.dataset.done) return; f.dataset.done = 1; done++;
          if (oi === q.answer) { score++; b.classList.add('right'); fb.textContent = 'Correct. ' + q.why; }
          else { b.classList.add('wrong'); f.querySelectorAll('button')[q.answer].classList.add('right'); fb.textContent = 'Not quite. ' + q.why; }
          if (done === qs.length) summary.textContent = 'Score: ' + score + ' / ' + qs.length + '. Reload the page to retry in a different order of thinking: answer from memory first.';
        };
        f.appendChild(b);
      });
      f.appendChild(fb); root.appendChild(f);
    });
    root.appendChild(summary);
  }
  var blocks = document.querySelectorAll('pre.mermaid');
  if (blocks.length) {
    import('https://cdn.jsdelivr.net/npm/mermaid@11.4.1/dist/mermaid.esm.min.mjs').then(function(m){
      var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      m.default.initialize({startOnLoad:false, theme: dark ? 'dark' : 'neutral'});
      m.default.run({nodes: blocks});
    }).catch(function(){ /* diagram source stays visible as text if the CDN is unreachable */ });
  }
})();
