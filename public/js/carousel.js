class Carousel {
    /**
     * @callback moveCallback
     * @param {number} index 
     * 
     */

    /**
     * @param {HTML element} element
     * @param {HTML Object} options
     * @param {HTML Object} [options.slidesToScroll = 1]
     * @param {HTML Object} [options.slidesVisible = 1]
     * @param {HTML boolean} [options.loop = false ] 
     */
    constructor(element, options = {}) {
        this.element = element;
        this.options = Object.assign({}, {
            sildesToScroll: 1,
            slidesVisible: 1,
            loop: false
        }, options);

        // get children at this time (without div carousel)
        this.children = [].slice.call(element.children)
        this.isMobile = false
        this.currentSlide = 0
        this.root = this.createDivWithClass('carousel')
        this.container = this.createDivWithClass('carousel__container')
        this.root.setAttribute('tabindex', '0')
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.moveCallBack = []

        // move these children in container
        // forEach : parameter = function (element)
        this.items = this.children.map((child) => {
            let item = this.createDivWithClass("carousel__item")
            item.appendChild(child)
            this.container.appendChild(item)
            return item
        });

        this.setStyle()
        this.createNavigation()
        this.moveCallBack.forEach(cb => cb(0))
        this.onWindowResize()
        window.addEventListener('resize', this.onWindowResize.bind(this))
        this.root.addEventListener('keyup', e => {
            if (e.key === 'ArrowRight' && 'Right') {
                this.next()
            }
            else if (e.key === 'ArrowLeft' && 'Left') {
                this.prev()
            }
        })
    }

    /**
 * @param {string} className
 * @returns {HTMLElement}
 */
    createDivWithClass(className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }

    /**
     * define size to carousel's elements
     */
    setStyle() {

        let ratio = this.children.length / this.slidesVisible
        this.container.style.width = (ratio * 100) + "%"
        this.items.forEach(item =>
            item.style.width = ((100 / this.slidesVisible) / ratio) + "%",
        );

    }

    createNavigation() {
        let nextButton = this.createDivWithClass("carousel__next")
        let previousButton = this.createDivWithClass("carousel__prev")
        this.root.appendChild(nextButton)
        this.root.appendChild(previousButton)
        nextButton.addEventListener('click', this.next.bind(this))
        previousButton.addEventListener('click', this.prev.bind(this))
        if (this.options.loop === true) {
            return
        }

        this.onMove(index => {
            if (index === 0) {
                previousButton.classList.add('carousel__prev--hidden')
            } else {
                previousButton.classList.remove('carousel__prev--hidden')
            }

            if (this.items[this.currentSlide + this.slidesVisible] === undefined) {

                previousButton.classList.add('carousel__next--hidden')
            } else {

                previousButton.classList.remove('carousel__next--hidden')
            }
        })
    }

    next() {
        this.gotoSlide(this.currentSlide + this.sildesToScroll)
    }

    prev() {
        this.gotoSlide(this.currentSlide - this.sildesToScroll)

    }


    /**
     * move carousel to target element
     * @param {number} index
     */
    gotoSlide(index) {
        //debugger
        if (index < 0) {
            if (this.options.loop) {
                index = this.items.length - this.slidesVisible
            } else {
                retun
            }


        }
        else if (index >= this.items.length || (this.items[this.currentSlide + this.slidesVisible] === undefined && index > this.currentSlide)) {
            if (this.options.loop) {
                index = 0
            } else {
                retun
            }

            index = 0
        }
        else {
            let translateX = index * -100 / this.items.length
            this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)'
            this.currentSlide = index
            this.moveCallBack.forEach(cb => cb(index))
        }
    }

    /**
     * 
     * @param {moveCallback} cb 
     */
    onMove(cb) {
        this.moveCallBack.push(cb)
    }

    onWindowResize() {
        let mobile = window.innerWidth < 800
        if (mobile !== this.isMobile) {
            this.isMobile = mobile
            this.setStyle()
            this.moveCallBack.forEach(cb => cb(this.currentSlide))
            //this.options.slidesVisible = 2
        }
    }


    /**
     * @returns {number}
     */
    get sildesToScroll() {
        return this.isMobile ? 1 : this.options.sildesToScroll
    }


    /**
     * @returns {number}
     */
    get slidesVisible() {
        return this.isMobile ? 1 : this.options.slidesVisible
    }

}


document.addEventListener('DOMContentLoaded', function () {

    new Carousel(document.querySelector('#container-video-scroll1'), {
        sildesToScroll: 1,
        slidesVisible: 3,
        loop: true
    })

    new Carousel(document.querySelector('#container-video-scroll2'), {
        sildesToScroll: 1,
        slidesVisible: 3,
        loop: true
    })

    new Carousel(document.querySelector('#container-video-scroll3'), {
        sildesToScroll: 1,
        slidesVisible: 3,
        loop: true
    })

    new Carousel(document.querySelector('#container-video-scroll4'), {
        sildesToScroll: 1,
        slidesVisible: 3,
        loop: true
    })

})
