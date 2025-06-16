const insert = document.getElementById("insert");

window.addEventListener("keydown", function (e) {
  insert.innerHTML = `
    <div class="color">
      <table border="1" cellspacing="0" cellpadding="8">
        <tr>
          <th>Key</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === " " ? "Space" : e.key}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});
