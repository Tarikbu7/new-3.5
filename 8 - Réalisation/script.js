let page = JSON.parse(localStorage.sharingan || "[]");

const save = () => localStorage.sharingan = JSON.stringify(page);

const show = () => document.getElementById("list").innerHTML = page.map((t,i)=>

`<li><input type="checkbox"${t.done?" checked":""} onchange="toggle(${i})">${t.text}<button onclick="del(${i})">remove</button></li>`).join("")

function add(){
  let val = sun.value.trim();
  if(!val) return;
  page.push({text:val,done:false});
  sun.value = "";
  save(); show();
}

const del = i => (page.splice(i,1), save(), show());
const toggle = i => (page[i].done=!page[i].done, save(), show());

show();

