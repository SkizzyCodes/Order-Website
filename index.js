const webhookURL = "https://discord.com/api/webhooks/970084158099558420/Ps52wgL-HCvq9Nx7Vw1CknVJpUoyYOKfNBf6cNXeVidtVbMKCF9RKf0sDDHAFn9uOBdr" // MANDATORY | Your Webhook URL Here
const avatarURL = "" // OPTIONAL | The URL for the PFP of the webhook itself. Must be a link to a supported image format.

// Getting the elements from the HTML page
const username = document.getElementById('username')
const usertag = document.getElementById('usertag')
const userID = document.getElementById('userID')
const reason = document.getElementById('reason')
const appeal = document.getElementById('appeal')
const requests = document.getElementById('requests')

function sendMessage() { // After submitting the form.
    var request = new XMLHttpRequest() // Creates a new XML Http Request
    request.open("POST", webhookURL) // Opens a new HTTP Request to the webhook URL
    request.setRequestHeader('Content-type', 'application/json') // Sets the request Type

    var embed = { // Embed to send.
        //author: { name: `${username.value}#${usertag.value}` }, 
        //title: "New Order!", // Title of the embed 
        timestamp: new Date(), // Footer Timestamp of the embed
        color: 0x2F3136, // Color of the embed
        //footer: { text: `Powered by CesiumLabs | User ID: ${(userID.value).toString()}` }, // Footer of the embed
        fields: [ // Fields of the embed
            { name: "Customer Name", value: `\`\`\`${username.value}\`\`\``, inline: false },
            { name: "Phone Number", value: `\`\`\`${(userID.value)}\`\`\``, inline: false },
            { name: "Requested Service", value: `\`\`\`${reason.value}\`\`\`` },
            { name: "Payment Status", value: `\`\`\`${appeal.value}\`\`\`` },
            { name: "Other Requests", value: `\`\`\`${requests.value}\`\`\`` },
           { name: "Contact", value: `\`\`\`${ticket.value}\`\`\`` }
        ]
    }

    var params = { // Parameters to send the request
        username: `Test`, // Name of the webhook
        avatar_url: avatarURL, // PFP URL of the webhook
        embeds: [ embed ] // Embeds to send with the webhook
    }

    request.send(JSON.stringify(params)) // Sends the request 
    alert('Your Order has been sent!') // Tells the user that the appeal has been sent.
    console.log('Order Sent!') // Logs that the order has been sent. (For Your server webhook)
}