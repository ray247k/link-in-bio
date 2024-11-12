const linkList = document.getElementById("link-list");

// GET JSON資料
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const jsonData = data.links;
    // 產生連結列表
    jsonData.forEach((item) => {
      const link = document.createElement("a");
      link.href = item.url;

      // 設定 icon
      let icon;
      if (item.url.includes("github")) {
        icon = document.createElement("i");
        icon.classList.add("icon", "fa-brands", "fa-github");
      } else if (item.url.includes("linkedin")) {
        icon = document.createElement("i");
        icon.classList.add("icon", "fa-brands", "fa-linkedin");
      } else if (item.url.includes("tech")) {
        icon = document.createElement("i");
        icon.classList.add("icon", "fa-solid", "fa-laptop-code");
      } else if (item.url.includes("blog")) {
        icon = document.createElement("i");
        icon.classList.add("icon", "fa-solid", "fa-mug-saucer");
      } else if (item.url.includes("nihongo")) {
        icon = document.createElement("i");
        icon.classList.add("icon", "fa-regular", "fa-comments");
      }

      // 設定文字內容
      const text = document.createElement("span");
      text.textContent = item.title;

      // 加入 icon 和文字到連結中
      if (icon) {
        link.appendChild(icon);
      }
      link.appendChild(text);

      link.classList.add(
        "block",
        "mt-4",
        "px-4",
        "py-2",
        "rounded",
        "hover:bg-gray-100",
        "transition",
        "duration-300"
      );

      linkList.appendChild(link);
    });
  })
  .catch((error) => console.error("Error:", error));
