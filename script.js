const addButton = document.querySelector("#add-button");
const topicInput = document.querySelector("#topic-input");
const topicList = document.querySelector("#topic-list");
const progressText = document.querySelector("#progress");
const topics = [];

function updateProgress() {
    const allTopics = topicList.querySelectorAll("li");
    const completedTopics = topicList.querySelectorAll("input:checked");

    progressText.textContent = `${completedTopics.length} of ${allTopics.length} topics completed`;
}

function addTopic(topicText) {
    const newTopic = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function () {
        newTopic.classList.toggle("completed", checkbox.checked);
        updateProgress();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        newTopic.remove();
        updateProgress();
    });

    newTopic.append(checkbox);
    newTopic.append(` ${topicText}`);
    newTopic.append(deleteButton);

    topicList.append(newTopic);
    updateProgress();
}

addButton.addEventListener("click", function () {
    const topicText = topicInput.value.trim();

    if (topicText === "") {
        return;
    }

    topics.push({
        text: topicText,
        completed: false
    });

    addTopic(topicText);
    topicInput.value = "";
});

topicInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addButton.click();
    }
})