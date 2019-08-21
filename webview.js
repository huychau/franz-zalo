module.exports = (Franz) => {
    const getMessages = function getMessages() {
        let count = 0;
        const $msgTabCount = document.querySelectorAll('#message-tab > i.tab-red-dot');

        // Check unread messages
        if ($msgTabCount.length > 0) {

            // Get count from last class name
            // Zalo use class name to show the count of unread message like `tab-red-dot fa fa-1/fa-5/fa-5plus`
            const countClass = $msgTabCount[0].classList[$msgTabCount[0].classList.length -1]

            count = countClass.split('-').pop();
        }

        // Set Franz badge
        Franz.setBadge(parseInt(count));
    };

    Franz.loop(getMessages);
}
