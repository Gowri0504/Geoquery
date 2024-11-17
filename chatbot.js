$(document).ready(function() {
    const chatLog = $("#chat-log");

    $("#send-button").click(function() {
        const userInput = $("#user-input").val();
        if (userInput) {
            chatLog.append(`<div>User: ${userInput}</div>`);
            $("#user-input").val('');
            getChatbotResponse(userInput);
        }
    });

    function getChatbotResponse(input) {
        let response = "I'm here to help! Please ask your question about geoqueries.";
        if (input.toLowerCase().includes("park")) {
            response = "You can find parks in your area by typing 'Find parks near me'.";
        } else if (input.toLowerCase().includes("event")) {
            response = "You can check local events by saying 'Show me events this weekend'.";
        }
        chatLog.append(`<div>Chatbot: ${response}</div>`);
        chatLog.scrollTop(chatLog[0].scrollHeight);
    }
});
