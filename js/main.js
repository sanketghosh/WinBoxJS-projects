const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')



about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'about me',
        // background: '#03b803',
        width: '450px',
        height: '400px',
        top: 40,
        left: 40,
        bottom: 40,
        right: 40,
        mount: aboutContent,
        onfocus: function () {
            this.setBackground('#03b803')
        },
        onblur: function () {
            this.setBackground('#525252')
        }
    })
})

contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: "contact me",
        // background: '#03b803',
        width: '450px',
        height: '400px',
        top: 60,
        left: 60,
        bottom: 40,
        right: 40,
        mount: contactContent,
        onfocus: function () {
            this.setBackground('#03b803')
        },
        onblur: function () {
            this.setBackground('#525252')
        }
    })
})

