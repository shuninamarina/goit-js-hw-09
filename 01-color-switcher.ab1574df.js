!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},n=null;function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.stopBtn.disabled=!0,t.startBtn.addEventListener("click",(function(){document.body.style.backgroundColor=o(),n=setInterval((function(){document.body.style.backgroundColor=o()}),1e3),t.startBtn.disabled=!0,t.stopBtn.disabled=!1})),t.stopBtn.addEventListener("click",(function(){t.startBtn.disabled=!1,t.stopBtn.disabled=!0,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.ab1574df.js.map
