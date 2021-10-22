document.addEventListener('DOMContentLoaded', () => {

    const skills = document.getElementById('skills');
    //console.log(test);

    const className = "in-view";

    //by default, remove this class, so the content will not appear
    // and when we scroll until this element add this class and keep her
    // the animation is only played one time
    skills.classList.remove(className);
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {

                    skills.classList.add(className);


                    return;
                }

                //uncomment this line if we want the content is animate every time :
                // desappear awhen we aren't on it and appear when we are.
                //skills.classList.remove(className);

            });
        },
        //diplay these elements and play animations, but it's not what I want
        /* {
             threshold: 1
         }*/
    );
    observer.observe(skills);
});