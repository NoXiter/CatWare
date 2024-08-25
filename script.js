function expand(id, url) {
    var element = document.getElementById(id);

    // Remove classes if already present to allow for repeated clicks
    element.classList.remove('expand');
    element.classList.remove('shrink');

    // Trigger reflow to apply the class again
    void element.offsetWidth;

    // Add the expand class to trigger the animation
    element.classList.add('expand');

    // Wait 0.3 seconds before redirecting and shrinking the element
    setTimeout(function() {
        element.classList.remove('expand');
        element.classList.add('shrink');

        setTimeout(function() {
            window.location.href = url;  // Redirect after shrinking
        }, 300);  // Wait for the shrinking animation to complete (0.3s)
    }, 300);  // Wait 0.3 seconds before starting the shrink animation
}
