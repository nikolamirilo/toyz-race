// All UI CSS, injected once as a <style> tag. Everything is sized in em relative to .tr-root,
// whose font-size scales with the STAGE (#app, a size container named "stage" — see index.html and
// src/core/stage.js), never with the viewport: on a phone held upright the stage is CSS-rotated, so
// vw/vh/@media would be wrong. Three layers of rules:
//   1. base            desktop look (1100x650 .. 2560x1440)
//   2. html.tr-touch   touch-first devices: 44px targets, no key hints, HUD re-arranged around the touch controls
//   3. @container stage (max-height:520px)   "compact": phone-landscape layouts (568x320 .. 932x430)
// Safe-area insets are read through --sat/--sar/--sab/--sal (stage top/right/bottom/left), which are
// re-mapped under html.tr-rotated because env() always describes the un-rotated screen.

export const STYLE_ID = 'tr-ui-style';

export const CSS = `
.tr-root{
  --ink:#0b0f22; --navy:#141b3a; --panel:rgba(14,19,44,.82); --line:rgba(255,255,255,.13);
  --cream:#fff6e0; --muted:#a9b3d6; --orange:#ff6b1a; --orange-d:#c2410c; --yellow:#ffd02e;
  --teal:#19d3c5; --pink:#ff3d77; --green:#6ee06a;
  --display:"Arial Black","Avenir Next Heavy","Segoe UI Black","Helvetica Neue",Impact,system-ui,sans-serif;
  --body:"Avenir Next","Segoe UI",system-ui,-apple-system,"Helvetica Neue",Arial,sans-serif;
  --sat:env(safe-area-inset-top,0px); --sar:env(safe-area-inset-right,0px); --sab:env(safe-area-inset-bottom,0px); --sal:env(safe-area-inset-left,0px);
  --tb:max(44px,3.3em);
  position:absolute; inset:0; overflow:hidden; pointer-events:none; z-index:10;
  font-family:var(--body); font-size:clamp(11px,1.9cqmin,27px); line-height:1.25; color:var(--cream);
  -webkit-font-smoothing:antialiased; user-select:none; -webkit-user-select:none; -webkit-touch-callout:none; -webkit-tap-highlight-color:transparent;
  -webkit-text-size-adjust:100%; text-size-adjust:100%;
}
/* stage rotated 90deg clockwise: stage left = screen top, stage top = screen right, stage right = screen bottom, stage bottom = screen left */
html.tr-rotated .tr-root{--sal:env(safe-area-inset-top,0px); --sat:env(safe-area-inset-right,0px); --sar:env(safe-area-inset-bottom,0px); --sab:env(safe-area-inset-left,0px)}
.tr-root *{box-sizing:border-box}
.tr-layer{position:absolute; inset:0; display:none}
.tr-layer.on{display:block}
.tr-disp{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; letter-spacing:.02em}

/* ------------------------------------------------------------------ logo */
.tr-logo{position:relative; display:inline-flex; flex-direction:column; align-items:flex-start; font-family:var(--display); font-weight:900; font-style:italic; line-height:.9; filter:drop-shadow(0 .06em .08em rgba(0,0,0,.45))}
.tr-logo-toyz{display:inline-flex; gap:.04em; background:var(--yellow); color:var(--ink); font-size:.36em; letter-spacing:.14em; padding:.2em .5em .16em .6em; border:.14em solid var(--ink); border-radius:.3em; transform:rotate(-5deg) translate(.5em,.34em); box-shadow:.14em .16em 0 var(--ink); position:relative; z-index:2}
.tr-logo-toyz::before{content:""; position:absolute; left:.22em; top:50%; width:.2em; height:.2em; margin-top:-.1em; border-radius:50%; background:var(--ink); opacity:.85}
.tr-logo-toyz span:first-child{margin-left:.3em}
.tr-logo-race{display:flex; align-items:baseline; color:var(--cream); letter-spacing:-.02em; -webkit-text-stroke:.07em var(--ink); paint-order:stroke fill;
  text-shadow:.025em .03em 0 var(--orange),.05em .06em 0 var(--orange),.075em .09em 0 var(--orange),.1em .12em 0 var(--orange-d),.125em .15em 0 var(--ink),.15em .18em 0 var(--ink)}
.tr-logo-race span{display:inline-block}
.tr-logo-race span:nth-child(1){transform:rotate(-4deg)}
.tr-logo-race span:nth-child(2){transform:rotate(3deg) translateY(.02em)}
.tr-logo-race span:nth-child(3){transform:rotate(-2deg) translateY(-.02em); color:var(--yellow)}
.tr-logo-race span:nth-child(4){transform:rotate(2deg) translateY(.015em)}
.tr-logo-car{position:absolute; left:2.02em; top:-1.0em; width:2.5em; height:auto; z-index:3; pointer-events:none; transform-origin:30% 70%; animation:tr-logo-car 3.2s ease-in-out infinite}
@keyframes tr-logo-car{0%,100%{transform:rotate(0deg) translate(0,0)}50%{transform:rotate(-2.5deg) translate(-.03em,-.035em)}}
.tr-logo-o{width:.84em; height:.84em; margin:0 .05em 0 .03em; align-self:center; transform:translateY(.015em); filter:drop-shadow(.055em .07em 0 var(--ink))}
.tr-logo-o svg{width:100%; height:100%; display:block; animation:tr-spin 5s linear infinite}
.tr-logo-strip{align-self:stretch; height:.11em; margin:.1em .1em 0 .15em; border-radius:.03em; border:.03em solid var(--ink); transform:skewX(-14deg);
  background:repeating-linear-gradient(90deg,var(--ink) 0 .11em,var(--cream) .11em .22em)}
@keyframes tr-spin{to{transform:rotate(360deg)}}

/* ------------------------------------------------------------------ menu shell */
.tr-menu{pointer-events:none}
.tr-screen{position:absolute; inset:0; display:none; pointer-events:none}
.tr-screen.on{display:block; animation:tr-fade .28s ease-out}
@keyframes tr-fade{from{opacity:0}to{opacity:1}}
.tr-screen.tr-left::before{content:""; position:absolute; inset:0; background:linear-gradient(90deg,rgba(8,11,28,.9) 0%,rgba(8,11,28,.72) 30%,rgba(8,11,28,.25) 50%,rgba(8,11,28,0) 62%)}
.tr-screen.tr-center::before{content:""; position:absolute; inset:0; background:rgba(8,11,28,.62)}
.tr-side{position:absolute; left:calc(2.4em + var(--sal)); top:calc(1.6em + var(--sat)); bottom:calc(3.6em + var(--sab)); width:45%; max-width:44em; min-width:34em; display:flex; flex-direction:column; gap:.7em; pointer-events:auto; animation:tr-slide .3s cubic-bezier(.2,.9,.3,1.1)}
@keyframes tr-slide{from{transform:translateX(-1.6em); opacity:0}to{transform:none; opacity:1}}
.tr-mid{position:absolute; left:50%; top:calc(1.6em + var(--sat)); bottom:calc(3.6em + var(--sab)); width:66em; max-width:calc(100% - 4em - var(--sal) - var(--sar)); transform:translateX(-50%); display:flex; flex-direction:column; gap:.7em; pointer-events:auto}
.tr-head{display:flex; align-items:center; gap:.8em; margin-bottom:.1em}
.tr-backbtn{display:none; flex:none; place-items:center; width:2.1em; height:2.1em; border-radius:.6em; background:rgba(22,29,62,.9); border:.15em solid var(--ink); box-shadow:0 .17em 0 var(--ink); color:var(--cream); font-style:normal; font-size:1.15em; cursor:pointer; pointer-events:auto}
.tr-backbtn:active{transform:translateY(.12em); box-shadow:0 .06em 0 var(--ink); background:var(--yellow); color:var(--ink)}
.tr-bottom{display:flex; flex-direction:column; gap:.7em}
.tr-head h2{margin:0; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:2.1em; letter-spacing:.01em; color:var(--cream); -webkit-text-stroke:.14em var(--ink); paint-order:stroke fill; text-shadow:.06em .08em 0 var(--orange),.11em .14em 0 var(--ink)}
.tr-chip{display:inline-block; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.78em; letter-spacing:.08em; padding:.3em .7em .26em; border-radius:.5em; background:var(--teal); color:var(--ink); border:.16em solid var(--ink); box-shadow:.12em .14em 0 var(--ink); white-space:nowrap}
.tr-chip.y{background:var(--yellow)} .tr-chip.p{background:var(--pink); color:#fff} .tr-chip.o{background:var(--orange)}
.tr-card{background:var(--panel); border:.14em solid var(--line); border-radius:1em; padding:.9em 1.1em; -webkit-backdrop-filter:blur(8px); backdrop-filter:blur(8px); box-shadow:0 .5em 1.4em rgba(0,0,0,.35)}
.tr-list{display:flex; flex-direction:column; gap:.55em}

/* buttons */
.tr-btn{position:relative; display:flex; align-items:center; justify-content:space-between; gap:1em; padding:.62em 1.1em .58em 1.2em; background:rgba(22,29,62,.9); border:.17em solid var(--ink); border-radius:.75em; box-shadow:0 .26em 0 var(--ink); color:var(--cream); cursor:pointer; pointer-events:auto; transition:transform .13s cubic-bezier(.2,.9,.3,1.4),background .1s,color .1s}
.tr-btn-l{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:1.25em; letter-spacing:.03em; white-space:nowrap}
.tr-btn-s{font-size:.82em; color:var(--muted); text-align:right; font-weight:600}
.tr-btn.tr-focus{background:var(--yellow); color:var(--ink); transform:translateX(.7em); box-shadow:0 .26em 0 var(--ink),0 0 0 .14em var(--cream),0 0 1.4em rgba(255,208,46,.45)}
.tr-btn.tr-focus .tr-btn-s{color:#5a4a10}
.tr-btn.tr-off{opacity:.55}
.tr-ver{opacity:.6; font-weight:600; letter-spacing:0; text-transform:none}
.tr-btn.tr-off.tr-focus{opacity:.8}
.tr-btn.tr-focus::before{content:""; position:absolute; left:-1.05em; top:50%; margin-top:-.45em; border:.45em solid transparent; border-left:.7em solid var(--yellow); filter:drop-shadow(0 0 .1em var(--ink)); animation:tr-nudge .7s ease-in-out infinite}
@keyframes tr-nudge{50%{transform:translateX(.2em)}}
.tr-btn.tr-go{background:var(--orange); justify-content:center; color:#fff}
.tr-btn.tr-go .tr-btn-l{font-size:1.4em; text-shadow:.05em .07em 0 var(--ink)}
.tr-btn.tr-go.tr-focus{background:var(--yellow); color:var(--ink); transform:scale(1.03)}
.tr-btn.tr-go.tr-focus .tr-btn-l{text-shadow:none}
.tr-btn.tr-go.tr-focus::before{display:none}
.tr-btn.tr-small{padding:.4em 1em .36em}
.tr-btn.tr-small .tr-btn-l{font-size:1em}
.tr-btn:active{transform:translateY(.16em); box-shadow:0 .1em 0 var(--ink)}

/* rows (selectors / sliders / inputs) */
.tr-row{display:flex; align-items:center; justify-content:space-between; gap:1em; padding:.42em .7em .42em 1em; border-radius:.7em; border:.14em solid transparent; background:rgba(255,255,255,.05); cursor:pointer; pointer-events:auto; transition:background .1s,border-color .1s}
.tr-row-l{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.95em; letter-spacing:.05em; color:var(--muted)}
.tr-row.tr-focus{background:rgba(255,208,46,.16); border-color:var(--yellow); box-shadow:0 0 1em rgba(255,208,46,.22)}
.tr-row.tr-focus .tr-row-l{color:var(--yellow)}
.tr-sel{display:flex; align-items:center; gap:.3em}
.tr-sel b{min-width:6.2em; text-align:center; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:1.05em}
.tr-arr{display:grid; place-items:center; width:1.7em; height:1.7em; border-radius:.45em; font-style:normal; font-size:.8em; color:var(--cream); background:rgba(255,255,255,.1); transition:transform .1s,background .1s}
.tr-arr:hover{background:var(--yellow); color:var(--ink)}
.tr-arr.off{opacity:.25}
.tr-row.tr-focus .tr-arr{background:rgba(255,208,46,.28)}
.tr-row.tr-focus .tr-arr:hover{background:var(--yellow)}
.tr-arr.bump{animation:tr-bump .16s}
@keyframes tr-bump{50%{transform:scale(1.35)}}
.tr-slider{position:relative; width:13em; height:1.5em; display:flex; align-items:center; touch-action:none}
.tr-slider::before{content:""; position:absolute; left:0; right:0; height:.55em; border-radius:.3em; background:rgba(255,255,255,.14); border:.1em solid var(--ink)}
.tr-slider-fill{position:absolute; left:0; height:.55em; border-radius:.3em; background:linear-gradient(90deg,var(--teal),var(--yellow)); border:.1em solid var(--ink)}
.tr-slider-knob{position:absolute; width:1.15em; height:1.15em; margin-left:-.57em; border-radius:50%; background:var(--cream); border:.2em solid var(--ink); box-shadow:0 .12em 0 var(--ink)}
.tr-row.tr-focus .tr-slider-knob{background:var(--yellow)}
.tr-val{min-width:2.6em; text-align:right; font-family:var(--display); font-weight:900; font-style:italic; font-variant-numeric:tabular-nums}
.tr-rowr{display:flex; align-items:center; gap:.8em}
.tr-input{width:11em; font:inherit; font-family:var(--display); font-weight:900; font-style:italic; font-size:1.05em; color:var(--cream); text-align:center; background:rgba(0,0,0,.35); border:.14em solid var(--line); border-radius:.5em; padding:.28em .5em; outline:none; user-select:text; -webkit-user-select:text}
.tr-input:focus{border-color:var(--yellow); background:rgba(0,0,0,.6); box-shadow:0 0 0 .16em rgba(255,208,46,.35)}

/* hints bar */
.tr-hints{position:absolute; left:calc(2.4em + var(--sal)); bottom:calc(1.1em + var(--sab)); display:flex; gap:1.3em; align-items:center; font-size:.82em; font-weight:700; color:var(--muted); text-shadow:0 .08em .2em rgba(0,0,0,.8); letter-spacing:.03em}
.tr-hints span{display:flex; align-items:center; gap:.4em}
.tr-key{display:inline-grid; place-items:center; min-width:1.75em; height:1.75em; padding:0 .45em; font-family:var(--body); font-style:normal; font-weight:800; font-size:.9em; color:var(--ink); background:var(--cream); border:.14em solid var(--ink); border-radius:.4em; box-shadow:0 .16em 0 var(--ink); white-space:nowrap}

/* ------------------------------------------------------------------ title */
.tr-title::before{content:""; position:absolute; inset:0; background:radial-gradient(ellipse at 50% 40%,rgba(8,11,28,.05) 0%,rgba(8,11,28,.5) 70%,rgba(8,11,28,.82) 100%)}
.tr-title-in{position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1.4em; pointer-events:auto; cursor:pointer; padding-bottom:3em}
.tr-title .tr-logo{font-size:9.6em; animation:tr-logo-in .7s cubic-bezier(.2,1.2,.3,1) both}
@keyframes tr-logo-in{from{transform:scale(.6) rotate(-6deg); opacity:0}to{transform:none; opacity:1}}
.tr-tagline{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; letter-spacing:.32em; font-size:1em; color:var(--cream); text-shadow:0 .1em .3em rgba(0,0,0,.9); opacity:.92; margin-top:.4em}
.tr-tagline i{color:var(--yellow); font-style:normal; margin:0 .5em}
.tr-press{margin-top:2.2em; display:flex; align-items:center; gap:.7em; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:1.5em; letter-spacing:.14em; color:var(--cream); -webkit-text-stroke:.12em var(--ink); paint-order:stroke fill; animation:tr-pulse 1.3s ease-in-out infinite}
.tr-press .tr-key{font-size:.62em; -webkit-text-stroke:0; letter-spacing:.06em; padding:0 .7em; background:var(--yellow)}
@keyframes tr-pulse{0%,100%{opacity:1; transform:scale(1)}50%{opacity:.55; transform:scale(.97)}}
.tr-foot{position:absolute; right:calc(2.4em + var(--sar)); bottom:calc(1.1em + var(--sab)); font-size:.75em; font-weight:700; color:var(--muted); letter-spacing:.14em; text-transform:uppercase; text-shadow:0 .08em .2em rgba(0,0,0,.8)}

/* ------------------------------------------------------------------ main menu */
.tr-main .tr-side{width:36%; min-width:31em; max-width:36em; justify-content:center; gap:1.3em; top:calc(1em + var(--sat))}
.tr-main .tr-logo{font-size:5.2em; margin-bottom:.05em}
.tr-main .tr-list{padding-right:1.2em}
.tr-hello{font-size:.9em; font-weight:700; color:var(--muted); letter-spacing:.04em; margin-top:-.4em; padding-left:.3em; text-shadow:0 .08em .2em rgba(0,0,0,.8)}
.tr-hello b{color:var(--yellow)}

/* ------------------------------------------------------------------ car select */
.tr-cargrid{display:grid; grid-template-columns:repeat(4,1fr); gap:.55em}
.tr-cartile{position:relative; display:flex; flex-direction:column; align-items:center; gap:.1em; padding:.45em .3em .4em; border-radius:.8em; background:rgba(22,29,62,.88); border:.16em solid var(--ink); box-shadow:0 .22em 0 var(--ink); cursor:pointer; pointer-events:auto; transition:transform .13s cubic-bezier(.2,.9,.3,1.4),background .1s}
.tr-carsvg{width:4.6em; height:2.45em; display:block; overflow:visible}
.tr-cartile span{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.72em; letter-spacing:.03em; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:100%}
.tr-cartile.sel{background:var(--cream); color:var(--ink); transform:translateY(-.2em) rotate(-1.5deg); box-shadow:0 .4em 0 var(--ink)}
.tr-cartile.sel::after{content:""; position:absolute; inset:-.42em; border-radius:1.05em; border:.17em solid var(--cream); opacity:.35}
.tr-focus > .tr-cartile.sel, .tr-focus > .tr-trktile.sel{background:var(--yellow)}
.tr-focus > .tr-cartile.sel::after, .tr-focus > .tr-trktile.sel::after{border-color:var(--yellow); opacity:1; animation:tr-ring 1s ease-in-out infinite}
@keyframes tr-ring{50%{opacity:.45}}
.tr-cardetail{display:flex; flex-direction:column; gap:.55em}
.tr-cd-top{display:flex; align-items:center; justify-content:space-between; gap:.8em}
.tr-cd-name{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:1.9em; line-height:1; letter-spacing:.01em}
.tr-cd-tag{font-size:.95em; color:var(--muted); font-weight:600; font-style:italic; min-height:1.25em}
.tr-swatch{display:inline-block; width:.62em; height:.62em; border-radius:50%; border:.1em solid var(--ink); margin-right:.35em; vertical-align:.06em; box-shadow:0 0 0 .08em rgba(255,255,255,.5)}
.tr-stats{display:grid; grid-template-columns:auto 1fr auto; gap:.42em .8em; align-items:center; margin-top:.15em}
.tr-stats label{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.78em; letter-spacing:.08em; color:var(--muted)}
.tr-bar{position:relative; height:.85em; border-radius:.3em; background:rgba(255,255,255,.1); border:.1em solid var(--ink); overflow:hidden; transform:skewX(-14deg)}
.tr-bar i{position:absolute; left:0; top:0; bottom:0; width:0; background:linear-gradient(90deg,var(--teal),var(--yellow) 70%,var(--orange)); background-size:var(--bw,100%) 100%; transition:width .45s cubic-bezier(.2,.9,.25,1.15)}
.tr-bar::after{content:""; position:absolute; inset:0; background:repeating-linear-gradient(90deg,transparent 0 calc(10% - .12em),rgba(11,15,34,.85) calc(10% - .12em) 10%)}
.tr-stats b{font-family:var(--display); font-weight:900; font-style:italic; font-size:.9em; min-width:1.4em; text-align:right; font-variant-numeric:tabular-nums}

/* ------------------------------------------------------------------ track select */
.tr-trkgrid{display:grid; grid-template-columns:repeat(2,1fr); gap:.55em}
.tr-trktile{position:relative; display:flex; align-items:center; gap:.7em; padding:.5em .8em; border-radius:.8em; background:rgba(22,29,62,.88); border:.16em solid var(--ink); box-shadow:0 .22em 0 var(--ink); cursor:pointer; pointer-events:auto; transition:transform .13s cubic-bezier(.2,.9,.3,1.4),background .1s}
.tr-trktile.sel{background:var(--cream); color:var(--ink); transform:translateY(-.15em); box-shadow:0 .37em 0 var(--ink)}
.tr-trktile.sel::after{content:""; position:absolute; inset:-.42em; border-radius:1.05em; border:.17em solid var(--cream); opacity:.35}
.tr-trknum{display:grid; place-items:center; flex:none; width:1.9em; height:1.9em; border-radius:50%; background:var(--orange); color:#fff; border:.15em solid var(--ink); font-family:var(--display); font-weight:900; font-style:italic; font-size:1em}
.tr-trkname{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.98em; line-height:1.05; letter-spacing:.02em}
.tr-stars{display:inline-flex; gap:.08em; font-size:.85em; line-height:1}
.tr-stars i{font-style:normal; color:rgba(128,128,150,.45)}
.tr-stars i.on{color:var(--orange); text-shadow:0 0 .02em var(--ink)}
.tr-trkdetail{display:flex; flex-direction:column; gap:.45em}
.tr-td-desc{font-size:.95em; color:var(--cream); opacity:.9; min-height:2.5em; line-height:1.3}
.tr-td-kart{font-size:.82em; line-height:1.3; color:var(--cream); margin-top:.5em; padding:.45em .7em; border-left:.25em solid var(--yellow); background:rgba(255,208,46,.1); border-radius:.3em}
.tr-td-kart b{color:var(--yellow); text-transform:uppercase; letter-spacing:.06em; margin-right:.5em}
.tr-td-meta{display:flex; gap:1.6em; align-items:flex-end}
.tr-meta{display:flex; flex-direction:column; gap:.1em}
.tr-meta small{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.68em; letter-spacing:.1em; color:var(--muted)}
.tr-meta b{font-family:var(--display); font-weight:900; font-style:italic; font-size:1.15em; font-variant-numeric:tabular-nums}
.tr-meta b.rec{color:var(--yellow)}
.tr-rows{display:flex; flex-direction:column; gap:.35em}

/* ------------------------------------------------------------------ options / controls */
.tr-options .tr-mid{width:46em; justify-content:center}
.tr-controls .tr-mid{justify-content:center}
.tr-cols{display:grid; grid-template-columns:1.05fr 1fr; gap:.9em}
.tr-cols h3{margin:0 0 .6em; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:1em; letter-spacing:.1em; color:var(--yellow)}
.tr-keys{display:grid; grid-template-columns:auto 1fr; gap:.55em 1em; align-items:center; font-weight:600; font-size:.98em}
.tr-keys .k{display:flex; gap:.3em; align-items:center; flex-wrap:wrap}
.tr-keys .k em{font-style:normal; color:var(--muted); font-size:.8em; margin:0 .1em}
.tr-items{display:flex; flex-direction:column; gap:.5em}
.tr-item{display:flex; gap:.7em; align-items:center}
.tr-item-ic{flex:none; display:grid; place-items:center; width:2.3em; height:2.3em; border-radius:.6em; background:rgba(255,255,255,.1); border:.14em solid var(--ink); font-size:1.15em}
.tr-item b{display:block; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.9em; letter-spacing:.03em}
.tr-item small{display:block; font-size:.82em; color:var(--muted); line-height:1.25}
.tr-foot-row{display:flex; justify-content:center; margin-top:.3em}
.tr-foot-row .tr-btn{min-width:14em; justify-content:center}
.tr-foot-row .tr-btn.tr-focus{transform:scale(1.04)}
.tr-foot-row .tr-btn.tr-focus::before{display:none}

/* ------------------------------------------------------------------ HUD */
.tr-hud{pointer-events:none; font-family:var(--display); font-weight:900; font-style:italic}
.tr-hud .tr-st{-webkit-text-stroke:.16em var(--ink); paint-order:stroke fill}
.tr-h-pos{position:absolute; left:calc(1.6em + var(--sal)); top:calc(1.1em + var(--sat)); display:flex; align-items:flex-end; gap:.5em; transform:rotate(-3deg); transform-origin:left top}
.tr-h-posn{font-size:5.4em; line-height:.85; color:var(--cream); -webkit-text-stroke:.09em var(--ink); paint-order:stroke fill; text-shadow:.045em .06em 0 var(--orange),.08em .1em 0 var(--ink)}
.tr-h-posn sup{font-size:.42em; vertical-align:.95em; margin-left:.04em; letter-spacing:.02em}
.tr-h-pos.p1 .tr-h-posn{color:var(--yellow)}
.tr-h-post{font-size:1.7em; color:var(--cream); opacity:.95; padding-bottom:.1em}
.tr-h-pos.pop .tr-h-posn{animation:tr-pop .35s cubic-bezier(.2,1.6,.4,1)}
@keyframes tr-pop{0%{transform:scale(1.5)}100%{transform:scale(1)}}
.tr-h-lap{position:absolute; left:calc(1.7em + var(--sal)); top:calc(7.6em + var(--sat)); display:flex; align-items:baseline; gap:.5em; padding:.3em .9em .26em .8em; background:rgba(11,15,34,.72); border:.14em solid var(--ink); border-radius:.6em; transform:skewX(-8deg)}
.tr-h-lap small{font-size:.8em; letter-spacing:.14em; color:var(--yellow)}
.tr-h-lap b{font-size:1.5em; font-variant-numeric:tabular-nums}
.tr-h-lap.final{background:var(--orange)}
.tr-h-lap.final small{color:var(--ink)}
.tr-h-times{position:absolute; right:calc(1.4em + var(--sar)); top:calc(1.1em + var(--sat)); display:grid; grid-template-columns:auto auto; gap:.12em .8em; align-items:baseline; padding:.55em .95em .5em; background:rgba(11,15,34,.72); border:.14em solid var(--ink); border-radius:.7em; font-variant-numeric:tabular-nums}
.tr-h-times small{font-size:.7em; letter-spacing:.14em; color:var(--muted); text-align:right}
.tr-h-times b{font-size:1.2em; text-align:right; min-width:4.6em}
.tr-h-times b.big{font-size:1.75em; color:var(--cream)}
.tr-h-times b.best{color:var(--yellow)}
.tr-h-times .dim{opacity:.75}
.tr-h-item{position:absolute; left:50%; top:calc(1.1em + var(--sat)); transform:translateX(-50%); display:flex; align-items:center; gap:.7em; padding:.4em .9em .4em .45em; background:rgba(11,15,34,.72); border:.14em solid var(--ink); border-radius:.9em; min-width:11.5em}
.tr-h-itemic{flex:none; display:grid; place-items:center; width:2.05em; height:2.05em; border-radius:.32em; font-size:1.55em; font-style:normal; background:rgba(255,255,255,.08); border:.09em dashed rgba(255,255,255,.3)}
.tr-h-item.has .tr-h-itemic{background:var(--yellow); border:.09em solid var(--ink); box-shadow:0 .1em 0 var(--ink); animation:tr-wiggle 1.2s ease-in-out infinite}
.tr-h-item.pop .tr-h-itemic{animation:tr-pop .4s cubic-bezier(.2,1.6,.4,1)}
@keyframes tr-wiggle{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}
.tr-h-itemt{display:flex; flex-direction:column; gap:.2em; line-height:1}
.tr-h-itemt b{font-size:1em; text-transform:uppercase; letter-spacing:.03em; white-space:nowrap}
.tr-h-itemt small{font-family:var(--body); font-style:normal; font-weight:700; font-size:.7em; color:var(--muted); display:flex; align-items:center; gap:.4em; letter-spacing:.04em}
.tr-h-itemt .tr-key{font-size:.9em; height:1.5em; box-shadow:0 .12em 0 var(--ink)}
.tr-h-item:not(.has) .tr-h-itemt b{color:var(--muted)}
.tr-h-item:not(.has) .tr-h-itemt small{visibility:hidden}
.tr-h-speed{position:absolute; right:calc(1.4em + var(--sar)); bottom:calc(1.2em + var(--sab)); width:13em; height:11.2em}
.tr-h-speed svg{position:absolute; inset:0; width:100%; height:100%; overflow:visible}
.tr-h-arcbg{fill:none; stroke:rgba(11,15,34,.78); stroke-width:15; stroke-linecap:round}
.tr-h-arcbg2{fill:none; stroke:rgba(255,255,255,.14); stroke-width:9; stroke-linecap:round}
.tr-h-arc{fill:none; stroke:url(#tr-speedgrad); stroke-width:9; stroke-linecap:round; stroke-dasharray:100 200; stroke-dashoffset:100}
.tr-h-speed.boost .tr-h-arc{stroke:var(--pink); filter:drop-shadow(0 0 3px var(--pink))}
.tr-h-kmh{position:absolute; left:0; right:0; top:3.5em; text-align:center; line-height:1}
.tr-h-kmh b{display:block; font-size:3.5em; font-variant-numeric:tabular-nums; -webkit-text-stroke:.1em var(--ink); paint-order:stroke fill; text-shadow:.04em .06em 0 var(--ink)}
.tr-h-kmh small{font-size:.8em; letter-spacing:.2em; color:var(--yellow); -webkit-text-stroke:.22em var(--ink); paint-order:stroke fill}
.tr-h-boost{position:absolute; left:50%; bottom:.5em; transform:translateX(-50%) skewX(-10deg); padding:.14em .8em .1em; border-radius:.4em; border:.14em solid var(--ink); background:rgba(11,15,34,.72); color:rgba(255,255,255,.3); font-size:.85em; letter-spacing:.2em; white-space:nowrap}
.tr-h-speed.boost .tr-h-boost{background:var(--pink); color:#fff; box-shadow:0 0 1.2em rgba(255,61,119,.8); animation:tr-flick .12s steps(2) infinite}
@keyframes tr-flick{50%{filter:brightness(1.35)}}
.tr-h-map{position:absolute; left:calc(1.4em + var(--sal)); bottom:calc(1.2em + var(--sab)); width:14.5em; height:14.5em; background:rgba(11,15,34,.6); border:.14em solid var(--ink); border-radius:1.1em; overflow:hidden}
.tr-h-map canvas{position:absolute; inset:0; width:100%; height:100%; display:block}
.tr-h-wrong{position:absolute; left:50%; top:31%; transform:translateX(-50%) skewX(-8deg); display:none; align-items:center; gap:.5em; padding:.3em 1.1em .24em; background:var(--pink); color:#fff; border:.16em solid var(--ink); border-radius:.6em; box-shadow:0 .25em 0 var(--ink); font-size:2em; letter-spacing:.08em; white-space:nowrap}
.tr-h-wrong.on{display:flex; animation:tr-blink .5s steps(1) infinite}
@keyframes tr-blink{50%{opacity:.25}}
.tr-h-count{position:absolute; left:50%; top:40%; transform:translate(-50%,-50%); font-size:14em; line-height:1; color:var(--yellow); -webkit-text-stroke:.07em var(--ink); paint-order:stroke fill; text-shadow:.035em .045em 0 var(--orange),.06em .08em 0 var(--ink); opacity:0; white-space:nowrap}
.tr-h-count.go{color:var(--green)}
.tr-h-count.run{animation:tr-count .95s cubic-bezier(.2,1.3,.4,1) both}
.tr-h-count.go.run{animation:tr-count-go 1.2s cubic-bezier(.2,1.3,.4,1) both}
@keyframes tr-count{0%{opacity:0; transform:translate(-50%,-50%) scale(2.2) rotate(-8deg)}22%{opacity:1; transform:translate(-50%,-50%) scale(1) rotate(-3deg)}75%{opacity:1; transform:translate(-50%,-50%) scale(.95) rotate(-3deg)}100%{opacity:0; transform:translate(-50%,-50%) scale(.7) rotate(-3deg)}}
@keyframes tr-count-go{0%{opacity:0; transform:translate(-50%,-50%) scale(.4)}18%{opacity:1; transform:translate(-50%,-50%) scale(1.15) rotate(-4deg)}70%{opacity:1; transform:translate(-50%,-50%) scale(1.05) rotate(-4deg)}100%{opacity:0; transform:translate(-50%,-50%) scale(1.9) rotate(-4deg)}}
.tr-h-flash{position:absolute; left:50%; top:22%; transform:translate(-50%,-50%) skewX(-8deg); padding:.3em 1.4em .24em; background:var(--yellow); color:var(--ink); border:.16em solid var(--ink); border-radius:.6em; box-shadow:0 .25em 0 var(--ink); font-size:2.1em; letter-spacing:.05em; white-space:nowrap; opacity:0; visibility:hidden}
.tr-h-flash.on{visibility:visible; animation:tr-flash-in .3s cubic-bezier(.2,1.5,.4,1) both}
.tr-h-flash.out{visibility:visible; animation:tr-flash-out .25s ease-in both}
@keyframes tr-flash-in{from{opacity:0; transform:translate(-50%,-50%) skewX(-8deg) scale(.5)}to{opacity:1; transform:translate(-50%,-50%) skewX(-8deg) scale(1)}}
@keyframes tr-flash-out{from{opacity:1; transform:translate(-50%,-50%) skewX(-8deg)}to{opacity:0; transform:translate(-50%,-90%) skewX(-8deg)}}

/* ------------------------------------------------------------------ pause */
.tr-pause{background:rgba(8,11,28,.66); pointer-events:auto}
.tr-pause.on{animation:tr-fade .18s ease-out}
.tr-pause-box{position:absolute; left:50%; top:50%; transform:translate(-50%,-52%); width:25em; display:flex; flex-direction:column; align-items:stretch; gap:1.1em}
.tr-pause-box h2{margin:0 0 .1em; text-align:center; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:3.6em; line-height:1; color:var(--cream); -webkit-text-stroke:.11em var(--ink); paint-order:stroke fill; text-shadow:.05em .07em 0 var(--orange),.09em .12em 0 var(--ink); transform:rotate(-3deg)}
.tr-pause-box .tr-btn{justify-content:center}
.tr-pause-box .tr-btn.tr-focus{transform:scale(1.05)}
.tr-pause-box .tr-btn.tr-focus::before{display:none}
.tr-pause .tr-hints{left:50%; transform:translateX(-50%)}

/* ------------------------------------------------------------------ results */
.tr-results{background:rgba(8,11,28,.6); pointer-events:auto}
.tr-results.on{animation:tr-fade .3s ease-out}
.tr-res-box{position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:72em; max-width:calc(100% - 3em - var(--sal) - var(--sar)); max-height:calc(100% - 2em - var(--sat) - var(--sab)); display:flex; flex-direction:column; gap:.75em}
.tr-res-head{display:flex; align-items:flex-end; justify-content:space-between; gap:1em; padding:0 .4em}
.tr-res-head h2{margin:0; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:2.9em; line-height:1; color:var(--cream); -webkit-text-stroke:.12em var(--ink); paint-order:stroke fill; text-shadow:.05em .07em 0 var(--orange),.09em .12em 0 var(--ink)}
.tr-res-head h2 em{color:var(--yellow); font-style:inherit}
.tr-res-sub{display:flex; align-items:center; gap:.6em; flex-wrap:wrap; justify-content:flex-end; padding-bottom:.3em}
.tr-res-sub span.t{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; letter-spacing:.08em; color:var(--muted); font-size:.95em}
.tr-badge{display:inline-flex; align-items:center; gap:.4em; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.95em; letter-spacing:.06em; padding:.34em .8em .28em; background:var(--pink); color:#fff; border:.16em solid var(--ink); border-radius:.55em; box-shadow:.12em .16em 0 var(--ink); transform:rotate(-3deg); animation:tr-badge 1s ease-in-out infinite; white-space:nowrap}
@keyframes tr-badge{50%{transform:rotate(-3deg) scale(1.08)}}
.tr-res-body{display:flex; gap:.8em; min-height:0; align-items:flex-start}
.tr-res-body .tr-card{padding:.6em .7em; min-width:0; overflow:auto; max-height:100%; touch-action:pan-x pan-y; -webkit-overflow-scrolling:touch}
.tr-res-main{flex:1 1 auto}
.tr-res-champ{flex:0 0 21em}
.tr-res-champ h3{margin:.1em .3em .45em; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.95em; letter-spacing:.08em; color:var(--yellow); display:flex; justify-content:space-between}
.tr-res-champ h3 span{color:var(--muted)}
.tr-table{width:100%; border-collapse:separate; border-spacing:0 .22em; font-variant-numeric:tabular-nums}
.tr-table th{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.68em; letter-spacing:.12em; color:var(--muted); text-align:left; padding:0 .8em .15em; white-space:nowrap}
.tr-table td{padding:.36em .8em .32em; background:rgba(255,255,255,.06); font-weight:700; font-size:.98em; white-space:nowrap}
.tr-table td:first-child{border-radius:.55em 0 0 .55em; font-family:var(--display); font-weight:900; font-style:italic; width:3em}
.tr-table td:last-child{border-radius:0 .55em .55em 0}
.tr-table .r{text-align:right}
.tr-table td.n{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; letter-spacing:.02em}
.tr-table td.c{color:var(--muted)}
.tr-table tr.me td{background:var(--yellow); color:var(--ink)}
.tr-table tr.me td.c{color:#5a4a10}
.tr-table tr{animation:tr-rowin .35s ease-out both}
@keyframes tr-rowin{from{opacity:0; transform:translateX(-1em)}to{opacity:1; transform:none}}
.tr-table .pts{color:var(--teal); font-family:var(--display); font-weight:900; font-style:italic}
.tr-table tr.me .pts{color:var(--orange-d)}
.tr-podium{display:flex; align-items:flex-end; justify-content:center; gap:.5em; height:10.5em; padding-top:.4em}
.tr-pod{display:flex; flex-direction:column; align-items:center; justify-content:flex-end; width:13em; animation:tr-rise .6s cubic-bezier(.2,1.2,.3,1) both}
.tr-pod b{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:1.05em; margin-bottom:.1em; text-shadow:0 .1em .2em rgba(0,0,0,.8); white-space:nowrap}
.tr-pod small{font-weight:800; font-size:.8em; color:var(--yellow); margin-bottom:.3em; text-shadow:0 .1em .2em rgba(0,0,0,.8)}
.tr-pod div{width:100%; display:grid; place-items:center; border:.16em solid var(--ink); border-bottom:0; border-radius:.7em .7em 0 0; font-family:var(--display); font-weight:900; font-style:italic; font-size:2.2em; color:var(--ink)}
.tr-pod.p1 div{height:2.6em; background:var(--yellow)} .tr-pod.p2 div{height:1.9em; background:#cfd6ea} .tr-pod.p3 div{height:1.4em; background:#e39a5c}
.tr-pod.p1{animation-delay:.25s} .tr-pod.p3{animation-delay:.12s}
.tr-pod.me b{color:var(--yellow)}
.tr-pod.me b::after{content:" \\2605"}
@keyframes tr-rise{from{transform:translateY(3em); opacity:0}to{transform:none; opacity:1}}
.tr-res-btns{display:flex; justify-content:center; gap:1em; padding:.2em 0 .4em}
.tr-res-btns .tr-btn{min-width:13em; justify-content:center}
.tr-res-btns .tr-btn.tr-focus{transform:scale(1.06)}
.tr-res-btns .tr-btn.tr-focus::before{display:none}

/* ------------------------------------------------------------------ multiplayer: host / join */
.tr-note{text-align:center; font-size:.92em; font-weight:600; color:var(--muted); text-shadow:0 .08em .2em rgba(0,0,0,.8)}
.tr-note b{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; letter-spacing:.06em; font-size:.9em; color:var(--yellow); margin-right:.3em}
.tr-mp .tr-side{width:38%; min-width:31em; max-width:37em; justify-content:center; gap:.8em; top:calc(1em + var(--sat))}
.tr-mp-form{display:flex; flex-direction:column; gap:.6em; padding-right:1.2em}
.tr-mp.busy .tr-mp-form{display:none}
.tr-mp-or{display:flex; align-items:center; gap:.8em; margin:.25em 0 .05em; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.72em; letter-spacing:.16em; color:var(--muted); text-shadow:0 .08em .2em rgba(0,0,0,.8)}
.tr-mp-or::before,.tr-mp-or::after{content:""; flex:1; height:.16em; border-radius:.1em; background:var(--line)}
.tr-mp .tr-row{background:rgba(22,29,62,.82)}
.tr-mp .tr-row.tr-focus{background:rgba(72,62,30,.92)}
.tr-input.tr-code{width:6.6em; font-size:1.3em; letter-spacing:.32em; text-indent:.32em; text-transform:uppercase; padding:.2em .2em}
.tr-input.tr-code::placeholder{color:rgba(255,255,255,.28)}
.tr-mp-msg{min-height:1.3em; padding-left:.3em; font-size:.92em; font-weight:700; color:var(--muted); text-shadow:0 .08em .2em rgba(0,0,0,.8)}
.tr-mp-msg.err{color:#ffb0c6; animation:tr-shake .3s}
@keyframes tr-shake{25%{transform:translateX(-.3em)}75%{transform:translateX(.3em)}}
.tr-mp-foot{display:flex}
.tr-mp-foot .tr-btn{min-width:9em; justify-content:center}
.tr-mp-busy{display:none; align-items:center; gap:1.1em; margin-right:1.2em; padding:1.1em 1.2em}
.tr-mp.busy .tr-mp-busy{display:flex}
.tr-spinner{flex:none; width:2.5em; height:2.5em; border-radius:50%; border:.36em solid rgba(255,255,255,.16); border-top-color:var(--yellow); border-right-color:var(--orange); animation:tr-spin .8s linear infinite}
.tr-mp-busyt{flex:1; min-width:0; display:flex; flex-direction:column; gap:.15em}
.tr-mp-busyt b{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:1.35em; letter-spacing:.03em}
.tr-mp-busyt small{font-size:.9em; font-weight:600; color:var(--muted)}
.tr-mp-busy .tr-btn.tr-focus{transform:none}
.tr-mp-busy .tr-btn.tr-focus::before{display:none}

/* ------------------------------------------------------------------ multiplayer: lobby */
.tr-lobby .tr-side{gap:.6em; top:calc(1.3em + var(--sat))}
.tr-lb-a,.tr-lb-b{display:contents}
.tr-lb-status{margin-left:auto; display:flex; align-items:center; gap:.5em; font-size:.8em; font-weight:700; color:var(--muted); letter-spacing:.03em; text-shadow:0 .08em .2em rgba(0,0,0,.8); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; min-width:0}
.tr-lb-status::before{content:""; flex:none; width:.62em; height:.62em; border-radius:50%; background:var(--green); box-shadow:0 0 .5em var(--green)}
.tr-lb-code{display:flex; align-items:center; gap:1.2em; padding:.55em 1em .6em}
.tr-lb-code small{display:block; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.68em; letter-spacing:.1em; color:var(--muted); margin-bottom:.25em}
.tr-lb-codebox{flex:none}
.tr-lb-codebox b{display:block; font-family:var(--display); font-weight:900; font-style:italic; font-size:3.3em; line-height:.95; letter-spacing:.12em; color:var(--yellow); -webkit-text-stroke:.1em var(--ink); paint-order:stroke fill; text-shadow:.05em .07em 0 var(--orange),.09em .12em 0 var(--ink); user-select:text; -webkit-user-select:text}
.tr-lb-linkwrap{flex:1; min-width:0}
.tr-lb-links{display:flex; flex-direction:column; gap:.25em; border-radius:.6em}
.tr-lb-link{display:flex; align-items:center; gap:.6em; padding:.26em .55em .24em .7em; border-radius:.5em; background:rgba(255,255,255,.07); border:.12em solid transparent; cursor:pointer; pointer-events:auto; transition:background .1s,border-color .1s}
.tr-lb-link span{flex:1; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-family:ui-monospace,"SF Mono",Menlo,Consolas,monospace; font-size:.84em; font-weight:600; user-select:text; -webkit-user-select:text}
.tr-lb-link em{flex:none; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.66em; letter-spacing:.08em; color:var(--teal)}
.tr-lb-link:hover,.tr-lb-links.tr-focus .tr-lb-link:first-child{background:rgba(255,208,46,.16); border-color:var(--yellow)}
.tr-lb-link.copied{background:rgba(110,224,106,.18); border-color:var(--green)}
.tr-lb-link.copied em{color:var(--green)}
.tr-lb-players{padding:.55em .7em .65em}
.tr-lb-players h3{display:flex; justify-content:space-between; gap:1em; margin:0 .2em .4em; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.82em; letter-spacing:.1em; color:var(--yellow)}
.tr-lb-players h3 span:last-child{color:var(--muted); letter-spacing:.05em}
.tr-lb-grid{display:grid; grid-template-columns:1fr 1fr; grid-template-rows:repeat(4,2.3em); grid-auto-flow:column; gap:.28em .5em}
.tr-lb-p{display:flex; align-items:center; gap:.55em; min-width:0; padding:0 .6em 0 .45em; border-radius:.55em; background:rgba(255,255,255,.08); border:.12em solid transparent}
.tr-lb-p .tr-carsvg{flex:none; width:2.7em; height:1.44em}
.tr-lb-ic{flex:none; display:grid; place-items:center; width:2.7em; font-size:1em; color:var(--muted)}
.tr-lb-pn{flex:1; min-width:0; display:flex; flex-direction:column; line-height:1.08}
.tr-lb-pn b{display:flex; align-items:center; gap:.3em; min-width:0; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.88em; letter-spacing:.02em}
.tr-lb-pn b span{overflow:hidden; text-overflow:ellipsis; white-space:nowrap}
.tr-lb-pn small{font-size:.7em; font-weight:600; color:var(--muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis}
.tr-lb-crown{flex:none; font-style:normal; color:var(--yellow); font-size:1.15em; line-height:.8; text-shadow:0 .06em 0 var(--ink)}
.tr-lb-tag{flex:none; font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:.6em; letter-spacing:.1em; padding:.22em .55em .16em; border-radius:.4em; background:var(--yellow); color:var(--ink)}
.tr-lb-p.you{background:rgba(255,208,46,.17); border-color:rgba(255,208,46,.75)}
.tr-lb-p.bot{background:rgba(255,255,255,.035); border:.12em dashed var(--line)}
.tr-lb-p.bot b{color:var(--muted)}
.tr-lb-p.open{background:none; border:.12em dashed rgba(255,255,255,.08); justify-content:center; text-align:center}
.tr-lb-p.open b{justify-content:center; color:rgba(169,179,214,.45); font-size:.72em; letter-spacing:.1em}
.tr-lobby .tr-rows .tr-row{background:rgba(22,29,62,.82); padding-top:.3em; padding-bottom:.3em}
.tr-lobby .tr-rows .tr-row.tr-focus{background:rgba(72,62,30,.92)}
.tr-lobby .tr-sel b{min-width:9.5em; white-space:nowrap}
.tr-lobby:not(.host) [data-r="rows"], .tr-lobby:not(.host) [data-r="go"], .tr-lobby.host .tr-lb-guest{display:none}
.tr-lb-guest{display:flex; flex-direction:column; gap:.6em}
.tr-lb-guest .tr-td-meta{gap:1.4em; flex-wrap:wrap}
.tr-lb-wait{font-family:var(--display); font-weight:900; font-style:italic; text-transform:uppercase; font-size:1.1em; letter-spacing:.08em; color:var(--yellow)}
.tr-lb-wait i{font-style:normal; animation:tr-dots 1.2s infinite both}
.tr-lb-wait i:nth-child(2){animation-delay:.2s} .tr-lb-wait i:nth-child(3){animation-delay:.4s}
@keyframes tr-dots{0%,60%,100%{opacity:.2}30%{opacity:1}}
.tr-lb-foot{display:flex; gap:.7em}
.tr-lb-foot .tr-btn{flex:1; justify-content:center}
.tr-lb-foot .tr-btn.tr-focus{transform:scale(1.03)}
.tr-lb-foot .tr-btn.tr-focus::before{display:none}
.tr-hum{display:inline-block; margin-left:.7em; padding:.2em .5em .14em; border-radius:.4em; background:var(--teal); color:var(--ink); font-family:var(--display); font-weight:900; font-style:italic; font-size:.58em; letter-spacing:.1em; vertical-align:.2em}
.tr-table tr.me .tr-hum{background:var(--ink); color:var(--yellow)}

/* ================================================================== touch controls (shown while racing on html.tr-touch) */
.tr-tc{pointer-events:none; font-family:var(--display); font-weight:900; font-style:italic}
.tr-tc-top{position:absolute; right:calc(1em + var(--sar)); top:calc(.6em + var(--sat)); display:flex; gap:.5em}
.tr-tc-sm{display:grid; place-items:center; width:var(--tb); height:var(--tb); border-radius:.75em; background:rgba(11,15,34,.72); border:.14em solid var(--ink); color:var(--cream); pointer-events:auto; cursor:pointer; touch-action:none}
.tr-tc-sm svg{width:52%; height:52%; display:block; pointer-events:none}
.tr-tc-sm:active{background:var(--yellow); color:var(--ink)}
.tr-tc-btn{position:absolute; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:.15em; pointer-events:auto; touch-action:none; cursor:pointer; color:var(--cream); background:rgba(11,15,34,.46); border:.18em solid rgba(255,246,224,.62); border-radius:1.5em; box-shadow:0 .28em 0 rgba(11,15,34,.5); transition:transform .06s,background .06s}
.tr-tc-btn > *{pointer-events:none}
.tr-tc-btn b{font-size:1.3em; line-height:1; letter-spacing:.06em; text-transform:uppercase; -webkit-text-stroke:.16em var(--ink); paint-order:stroke fill}
.tr-tc-btn small{font-family:var(--body); font-style:normal; font-weight:800; font-size:.66em; line-height:1; letter-spacing:.12em; text-transform:uppercase; opacity:.85}
.tr-tc-btn svg{width:44%; height:44%; display:block; overflow:visible}
.tr-tc-btn.on{background:rgba(255,208,46,.92); border-color:var(--ink); color:var(--ink); transform:translateY(.16em) scale(.97); box-shadow:0 .08em 0 var(--ink)}
.tr-tc-btn.on b{-webkit-text-stroke:0}
.tr-tc-l{left:calc(1em + var(--sal)); bottom:calc(1em + var(--sab)); width:8.6em; height:8.6em}
.tr-tc-r{left:calc(10.3em + var(--sal)); bottom:calc(1em + var(--sab)); width:8.6em; height:8.6em}
.tr-tc-gas{right:calc(1em + var(--sar)); bottom:calc(1em + var(--sab)); width:8.6em; height:9.6em; background:rgba(58,160,70,.5)}
.tr-tc-brake{right:calc(10.3em + var(--sar)); bottom:calc(1em + var(--sab)); width:7.2em; height:7.2em; background:rgba(214,40,90,.46)}
.tr-tc-drift{right:calc(10.9em + var(--sar)); bottom:calc(9.1em + var(--sab)); width:6em; height:6em; border-radius:50%}
.tr-tc-drift b{font-size:.95em}
.tr-tc-item{right:calc(2em + var(--sar)); bottom:calc(11.5em + var(--sab)); width:6.6em; height:6.6em; border-radius:50%; background:rgba(255,208,46,.9); border-color:var(--ink); color:var(--ink)}
.tr-tc-item i{font-style:normal; font-size:2.5em; line-height:1.1}
.tr-tc-item small{font-size:.6em}
.tr-tc-item.empty{background:rgba(11,15,34,.3); border-color:rgba(255,246,224,.28); color:rgba(255,246,224,.5); box-shadow:none}
.tr-tc-item.empty i{display:none}
.tr-tc-item.empty small{font-size:.8em}
.tr-tc.auto .tr-tc-gas{display:none}
.tr-tc.auto .tr-tc-brake{right:calc(1em + var(--sar)); width:8.6em; height:8.6em}
.tr-tc.auto .tr-tc-drift{right:calc(10.3em + var(--sar)); bottom:calc(1em + var(--sab)); width:7.2em; height:7.2em; border-radius:1.5em}
.tr-tc.auto .tr-tc-drift b{font-size:1.15em}
.tr-tc.auto .tr-tc-item{bottom:calc(10.5em + var(--sab))}

/* ================================================================== touch-first devices */
html:not(.tr-touch) .tr-root .tr-if-touch{display:none !important}
html.tr-touch .tr-root .tr-if-keys{display:none !important}
html.tr-touch .tr-hints{display:none}
html.tr-touch .tr-side, html.tr-touch .tr-mid{bottom:calc(1.2em + var(--sab))}
html.tr-touch .tr-backbtn{display:grid; min-width:44px; min-height:44px}
html.tr-touch .tr-btn{min-height:44px}
html.tr-touch .tr-row, html.tr-touch .tr-lobby .tr-rows .tr-row{min-height:44px; padding-top:0; padding-bottom:0}
html.tr-touch .tr-arr{min-width:44px; min-height:44px; font-size:1em}
html.tr-touch .tr-slider{height:44px}
html.tr-touch .tr-input{min-height:34px}
html.tr-touch .tr-lb-link{min-height:44px}
html.tr-touch .tr-lb-link:nth-child(n+3){display:none}
html.tr-touch .tr-cartile, html.tr-touch .tr-trktile{min-height:44px}
/* HUD: the bottom corners belong to the thumbs */
html.tr-touch .tr-h-times{top:calc(var(--tb) + 1.2em + var(--sat))}
html.tr-touch .tr-h-item{pointer-events:auto; touch-action:none; cursor:pointer; min-height:44px}
html.tr-touch .tr-h-item > *{pointer-events:none}
html.tr-touch .tr-h-item.has{border-color:var(--yellow)}
html.tr-touch .tr-h-item.on{background:var(--yellow); color:var(--ink)}
html.tr-touch .tr-h-itemt small{display:none}
html.tr-touch .tr-h-map{bottom:auto; top:calc(11.6em + var(--sat)); width:11em; height:11em}
html.tr-touch .tr-h-speed{left:50%; right:auto; bottom:calc(.9em + var(--sab)); width:auto; height:auto; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:.25em}
html.tr-touch .tr-h-speed svg{display:none}
html.tr-touch .tr-h-kmh{position:static; display:flex; align-items:baseline; gap:.35em}
html.tr-touch .tr-h-kmh b{font-size:2.5em}
html.tr-touch .tr-h-boost{position:static; order:-1; transform:skewX(-10deg); visibility:hidden}
html.tr-touch .tr-h-speed.boost .tr-h-boost{visibility:visible}

/* ================================================================== compact: phone landscape (stage up to 520px high) */
@container stage (max-height:520px){
  .tr-root{font-size:clamp(10px,3.1cqh,14px)}
  .tr-hints,.tr-foot,.tr-note{display:none}
  .tr-backbtn{display:grid}
  .tr-side{left:calc(1.2em + var(--sal)); top:calc(.8em + var(--sat)); bottom:calc(.8em + var(--sab)); width:38em; min-width:0; max-width:calc(100% - 2.4em - var(--sal) - var(--sar)); gap:.5em}
  html.tr-touch .tr-side, html.tr-touch .tr-mid{bottom:calc(.8em + var(--sab))}
  .tr-mid{top:calc(.8em + var(--sat)); bottom:calc(.8em + var(--sab)); max-width:calc(100% - 2.4em - var(--sal) - var(--sar)); gap:.5em}
  .tr-head{gap:.6em; margin-bottom:0}
  .tr-head h2{font-size:1.65em}
  .tr-card{padding:.6em .9em; border-radius:.8em}
  .tr-bottom{flex-direction:row; align-items:stretch; gap:.5em}
  .tr-bottom > .tr-rows{flex:none}
  .tr-bottom > .tr-rows.tr-empty{display:none}
  .tr-bottom > [data-r="go"]{flex:1 1 0; min-width:0; display:flex}
  .tr-bottom > [data-r="go"] > .tr-btn{flex:1; padding-left:.5em; padding-right:.5em}
  .tr-btn.tr-go .tr-btn-l{font-size:1.2em}
  /* selector rows become compact cells: label on top, the two arrows are the left / right half of the cell */
  .tr-cells{display:flex; flex-direction:row; gap:.4em}
  .tr-cells .tr-row{position:relative; flex:0 0 8.5em; flex-direction:column; justify-content:center; align-items:stretch; gap:.15em; padding:.25em 0; min-width:0; text-align:center}
  .tr-cells .tr-row-l{font-size:.66em; letter-spacing:.08em}
  .tr-cells .tr-sel{display:block; padding:0 1.25em}
  .tr-cells .tr-sel b{display:block; min-width:0; font-size:.9em; white-space:nowrap; overflow:hidden; text-overflow:ellipsis}
  .tr-cells .tr-arr, html.tr-touch .tr-cells .tr-arr{position:absolute; top:0; bottom:0; width:50%; height:auto; min-width:0; min-height:0; display:flex; align-items:center; padding:.9em .45em 0; font-size:.8em; background:none; border-radius:.6em}
  .tr-cells .tr-arr.l{left:0; justify-content:flex-start}
  .tr-cells .tr-arr.r{right:0; justify-content:flex-end}
  .tr-cells .tr-arr:hover, .tr-cells .tr-row.tr-focus .tr-arr, .tr-cells .tr-row.tr-focus .tr-arr:hover{background:none; color:var(--yellow)}
  .tr-cells .tr-arr:active{background:rgba(255,208,46,.22)}

  /* title */
  .tr-title-in{gap:.7em; padding-bottom:.6em}
  .tr-title .tr-logo{font-size:7.2em}
  .tr-tagline{font-size:.85em; margin-top:.2em}
  .tr-press{margin-top:.9em; font-size:1.35em}

  /* main menu: logo on top, the six entries in two columns */
  .tr-main .tr-side{width:40em; min-width:0; max-width:calc(100% - 2.4em - var(--sal) - var(--sar)); gap:.7em; top:calc(.8em + var(--sat))}
  .tr-main .tr-logo{font-size:3.8em}
  .tr-main .tr-list{display:grid; grid-template-columns:1fr 1fr; gap:.55em .8em; padding-right:0}
  .tr-main .tr-btn-s{display:none}
  .tr-main .tr-btn.tr-focus{transform:none}
  .tr-main .tr-btn.tr-focus::before{display:none}
  .tr-hello{margin-top:-.2em}

  /* car select */
  .tr-cargrid{gap:.45em}
  .tr-cartile{padding:.25em .3em .2em}
  .tr-carsvg{width:4em; height:2.1em}
  .tr-cartile span{font-size:.68em}
  .tr-cardetail{gap:.3em}
  .tr-cd-name{font-size:1.4em}
  .tr-cd-tag{font-size:.85em; min-height:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis}
  .tr-stats{grid-template-columns:auto 1fr auto auto 1fr auto; gap:.3em .6em; margin-top:0}
  .tr-stats label{font-size:.7em}
  .tr-bar{height:.75em}

  /* track select */
  .tr-trkgrid{gap:.45em}
  .tr-trktile{padding:.3em .7em}
  .tr-trkdetail{gap:.3em}
  .tr-td-desc{font-size:.85em; min-height:0; line-height:1.2; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden}
  .tr-td-kart{font-size:.72em; line-height:1.2; margin-top:0; padding:.3em .6em}
  .tr-td-meta{gap:1.2em}
  .tr-meta b{font-size:1em}

  /* options: two columns */
  .tr-options .tr-mid{width:60em; justify-content:flex-start}
  .tr-options .tr-card{padding:.5em .6em; min-height:0; overflow:auto; touch-action:pan-x pan-y; -webkit-overflow-scrolling:touch}
  .tr-options .tr-rows{display:grid; grid-template-columns:1fr 1fr; gap:.35em .6em}
  .tr-options .tr-row{padding-left:.7em; padding-right:.4em; gap:.5em}
  .tr-options .tr-row-l{font-size:.85em; line-height:1.05}
  .tr-options .tr-slider{width:8.5em}
  .tr-options .tr-val{min-width:2.2em}
  .tr-options .tr-rowr{gap:.5em}
  .tr-options .tr-sel b{min-width:4.4em; font-size:.95em}
  .tr-options .tr-input{width:9em}
  .tr-options .tr-foot-row, .tr-controls .tr-foot-row{display:none}

  /* controls */
  .tr-controls .tr-mid{justify-content:flex-start}
  .tr-cols{min-height:0; gap:.6em}
  .tr-cols .tr-card{min-height:0; overflow:auto; touch-action:pan-x pan-y; -webkit-overflow-scrolling:touch}
  .tr-cols h3{margin-bottom:.4em; font-size:.9em}
  .tr-keys{gap:.4em .8em; font-size:.9em}
  .tr-items{gap:.32em}
  .tr-item-ic{width:1.9em; height:1.9em; font-size:1em}
  .tr-item b{font-size:.82em}
  .tr-item small{font-size:.76em; line-height:1.15}

  /* multiplayer: both fields on top (clear of the on-screen keyboard), the two actions below */
  .tr-mp .tr-side{width:40em; justify-content:flex-start; gap:.6em; top:calc(.8em + var(--sat))}
  .tr-mp-form{display:grid; grid-template-columns:1fr 1fr; gap:.5em .7em; padding-right:0}
  .tr-mp-or,.tr-mp-foot{display:none}
  .tr-mp-form > [data-r="name"]{order:1} .tr-mp-form > [data-r="code"]{order:2}
  .tr-mp-form > [data-r="host"]{order:3} .tr-mp-form > [data-r="join"]{order:4}
  .tr-mp-form > .tr-mp-msg{order:5; grid-column:1 / -1}
  .tr-mp .tr-row, html.tr-touch .tr-mp .tr-row{flex-direction:column; align-items:stretch; gap:.2em; padding:.35em .6em .5em}
  .tr-mp .tr-row-l{font-size:.68em}
  .tr-mp .tr-input{width:100%}
  .tr-mp .tr-btn{height:100%; padding-left:.9em}
  .tr-mp .tr-btn-s{display:none}
  .tr-mp .tr-btn.tr-focus{transform:none}
  .tr-mp .tr-btn.tr-focus::before{display:none}
  .tr-mp-busy{margin-right:0; padding:.8em 1em}

  /* lobby: two columns over (almost) the whole stage */
  .tr-lobby.tr-left::before{background:linear-gradient(90deg,rgba(8,11,28,.9) 0%,rgba(8,11,28,.78) 70%,rgba(8,11,28,.5) 100%)}
  .tr-lobby .tr-side{width:auto; right:calc(1.2em + var(--sar)); max-width:66em; top:calc(.8em + var(--sat)); display:grid; grid-template-columns:1.12fr 1fr; grid-template-rows:auto minmax(0,1fr); gap:.45em .8em}
  .tr-lobby .tr-head{grid-column:1 / -1}
  .tr-lb-a,.tr-lb-b{display:flex; flex-direction:column; gap:.45em; min-width:0; min-height:0}
  .tr-lb-code{gap:.9em; padding:.4em .8em .45em}
  .tr-lb-codebox b{font-size:2.5em}
  .tr-lb-link:nth-child(n+2), html.tr-touch .tr-lb-link:nth-child(n+2){display:none}
  .tr-lb-players{padding:.4em .6em .5em}
  .tr-lb-players h3{font-size:.74em; margin-bottom:.3em}
  .tr-lb-grid{grid-template-rows:repeat(4,2.1em); gap:.24em .4em}
  .tr-lobby .tr-cells{display:grid; grid-template-columns:1fr 1fr; gap:.4em}
  .tr-lobby .tr-cells .tr-row{flex:none}
  .tr-lobby .tr-sel b{min-width:0}
  .tr-lb-guest{gap:.4em}
  .tr-lb-foot{gap:.5em}

  /* HUD */
  .tr-h-pos{left:calc(1em + var(--sal)); top:calc(.6em + var(--sat)); gap:.35em}
  .tr-h-posn{font-size:3.4em}
  .tr-h-post{font-size:1.15em}
  .tr-h-lap{left:calc(1.1em + var(--sal)); top:calc(4.4em + var(--sat)); padding:.2em .7em .16em .6em}
  .tr-h-lap small{font-size:.7em}
  .tr-h-lap b{font-size:1.15em}
  .tr-h-times{right:calc(1em + var(--sar)); top:calc(.6em + var(--sat)); padding:.35em .7em .3em; gap:.04em .6em}
  .tr-h-times small{font-size:.62em}
  .tr-h-times b{font-size:1em; min-width:4.3em}
  .tr-h-times b.big{font-size:1.3em}
  .tr-h-times .dim{display:none}
  html.tr-touch .tr-h-times{top:calc(var(--tb) + 1.1em + var(--sat))}
  .tr-h-item{top:calc(.6em + var(--sat)); min-width:0; padding:.3em .8em .3em .35em; gap:.5em}
  .tr-h-itemic{font-size:1.3em}
  .tr-h-itemt b{font-size:.9em}
  .tr-h-speed{right:calc(1em + var(--sar)); bottom:calc(.8em + var(--sab)); width:10em; height:8.6em}
  .tr-h-kmh{top:2.6em}
  .tr-h-kmh b{font-size:2.7em}
  .tr-h-boost{font-size:.75em}
  html.tr-touch .tr-h-speed{bottom:calc(.6em + var(--sab))}
  html.tr-touch .tr-h-kmh b{font-size:2em}
  .tr-h-map{left:calc(1em + var(--sal)); bottom:calc(.8em + var(--sab)); width:10em; height:10em; border-radius:.9em}
  html.tr-touch .tr-h-map{top:calc(7.1em + var(--sat)); width:8.4em; height:8.4em}
  .tr-h-wrong{font-size:1.5em}
  .tr-h-count{font-size:10em}
  .tr-h-flash{font-size:1.5em; top:27%}

  /* pause / results */
  .tr-pause-box{gap:.7em}
  .tr-pause-box h2{font-size:2.6em}
  .tr-res-box{gap:.45em; max-width:calc(100% - 2em - var(--sal) - var(--sar)); max-height:calc(100% - 1.2em - var(--sat) - var(--sab))}
  .tr-res-head h2{font-size:2em}
  .tr-res-sub{padding-bottom:.1em}
  .tr-badge{font-size:.8em}
  .tr-podium{display:none}
  .tr-res-body{gap:.6em}
  .tr-res-body .tr-card{padding:.4em .5em}
  .tr-res-champ{flex-basis:17em}
  .tr-table{border-spacing:0 .14em}
  .tr-table td{padding:.2em .7em .16em; font-size:.92em}
  .tr-res-box.champ .tr-table .c{display:none}
  .tr-res-btns{padding:0 0 .1em}
}

@media (prefers-reduced-motion:reduce){
  .tr-root *, .tr-root *::before, .tr-root *::after{animation-duration:.01s !important; animation-iteration-count:1 !important; transition-duration:.01s !important}
  .tr-h-count.run{animation-duration:.9s !important}
}
`;

export function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = CSS;
  document.head.appendChild(s);
}
