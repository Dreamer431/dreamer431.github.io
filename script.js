document.addEventListener('mousemove', function(e) {
    const mouseFollow = document.querySelector('.mouse-follow');
    if (!mouseFollow) {
        const div = document.createElement('div');
        div.className = 'mouse-follow';
        document.body.appendChild(div);
    }
    const mouseFollowElement = document.querySelector('.mouse-follow');
    mouseFollowElement.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
