document.addEventListener('DOMContentLoaded', () => {

    const skills = document.getElementById('skills');
    //console.log(test);

    const className = "in-view";
    const stopClass = "stopped";

    skills.classList.remove(className);
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    //test.classList.remove(stopClass);
                    skills.classList.add(className);
                    skills.classList.remove(stopClass);

                    return;
                }
                if (skills.classList.contains('stopped')) {
                    skills.classList.remove(className);
                    skills.style.animationName = "none";
                }

                skills.classList.add(stopClass);


            });
        },
        //diplay these elements and after, play animations
        /* {
             threshold: 1
         }*/
    );
    observer.observe(skills);
});