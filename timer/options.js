const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");
const notificationInput = document.querySelector("#notification-input");

saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const notificationTime = notificationInput.value;
  chrome.storage.sync.set({ name: name }, () => {
    console.log(`Name is set to ${name}`);
  });
  chrome.storage.sync.set({ notificationTime: notificationTime }, () => {
    console.log(`Notification time is set to ${notificationTime}`);
  });
});

chrome.storage.sync.get(["name"], (result) => {
  nameInput.value = result.name ?? "Choose your name";
});
chrome.storage.sync.get(["notificationTime"], (result) => {
  notificationInput.value = result.notificationTime ?? "1000";
});
