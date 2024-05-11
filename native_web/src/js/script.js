window.onload = function() {
    fetch('templates/code_generator.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        });
};
