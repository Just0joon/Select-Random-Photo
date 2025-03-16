let selectedImage

function random() {
	const images = [
		'#img1',
		'#img2',
		'#img3',
		'#img4',
		'#img5',
		'#img6',
		'#img7',
		'#img8',
		'#img9',
		'#img10',
		'#img11',
		'#img12',
		'#img13',
		'#img14',
	]

	let usedImages = []
	let IntervalID = setInterval(() => {
		if (usedImages.length === images.length) {
			usedImages = []
		}

		let NumberImage
		do {
			NumberImage = Math.floor(Math.random() * images.length)
		} while (usedImages.includes(NumberImage))

		usedImages.push(NumberImage)
		const random = images[NumberImage]

		$('.photo').css({ opacity: '0.5' })
		$(random).css({
			border: '2px solid #ffffff',
			opacity: '1.0',
		})

		selectedImage = random

		setTimeout(function () {
			if ($(random).is(selectedImage)) {
				$(this).css({
					border: 'yellow, solid, 2.5px'
				})
			} else {
				$(random).css({
					border: '',
					opacity: '0.5',
				})
			}
		}, 300)
	}, 300)

	setTimeout(() => clearInterval(IntervalID), 7500)
}
