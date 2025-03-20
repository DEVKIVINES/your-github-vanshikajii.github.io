<!-- styles.css -->
<style>
    body {
        font-family: Arial, sans-serif;
        text-align: center;
        background-color: #ffe6f2;
        color: #333;
        margin: 0;
        padding: 0;
    }
    header {
        background: #ff4d79;
        color: white;
        padding: 20px;
        font-size: 24px;
    }
    .gallery {
        margin: 20px;
    }
    .images img {
        width: 200px;
        height: auto;
        margin: 10px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    .message {
        margin: 20px;
        font-size: 18px;
    }
    footer {
        margin-top: 30px;
        padding: 10px;
        background: #ff4d79;
        color: white;
    }
</style>

<!-- script.js -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        const loveText = document.getElementById("loveText");
        const messages = [
            "You are my sunshine ☀️",
            "Your smile makes my day 😊",
            "I’m the luckiest to have you ❤️",
            "Every moment with you is special 💖"
        ];
        let index = 0;
        function showMessage() {
            loveText.innerText = messages[index];
            index = (index + 1) % messages.length;
        }
        setInterval(showMessage, 3000);
        showMessage();
    });
</script>
