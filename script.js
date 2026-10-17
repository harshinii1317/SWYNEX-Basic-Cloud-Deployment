
function showCloudFact() {
    const message = document.getElementById("cloud-message");

    const facts = [
        "Cloud computing lets you access files from anywhere.",
        "Cloud services can scale as users increase.",
        "Cloud storage helps keep data online.",
        "AWS, Microsoft Azure, and Google Cloud offer cloud services."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);

    message.textContent = facts[randomIndex];
}
