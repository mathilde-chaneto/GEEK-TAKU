document.addEventListener('DOMContentLoaded', () => {

    const test = document.getElementById('skills');
    console.log(test);

    const className = "in-view";
    const stopClass = "stopped";

    test.classList.remove(className);
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    //test.classList.remove(stopClass);
                    test.classList.add(className);
                    test.classList.remove(stopClass);

                    return;
                }
                if (test.classList.contains('stopped')) {
                    test.classList.remove(className);
                    test.style.animationName = "none";
                }

                test.classList.add(stopClass);


            });
        },
        //diplay these elements and after, play animations
        /* {
             threshold: 1
         }*/
    );
    observer.observe(test);
});