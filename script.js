<script>
    document.addEventListener("DOMContentLoaded", function() {
        const loveText = document.getElementById("loveText");
        const messages = [
            "You are my sunshine ☀️",
            "Your smile makes my day 😊",
            "I’m the luckiest to have you ❤️",
            "Every moment with you is special 💖",
            "You're the queen of my heart 👑"
        ];
        let index = 0;
        function showMessage() {
            loveText.innerText = messages[index];
            loveText.style.opacity = 0;
            setTimeout(() => {
                loveText.style.opacity = 1;
            }, 200);
            index = (index + 1) % messages.length;
        }
        setInterval(showMessage, 3000);
        showMessage();
    });
</script>
