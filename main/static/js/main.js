// ERROR HERE
function handleReplyButton(responseId) {

const replyFormContainer = document.getElementById('reply-form-container-${responseId}');
console.log(replyFormContainer);
if (replyFormContainer) {
replyFormContainer.className = 'reply-form-container enabled'
}

}

function handleCancelReply(responseId) {


const replyFormContainer = document.getElementById('reply-form-container-${responseId}');
if (replyFormContainer) {
replyFormContainer.className = 'reply-form-container'

}

}