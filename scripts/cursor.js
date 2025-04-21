// public/scripts/cursor.js
const cursor = document.getElementById('custom-cursor');

if (cursor) {
    document.addEventListener('mousemove', (e) => {
        // Update position using transform for better performance
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });

    // Optional: Add classes on mousedown/mouseup for click effects
    document.addEventListener('mousedown', () => {
        cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%) scale(0.8)`;
        cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    });

    document.addEventListener('mouseup', () => {
         // Check if hovering over a link/button to decide hover scale vs normal scale
        const isHoveringInteractable = document.querySelector("a:hover, button:hover");
        const scale = isHoveringInteractable ? 1.5 : 1;
        cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%) scale(${scale})`;
        cursor.style.backgroundColor = isHoveringInteractable ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 255, 255, 0.5)';
    });

    // Add logic for 'magnetic' effect if desired (more complex)
    // Select elements to be magnetic
    // const magneticElements = document.querySelectorAll('.magnetic');
    // magneticElements.forEach(el => {
    //   el.addEventListener('mousemove', moveTarget);
    //   el.addEventListener('mouseleave', resetTarget);
    // });
    // function moveTarget(e) { /* Calculate offset and move element towards cursor */ }
    // function resetTarget(e) { /* Animate element back to original position */ }

} else {
    console.warn('Custom cursor element not found.');
}