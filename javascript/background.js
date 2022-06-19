const bgImages = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg']
const chosenImage = bgImages[Math.floor(Math.random() * bgImages.length)]
const bgImage = document.createElement('div')

bgImage.style.backgroundImage = `url('./img/${chosenImage}')`
bgImage.style.backgroundRepeat = "no-repeat";
bgImage.style.backgroundSize = 'cover'
bgImage.style.height = '100vh'

document.body.appendChild(bgImage)